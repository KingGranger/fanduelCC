import React, { Component } from "react";
import ArtistBlock from './artistBlock/artistBlock';
import './App.css';

const clientId = 'b238b8d38645462ab2ae05598e54bdfb';
const redirectUri = "https://kinggranger.github.io/fanduelCC/";

const tokenHash = window.location.hash.substring(1)
                  .split("&")
                  .reduce((initial, item) => {
                    if (item) {
                      var parts = item.split("=");
                      initial[parts[0]] = decodeURIComponent(parts[1]);
                    }
                    return initial;
                  }, {})

class App extends Component {
  state = {
    artistId: '4dpARuHxo51G3z768sgnrY',
    artistData: {},
    relatedArtistData: {},
    topTenData: {},
  }

  callSpotify = (artistId) => {
    let token = tokenHash.access_token
    if (token) {
      let headers = {
            headers: {
              'Authorization': 'Bearer ' + token
            }
          }

      fetch(`https://api.spotify.com/v1/artists/${artistId}`, headers)
        .then(res => res.json())
        .then(artistData => this.setState({artistData}));

      fetch(`https://api.spotify.com/v1/artists/${artistId}/top-tracks?country=us`, headers)
        .then(res => res.json())
        .then(topTenData => this.setState({topTenData}));

      fetch(`https://api.spotify.com/v1/artists/${artistId}/related-artists`, headers)
        .then(res => res.json())
        .then(relatedArtistData => this.setState({relatedArtistData}));
    }
  }

  componentDidMount() {
    this.callSpotify(this.state.artistId)
  }

  componentDidUpdate(prevProps, prevState){
    if (this.state.artistId !== prevState.artistId){
      this.callSpotify(this.state.artistId)
    }
  }

  changeArtist = (e, artistId) => {
    this.setState({artistId})
  }

  render() {
    let { artistData, topTenData, relatedArtistData } = this.state
    return (
      <div className="App">
        {Object.keys(artistData).length === 0 || artistData.error ? <button className='GetToken'><a href={`https://accounts.spotify.com/authorize?client_id=${clientId}&redirect_uri=${redirectUri}&response_type=token`}>Generate Spotify Token</a></button> : null}
        <br/>
        {artistData.id ? <ArtistBlock artistData={artistData} relatedArtistData={relatedArtistData} changeArtist={this.changeArtist} topTenData={topTenData}/> : null}
    </div>
    );
  }
}
export default App;

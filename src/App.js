import React, { Component } from "react";
import ArtistBlock from './artistBlock/artistBlock';


const clientId = 'b238b8d38645462ab2ae05598e54bdfb';
const redirectUri = "http://localhost:3000";

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

  componentDidMount() {
    let token = tokenHash.access_token
    if (token) {
      let headers = {
            headers: {
              'Authorization': 'Bearer ' + token
            }
          }

      fetch(`https://api.spotify.com/v1/artists/${this.state.artistId}`, headers)
        .then(res => res.json())
        .then(artistData => this.setState({artistData}));

      fetch(`https://api.spotify.com/v1/artists/${this.state.artistId}/top-tracks?country=us`, headers)
        .then(res => res.json())
        .then(topTenData => this.setState({topTenData}));

      fetch(`https://api.spotify.com/v1/artists/${this.state.artistId}/related-artists`, headers)
        .then(res => res.json())
        .then(relatedArtistData => this.setState({relatedArtistData}));
    }
  }

  changeArtist = (e) => {
    e.preventDefault();
    console.log(e)
  }

  render() {
    let { artistData, topTenData, relatedArtistData } = this.state
    return (
      <div className="App">
        <a href={`https://accounts.spotify.com/authorize?client_id=${clientId}&redirect_uri=${redirectUri}&response_type=token`}>click me</a>
        <br/>
        {artistData.id ? <ArtistBlock artistData={artistData} relatedArtistData={relatedArtistData} changeArtist={this.changeArtist}/> : null}
    </div>
    );
  }
}
export default App;

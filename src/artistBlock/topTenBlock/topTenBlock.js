import React from "react";
import { List, Header, Segment } from 'semantic-ui-react';


const TopTen = (props) => {
  const {topTenData} = props
  const errorMessage = ['Sorry no Top Ten tracks']
  const topTenList = () => {
    return Object.keys(topTenData).length !== 0 && !Object.keys(topTenData).includes('error') ? topTenData.tracks : errorMessage
  }
  const parseSong = (uri) => {
    return uri.split(':')
  }

  return (
    <Segment>
      <Header>Top Ten List</Header>
      <List ordered>
        {topTenList() !== errorMessage && topTenList().length > 0 ? topTenList().map(song => {
          let track = parseSong(song.uri)
          return (<List.Item key={song.id}>
            {song.name}
            <br/>
            <iframe src={`https://open.spotify.com/embed/${track[1]}/${track[2]}`} width="100%" height="100px" frameBorder="0" allowtransparency="true" allow="encrypted-media"></iframe>
          </List.Item>
          )
        }): null}
      </List>
    </Segment>
  )
}

export default TopTen

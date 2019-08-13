import React from "react";
import { List, Header, Image, Button, Icon, Segment } from 'semantic-ui-react';


const TopTen = (props) => {
  const {topTenData} = props
  const errorMessage = ['Sorry no Top Ten tracks']
  const topTenList = () => {
    return Object.keys(topTenData).length !== 0 && !Object.keys(topTenData).includes('error') ? topTenData.tracks : errorMessage
  }
  return (
    <Segment>
      <Header>Top Ten List</Header>
      <List ordered>
        {topTenList() !== errorMessage && topTenList().length > 0 ? topTenList().map(song => {
          return (<List.Item key={song.id}>
            {song.name}
            <br/>
            <audio controls style={{width: "100px"}}>
              <source src={song.preview_url}/>
            </audio>
          </List.Item>
          )
        }): null}
      </List>
    </Segment>
  )
}

export default TopTen

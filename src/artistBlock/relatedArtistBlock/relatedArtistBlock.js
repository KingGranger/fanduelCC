import React from "react";
import { Segment, List, Image, Header } from 'semantic-ui-react';

const RelatedArtistBlock = (props) => {
  const {relatedArtistData, changeArtist} = props
  const errorMessage = ['Sorry no related Artists']
  const relatedArtistList = () => {
    return Object.keys(relatedArtistData).length !== 0 && !Object.keys(relatedArtistData).includes('error') ? relatedArtistData.artists : errorMessage
  }
  return(
    <Segment textAlign='center'>
      <Header>Related Artists</Header>
      {relatedArtistList() !== errorMessage ? "Click on Artist for more information" : null}
      <List horizontal>
        {(relatedArtistList()["0"] && relatedArtistList() !== errorMessage) ? relatedArtistList().map(artist => {
          return (<List.Item key={artist.id} onClick={(e)=>changeArtist(e, artist.id)}>
            {artist.name}
            <br/>
            <Image src={artist.images.length !== 0 ? artist.images[artist.images.length -1].url : ""}/>
          </List.Item>)
        }) :
        <List.Item>{errorMessage[0]}</List.Item>
      }
      </List>
    </Segment>
  )

}

export default RelatedArtistBlock

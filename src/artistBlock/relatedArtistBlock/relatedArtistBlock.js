import React from "react";
import { Segment, List } from 'semantic-ui-react';

const RelatedArtistBlock = (props) => {
  const {relatedArtistData, changeArtist} = props
  const errorMessage = ['Sorry no related Artists']
  const relatedArtistList = () => {
    return Object.keys(relatedArtistData).length !== 0 && !Object.keys(relatedArtistData).includes('error') ? relatedArtistData.artists : errorMessage
  }
  console.log("related artist block props", relatedArtistData, relatedArtistList())


  return(
    <Segment>
      <List horizontal>
        {relatedArtistList().map(artist => {
          return (<List.Item>
            {artist.name}
          </List.Item>)
        })}
      </List>
    </Segment>
  )

}

export default RelatedArtistBlock

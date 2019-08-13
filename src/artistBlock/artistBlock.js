import React from "react";
import { Container, Header, Image, Button, Icon, Grid } from 'semantic-ui-react';
import RelatedArtistBlock from './relatedArtistBlock/relatedArtistBlock';
import TopTen from './topTenBlock/topTenBlock';

const ArtistBlock = (props) => {
  const {artistData, relatedArtistData, changeArtist, topTenData} = props
  const artistImage = () => Object.keys(artistData).length !== 0 && !Object.keys(artistData).includes('error') ? artistData.images[1].url : ""
  const artistFollowers = () => Object.keys(artistData).length !== 0 && !Object.keys(artistData).includes('error') ? artistData.followers.total : ""
  const artistPage = () => Object.keys(artistData).length !== 0 && !Object.keys(artistData).includes('error') ? artistData.external_urls.spotify : ""

  return (
    <Container textAlign='center'>
      <Grid celled>
        <Grid.Row>
          <Grid.Column width={13}>
            <Header as='h1'>{artistData.name}</Header>
            <Image src={artistImage()} centered/>
            <h2>{artistData.name} has {artistFollowers()} followers</h2>
            <Button color='green' icon><a href={artistPage()}><Icon name='spotify'></Icon>Artist Page</a></Button>
          </Grid.Column>
          <Grid.Column width={3}>
            <TopTen topTenData={topTenData}/>
          </Grid.Column>
        </Grid.Row>

        <RelatedArtistBlock relatedArtistData={relatedArtistData} changeArtist={changeArtist}/>
      </Grid>
    </Container>
  )
}

export default ArtistBlock

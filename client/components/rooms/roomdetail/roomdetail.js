import React from 'react'
import { Grid, Button, Icon } from 'semantic-ui-react'

const RoomDetail = () => (
  <div style={{ width: '1100px', margin: '20px 360px', paddingTop: '30px' }}>
    <h1> <Icon name='left chevron' />Room - CB2301</h1>
    {/* <h2 style={{ marginLeft: '35px' }}>CB2301</h2> */}
    <Grid size='huge' divided='vertically'>
      <Grid.Column width={4}>
        <h3 style={{margin: '30px 100px'}} >Name:</h3>
        <h3 style={{margin: '30px 100px'}}>Type:</h3>
        <h3 style={{margin: '30px 100px'}}>Quantity:</h3>
        <h3 style={{margin: '30px 100px'}}>Building:</h3>
      </Grid.Column>
      <Grid.Column floated='left' width={9}>
        <h3 style={{marginTop: '30px'}}>CB2301</h3>
        <h3 style={{marginTop: '30px'}}>Lecture</h3>
        <h3 style={{marginTop: '30px'}}>150 people</h3>
        <h3 style={{marginTop: '30px'}}>Classroom Building II</h3>
      </Grid.Column>
    </Grid>
    <Button primary size='large' floated='right' style={{ marginTop: '30px', marginRight: '90px' }}>
      Edit
      <Icon name='right chevron' />
    </Button>
    <Button size='large'floated='right' style={{ marginTop: '30px' }}>Delete</Button>
  </div>
)

export default RoomDetail

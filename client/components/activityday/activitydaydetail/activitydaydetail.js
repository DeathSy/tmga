import React from 'react'
import { Grid, Button, Icon, Header } from 'semantic-ui-react'

const ActivityDetail = () => (
  <div style={{ margin: '20px 40px 20px 360px', paddingTop: '30px' }}>
    <Header as='h1'><Icon name='left chevron' />Conditions - Activity Day</Header>
    <Grid size='large' divided='vertically' >
      <Grid.Column width={4}>
        <Header as='h3' style={{ margin: '30px 100px' }}>Monday:</Header>
        <Header as='h3' style={{ margin: '30px 100px' }}>Tuesday:</Header>
        <Header as='h3' style={{ margin: '30px 100px' }}>Wednesday:</Header>
        <Header as='h3' style={{ margin: '30px 100px' }}>Thursday:</Header>
        <Header as='h3' style={{ margin: '30px 100px' }}>Friday:</Header>
      </Grid.Column>
      <Grid.Column floated='left' width={9} >
        <Header as='h3' style={{ marginTop: '30px' }}><Icon name='x' color='red' />13:00-17:00</Header>
        <Header as='h3' style={{ marginTop: '30px' }}><Icon name='checkmark' color='green' />All day</Header>
        <Header as='h3' style={{ marginTop: '30px' }}><Icon name='checkmark' color='green' />All day</Header>
        <Header as='h3' style={{ marginTop: '30px' }}><Icon name='checkmark' color='green' />All Day</Header>
        <Header as='h3' style={{ marginTop: '30px' }}><Icon name='checkmark' color='green' />All Day</Header>
      </Grid.Column>
    </Grid>
    <Button primary size='large' floated='right' style={{ marginTop: '30px', marginRight: '90px' }}>
      Edit
      <Icon name='right chevron' />
    </Button>
    <Button size='large' floated='right' style={{ marginTop: '30px' }}>Delete</Button>
  </div>
)

export default ActivityDetail

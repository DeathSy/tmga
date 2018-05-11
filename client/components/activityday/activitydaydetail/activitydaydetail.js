import React from 'react'
import { Grid, Button, Icon } from 'semantic-ui-react'

const ActivityDetail = () => (
  <div style={{ width: '1100px', margin: '20px 360px', paddingTop: '30px' }}>
    <h1> <Icon name='left chevron' />Conditions - Activity Day</h1>
    <Grid size='large' divided='vertically'>
      <Grid.Column width={4}>
        <h3 style={{ margin: '30px 100px' }}>Monday:</h3>
        <h3 style={{ margin: '30px 100px' }}>Tuesday:</h3>
        <h3 style={{ margin: '30px 100px' }}>Wednesday:</h3>
        <h3 style={{ margin: '30px 100px' }}>Thursday:</h3>
        <h3 style={{ margin: '30px 100px' }}>Friday:</h3>
      </Grid.Column>
      <Grid.Column floated='left' width={9}>
        <h3 style={{marginTop: '30px'}}><Icon name='x' color='red' />13:00-17:00</h3>
        <h3 style={{marginTop: '30px'}}><Icon name='checkmark' color='green' />All day</h3>
        <h3 style={{marginTop: '30px'}}><Icon name='checkmark' color='green' />All day</h3>
        <h3 style={{marginTop: '30px'}}><Icon name='checkmark' color='green' />All Day</h3>
        <h3 style={{marginTop: '30px'}}><Icon name='checkmark' color='green' />All Day</h3>
      </Grid.Column>
    </Grid>
    <Button primary size='large' floated='right' style={{ marginTop: '30px', marginRight: '90px' }}>
      Edit
      <Icon name='right chevron' />
    </Button>
    <Button size='large'floated='right' style={{ marginTop: '30px' }}>Delete</Button>
  </div>
)

export default ActivityDetail

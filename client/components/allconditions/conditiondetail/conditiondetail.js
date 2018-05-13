import React from 'react'
import { Grid, Button, Icon, Header } from 'semantic-ui-react'

const ConditionDetail = () => (
  <div style={{ width: '1100px', margin: '20px 360px', paddingTop: '30px' }}>
    <Header as='h1'> <Icon name='left chevron' />Conditions</Header>
    <Header as='h2' style={{ marginLeft: '35px' }}>Aj.Atchara Tranu-raikul</Header>
    <Grid size='large' divided='vertically'>
      <Grid.Column width={4}>
        <Header as='h3' style={{ margin: '30px 100px' }}>Monday:</Header>
        <Header as='h3' style={{ margin: '30px 100px' }}>Tuesday:</Header>
        <Header as='h3' style={{ margin: '30px 100px' }}>Wednesday:</Header>
        <Header as='h3' style={{ margin: '30px 100px' }}>Thursday:</Header>
        <Header as='h3' style={{ margin: '30px 100px' }}>Friday:</Header>
      </Grid.Column>
      <Grid.Column floated='left' width={9} style={{ marginTop: '45px' }}>
        <Header as='h3'><Icon name='x' color='red' />11:00-12:00</Header>
        <Header as='h3'><Icon name='x' color='red' />All day</Header>
        <Header as='h3'><Icon name='x' color='red' />8:00-12:00</Header>
        <Header as='h3'><Icon name='checkmark' color='green' />All Day</Header>
        <Header as='h3'><Icon name='checkmark' color='green' />All Day</Header>
      </Grid.Column>
    </Grid>
    <Button primary size='large' floated='right' style={{ marginTop: '30px', marginRight: '90px' }}>
      Edit
      <Icon name='right chevron' />
    </Button>
    <Button size='large'floated='right' style={{ marginTop: '30px' }}>Delete</Button>
  </div>
)

export default ConditionDetail

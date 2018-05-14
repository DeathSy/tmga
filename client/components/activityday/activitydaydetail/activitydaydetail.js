import React from 'react'
import { Grid, Button, Icon, Header, Card } from 'semantic-ui-react'

const ActivityDetail = () => (
  <div style={{ margin: '20px 40px 20px 360px', paddingTop: '30px' }}>
    <Header as='h1'>Conditions - Activity Day</Header>
    <Card fluid>
      <Card.Content>
        <Grid columns='equal' style={{ marginTop: 12, marginLeft: 30 }}>
          <Grid.Column width={2} verticalAlign='middle'>
            <Header>Monday:</Header>
          </Grid.Column>
          <Grid.Column width={12}>
            <Header as='h3'>
              <Icon name='x' color='red' />
              13:00-17:00
            </Header>
          </Grid.Column>
        </Grid>
        <Grid columns='equal' style={{ marginLeft: 30 }}>
          <Grid.Column width={2} verticalAlign='middle'>
            <Header>Tuesday</Header>
          </Grid.Column>
          <Grid.Column width={12}>
            <Header as='h3'>
              <Icon name='checkmark' color='green' />
                All day
            </Header>
          </Grid.Column>
        </Grid>
        <Grid columns='equal' style={{ marginLeft: 30 }}>
          <Grid.Column width={2} verticalAlign='middle'>
            <Header>Wednesday</Header>
          </Grid.Column>
          <Grid.Column width={12}>
            <Header as='h3'>
              <Icon name='checkmark' color='green' />
                All day
            </Header>
          </Grid.Column>
        </Grid>
        <Grid columns='equal' style={{ marginLeft: 30 }}>
          <Grid.Column width={2} verticalAlign='middle'>
            <Header>Thursday</Header>
          </Grid.Column>
          <Grid.Column width={12}>
            <Header as='h3'>
              <Icon name='checkmark' color='green' />
                All day
            </Header>
          </Grid.Column>
        </Grid>
        <Grid columns='equal' style={{ marginLeft: 30 }}>
          <Grid.Column width={2} verticalAlign='middle'>
            <Header>Friday</Header>
          </Grid.Column>
          <Grid.Column width={12}>
            <Header as='h3'>
              <Icon name='checkmark' color='green' />
                All day
            </Header>
          </Grid.Column>
        </Grid>
        <Button primary size='large' floated='right' style={{ margin: '12px' }}>
          Edit
          <Icon name='right chevron' />
        </Button>
        <Button size='large' floated='right' style={{ marginTop: '12px' }}>Delete</Button>
      </Card.Content>
    </Card>
  </div>
)

export default ActivityDetail

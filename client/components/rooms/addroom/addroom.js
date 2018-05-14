import React, { Component } from 'react'
import { Button, Form, Icon, Grid, Header } from 'semantic-ui-react'

const type = [
  { key: 'lecture', text: 'Lecture', value: 'lecture' },
  { key: 'lab', text: 'Lab', value: 'lab' }
]
const buildings = [
  { key: 'cb', text: 'Classroom Building II', value: 'cb2' },
  { key: 'sit', text: 'SIT Building', value: 'sit' }
]
class AddRoom extends Component {
  state = {}

  render () {
    return (
      <div style={{ margin: '20px 40px 20px 360px', paddingTop: '30px' }}>
        <Header as='h1'> <Icon name='left chevron' />Add New Room</Header>
        <Grid columns='equal' style={{ marginTop: 12, marginLeft: 30 }}>
          <Grid.Column width={2} verticalAlign='middle'>
            <Header>Name:</Header>
          </Grid.Column>
          <Grid.Column width={12}>
            <Form.Input
              fluid
              type='text'
              name='roomname'
              placeholder='Room Name' />
          </Grid.Column>
        </Grid>
        <Grid columns='equal' style={{ marginLeft: 30 }}>
          <Grid.Column width={2} verticalAlign='middle'>
            <Header>Type:</Header>
          </Grid.Column>
          <Grid.Column width={12}>
            <Form.Select
              fluid
              type='dropdown'
              options={type}
              name='type'
              placeholder='Type' />
          </Grid.Column>
        </Grid>
        <Grid columns='equal' style={{ marginLeft: 30 }}>
          <Grid.Column width={2} verticalAlign='middle'>
            <Header>Quantity:</Header>
          </Grid.Column>
          <Grid.Column width={12}>
            <Form.Input
              fluid
              type='input'
              name='type'
              placeholder='Type' />
          </Grid.Column>
        </Grid>
        <Grid columns='equal' style={{ marginLeft: 30 }}>
          <Grid.Column width={2} verticalAlign='middle'>
            <Header>Building:</Header>
          </Grid.Column>
          <Grid.Column width={12}>
            <Form.Select
              fluid
              type='dropdown'
              options={buildings}
              name='building'
              placeholder='Building' />
          </Grid.Column>
        </Grid>
        <Button primary floated='right' size='large' style={{ marginTop: 12 }}>Add</Button>
        <Button floated='right' size='large' style={{ marginTop: 12 }}>Cancel</Button>
      </div>
    )
  }
}

export default AddRoom

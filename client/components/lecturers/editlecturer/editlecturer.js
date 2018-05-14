import React, { Component } from 'react'
import { Button, Grid, Form, Icon, Header } from 'semantic-ui-react'
import TagsInput from 'react-tagsinput'

class AddLecturers extends Component {
  render () {
    return (
      <div style={{ margin: '20px 40px 20px 360px', paddingTop: '30px' }}>
        <Header as='h1'> <Icon name='left chevron' />Edit - Aj.Atchara TranUraikul</Header>
        <Grid columns='equal' style={{ marginTop: 12, marginLeft: 30 }}>
          <Grid.Column width={2} verticalAlign='middle'>
            <Header>First name:</Header>
          </Grid.Column>
          <Grid.Column width={12}>
            <Form.Input inline
              fluid
              placeholder='First name'
              value={'Atchara'}
              readOnly
            />
          </Grid.Column>
        </Grid>
        <Grid columns='equal' style={{ marginLeft: 30 }}>
          <Grid.Column width={2} verticalAlign='middle'>
            <Header>Last name:</Header>
          </Grid.Column>
          <Grid.Column width={12}>
            <Form.Input inline
              fluid
              placeholder='Last name'
              value={'Tranu-raikul'}
              readOnly
            />
          </Grid.Column>
        </Grid>
        <Grid columns='equal' style={{ marginLeft: 30 }}>
          <Grid.Column width={2} verticalAlign='middle'>
            <Header>Email:</Header>
          </Grid.Column>
          <Grid.Column width={12}>
            <Form.Input inline
              fluid
              placeholder='Email'
            />
          </Grid.Column>
        </Grid>
        <Grid columns='equal' style={{ marginLeft: 30 }}>
          <Grid.Column width={2} verticalAlign='middle'>
            <Header>Tel:</Header>
          </Grid.Column>
          <Grid.Column width={12}>
            <Form.Input inline
              fluid
              placeholder='Tel'
            />
          </Grid.Column>
        </Grid>
        <Grid columns='equal' style={{ marginLeft: 30 }}>
          <Grid.Column width={2} verticalAlign='middle'>
            <Header>Subject Code:</Header>
          </Grid.Column>
          <Grid.Column width={12}>
            <Form.Group>
              <Form.Field>
                <TagsInput value={[]} />
              </Form.Field>
            </Form.Group>
          </Grid.Column>
        </Grid>
        <Button primary floated='right' size='large' style={{ marginTop: 12 }}>Edit</Button>
        <Button floated='right' size='large' style={{ marginTop: 12 }} >Cancel</Button>
      </div>
    )
  }
}

export default AddLecturers

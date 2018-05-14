import React, { Component } from 'react'
import { Button, Form, Icon, Grid, Header } from 'semantic-ui-react'
import TagsInput from 'react-tagsinput'

const iconStyle = {
  cursor: 'pointer'
}

class AddLecturers extends Component {
  state = {}

  handleChange = (e, { value }) => this.setState({ value })

  render () {
    return (
      <div style={{ margin: '20px 40px 20px 360px', paddingTop: '30px' }}>
        <Header as='h1'>
          <Icon style={iconStyle} name='left chevron' onClick={this.props.changeState} />
          Create New Lecturer
        </Header>
        <Grid columns='equal' style={{ marginTop: 12 }}>
          <Grid.Column width={3} textAlign='center' verticalAlign='middle'>
            <Header>Firstname:</Header>
          </Grid.Column>
          <Grid.Column width={12}>
            <Form.Input
              fluid
              type='text'
              name='firstname'
              placeholder='Lecturer firstname' />
          </Grid.Column>
        </Grid>
        <Grid columns='equal'>
          <Grid.Column width={3} textAlign='center' verticalAlign='middle'>
            <Header>Lastname:</Header>
          </Grid.Column>
          <Grid.Column width={12}>
            <Form.Input
              fluid
              type='text'
              name='lastname'
              placeholder='Lecturer lastname' />
          </Grid.Column>
        </Grid>
        <Grid columns='equal'>
          <Grid.Column width={3} textAlign='center' verticalAlign='middle'>
            <Header>Tel:</Header>
          </Grid.Column>
          <Grid.Column width={12}>
            <Form.Input
              fluid
              type='tel'
              name='tel'
              placeholder='Lecturer tel number' />
          </Grid.Column>
        </Grid>
        <Grid columns='equal'>
          <Grid.Column width={3} textAlign='center' verticalAlign='middle'>
            <Header>E-mail:</Header>
          </Grid.Column>
          <Grid.Column width={12}>
            <Form.Input
              fluid
              type='email'
              name='email'
              placeholder='Lecturer email' />
          </Grid.Column>
        </Grid>
        <Grid columns='equal' style={{ marginBottom: 12 }}>
          <Grid.Column width={3} textAlign='center' verticalAlign='middle'>
            <Header>Subjects:</Header>
          </Grid.Column>
          <Grid.Column width={12}>
            <Form.Group>
              <Form.Field>
                <TagsInput value={[]} />
              </Form.Field>
            </Form.Group>
          </Grid.Column>
        </Grid>
        <Button primary floated='right' size='large'>Add</Button>
        <Button floated='right' size='large'>Cancel</Button>
      </div>
    )
  }
}

export default AddLecturers

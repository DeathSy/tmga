import React, { Component } from 'react'
import { Button, Form, Input, Icon, Grid, Header } from 'semantic-ui-react'

class AddLecturers extends Component {
  state = {}

  handleChange = (e, { value }) => this.setState({ value })

  render () {
    return (
      <div style={{ margin: '20px 40px 20px 360px', paddingTop: '30px' }}>
        <Header as='h1'> <Icon name='left chevron' />Create New Lecturer</Header>
        <Grid size='huge' divided='vertically'>
          <Grid.Column width={5}>
            <Header as='h3' style={{ margin: '30px 100px' }}>First Name:</Header>
            <Header as='h3' style={{ margin: '30px 100px' }}>Last Name:</Header>
            <Header as='h3' style={{ margin: '30px 100px' }}>Email: </Header>
            <Header as='h3' style={{ margin: '30px 100px' }}>Tel: </Header>
            <Header as='h3' style={{ margin: '30px 100px' }}>Subject:</Header>
          </Grid.Column>
          <Grid.Column floated='left' width={3}>
            <Form style={{ marginTop: '25px' }}>
              <Form.Field inline control={Input} placeholder='First name' style={{ width: '400px' }} />
              <Form.Field inline control={Input} placeholder='Last name' style={{ width: '400px' }} />
              <Form.Field inline control={Input} placeholder='Email' style={{ width: '400px' }} />
              <Form.Field inline control={Input} placeholder='Tel' style={{ width: '400px' }} />
              <Input icon placeholder='Subject'>
                <Icon name='add' />
                <input />
              </Input>
            </Form>
          </Grid.Column>
        </Grid>
        <Button primary floated='right' size='large'>Add</Button>
        <Button floated='right' size='large'>Cancel</Button>
      </div>
    )
  }
}

export default AddLecturers

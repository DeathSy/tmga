import React, { Component } from 'react'
import { Button, Form, Input, Icon, Grid } from 'semantic-ui-react'

class AddLecturers extends Component {
  state = {}

  handleChange = (e, { value }) => this.setState({ value })

  render () {
    const subjectOptions = [
      { key: 'int101', value: 'int101', text: 'INT101' },
      { key: 'int102', value: 'int102', text: 'INT102' }]
    return (
      <div style={{ width: '1000px', margin: '20px 360px', paddingTop: '30px' }}>
        <h1> <Icon name='left chevron' />Create New Lecturer</h1>
        <Grid size='huge' divided='vertically'>
          <Grid.Column width={5}>
            <h3 style={{ margin: '30px 100px' }}>First Name:</h3>
            <h3 style={{ margin: '30px 100px' }}>Last Name:</h3>
            <h3 style={{ margin: '30px 100px' }}>Email: </h3>
            <h3 style={{ margin: '30px 100px' }}>Tel: </h3>
            <h3 style={{ margin: '30px 100px' }}>Subject:</h3>
          </Grid.Column>
          <Grid.Column floated='left' width={3}>
            <Form style={{ marginTop: '25px' }}>
              <Form.Field inline control={Input} placeholder='First name' style={{ width: '400px' }}/>
              <Form.Field inline control={Input} placeholder='Last name' style={{ width: '400px' }}/>
              <Form.Field inline control={Input} placeholder='Email' style={{ width: '400px' }} />
              <Form.Field inline control={Input} placeholder='Tel' style={{ width: '400px' }}/>
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

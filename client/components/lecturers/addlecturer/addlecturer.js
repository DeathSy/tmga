import React, { Component } from 'react'
import { Button, Checkbox, Form, Input, Icon } from 'semantic-ui-react'

class AddLecturers extends Component {
  state = {}

  handleChange = (e, { value }) => this.setState({ value })

  render() {

    const { value } = this.state
    return (
      <div style={{ marginLeft: '300px', marginTop: '30px' }}>
        <h1 style={{ margin: '30px 0px' }}> <Icon name='left chevron' />Create New Lecturer</h1>
        <Form style={{ width: '700px', marginLeft: '30px' }}>
          <Form.Field inline control={Input} label='First name:' placeholder='First name' style={{ width: '250px' }}/>
          <Form.Field inline control={Input} label='Last name:' placeholder='Last name' style={{ width: '250px' }}/>
          <Form.Field inline control={Input} label='Email:' placeholder='Email' style={{ width: '250px' }} />
          <Form.Field inline control={Input} label='Tel:' placeholder='Tel' style={{ width: '250px' }}/>
          <Form.Group inline>
            <Form.Field inline control={Input} label='Subject:' placeholder='Subject Code' style={{ width: '150px' }} />
            <Icon name='plus' />
          </Form.Group>
          <Button primary floated='right'>Add</Button>
          <Button floated='right'>Cancel</Button>
        </Form>
      </div>
    )
  }
}

export default AddLecturers

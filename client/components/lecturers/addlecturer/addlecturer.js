import React, { Component } from 'react'
import { Button, Checkbox, Form, Input, Icon } from 'semantic-ui-react'

class AddLecturers extends Component {
  state = {}

  handleChange = (e, { value }) => this.setState({ value })

  render() {

    const { value } = this.state
    return (
      <div style={{ width: '1100px', margin: '20px 360px', paddingTop: '30px' }}>
        <h1> <Icon name='left chevron' />Create New Lecturer</h1>
        <Form size='large' style={{ width: '1000px', marginLeft: '30px', padding: '30px' }}>
          <Form.Field inline control={Input} label='First name:' placeholder='First name' style={{ width: '400px' }}/>
          <Form.Field inline control={Input} label='Last name:' placeholder='Last name' style={{ width: '400px' }}/>
          <Form.Field inline control={Input} label='Email:' placeholder='Email' style={{ width: '400px' }} />
          <Form.Field inline control={Input} label='Tel:' placeholder='Tel' style={{ width: '400px' }}/>
          <Form.Group inline>
            <Form.Field inline control={Input} label='Subject:' placeholder='Subject Code' style={{ width: '200px' }} />
            <Icon name='plus' />
          </Form.Group>
          <Button primary floated='right' size='large'>Add</Button>
          <Button floated='right' size='large'>Cancel</Button>
        </Form>
      </div>
    )
  }
}

export default AddLecturers

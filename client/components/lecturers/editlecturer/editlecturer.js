import React, { Component } from 'react'
import { Button, Checkbox, Form, Input, Icon } from 'semantic-ui-react'

class AddLecturers extends Component {
  state = {}

  render () {

    return (
      <div style={{ width: '1100px', margin: '20px 360px', paddingTop: '30px' }}>
        <h1> <Icon name='left chevron' />Edit - Aj.Atchara TranUraikul</h1>
        <Form size='large' style={{ width: '1000px', marginLeft: '30px', padding: '30px' }}>
          <Form.Field inline control={Input} label='First name:' placeholder='First name' value={'Atchara'} readOnly style={{ width: '400px' }}/>
          <Form.Field inline control={Input} label='Last name:' placeholder='Last name' value={'TranUraikul'} readOnly style={{ width: '400px' }}/>
          <Form.Field inline control={Input} label='Email:' placeholder='Email' value={'atchara@sit.kmutt.ac.th'}style={{ width: '400px' }} />
          <Form.Field inline control={Input} label='Tel:' placeholder='Tel' value={'021234567'}style={{ width: '400px' }}/>
          <Form.Group inline>
            <Form.Field inline control={Input} label='Subject:' placeholder='Subject Code' style={{ width: '200px' }} />
            <Icon name='plus' />
          </Form.Group>
          <Button primary floated='right' size='large'>Edit</Button>
          <Button floated='right' size='large'>Cancel</Button>
        </Form>
      </div>
    )
  }
}

export default AddLecturers

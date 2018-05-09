import React, { Component } from 'react'
import { Button, Grid, Form, Input, Icon } from 'semantic-ui-react'

class AddLecturers extends Component {

  render () {

    return (
      <div style={{ width: '1100px', margin: '20px 360px', paddingTop: '30px' }}>
        <h1> <Icon name='left chevron' />Edit - Aj.Atchara TranUraikul</h1>
        <Grid size='huge' divided='vertically'>
          <Grid.Column width={5}>
            <h3 style={{ margin: '30px 100px' }}>First Name:</h3>
            <h3 style={{ margin: '30px 100px' }}>Last Name:</h3>
            <h3 style={{ margin: '30px 100px' }}>Email: </h3>
            <h3 style={{ margin: '30px 100px' }}>Tel: </h3>
            <h3 style={{ margin: '30px 100px' }}>Subject:</h3>
          </Grid.Column>
          <Grid.Column floated='left' width={4}>
            <Form style={{ width: '1000px', marginLeft: '-30px', marginTop: '25px' }}>
              <Form.Field inline control={Input} placeholder='First name' value={'Atchara'} readOnly style={{ width: '400px' }}/>
              <Form.Field inline control={Input} placeholder='Last name' value={'TranUraikul'} readOnly style={{ width: '400px' }}/>
              <Form.Field inline control={Input} placeholder='Email' value={'atchara@sit.kmutt.ac.th'}style={{ width: '400px' }} />
              <Form.Field inline control={Input} placeholder='Tel' value={'021234567'}style={{ width: '400px' }}/>
              <Form.Group inline>
                <Form.Field inline control={Input} placeholder='Subject Code' style={{ width: '200px' }} />
                <Icon name='plus' />
              </Form.Group>
            </Form>
          </Grid.Column>
        </Grid>
        <Button primary floated='right' size='large'>Edit</Button>
        <Button floated='right' size='large'>Cancel</Button>
      </div>
    )
  }
}

export default AddLecturers

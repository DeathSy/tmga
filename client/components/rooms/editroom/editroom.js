import React, { Component } from 'react'
import { Button, Select, Form, Input, Icon, Grid } from 'semantic-ui-react'

const type = [
  { key: 'lecture', text: 'Lecture', value: 'lecture' },
  { key: 'lab', text: 'Lab', value: 'lab' },
]
const buildings = [
  { key: 'cb', text: 'Classroom Building II', value: 'cb2' },
  { key: 'sit', text: 'SIT Building', value: 'sit' },
]
class AddRoom extends Component {
  state = {}

  render () {

    return (
      <div style={{ width: '1100px', margin: '20px 360px', paddingTop: '30px' }}>
        <h1> <Icon name='left chevron' />Edit Room</h1>
        <Grid size='huge' divided='vertically'>
          <Grid.Column width={3}>
            <h3 style={{margin: '30px 80px'}}>Name:</h3>
            <h3 style={{margin: '40px 80px'}}>Type:</h3>
            <h3 style={{margin: '40px 80px'}}>Quantity:</h3>
            <h3 style={{margin: '40px 80px'}}>Building:</h3>
          </Grid.Column>
          <Grid.Column floated='left' width={11}>
            <Form size='large' style={{ width: '1000px', marginLeft: '30px', padding: '30px' }}>
              <Form.Field inline control={Input} placeholder='Room name' value={'CB2301'} readOnly =style={{ width: '400px' }}/>
              <Form.Field inline control={Select} options={type} placeholder='Room Type' />
              <Form.Field inline control={Input} placeholder='Quantity' style={{ width: '300px' }}/>
              <Form.Field inline control={Select} options={buildings} placeholder='Building' />
              <Button primary floated='right' size='large'>Add</Button>
              <Button floated='right' size='large'>Cancel</Button>            
            </Form>           
          </Grid.Column>
        </Grid>
        
      </div>
    )
  }
}

export default AddRoom

import React, { Component } from 'react'
import { Button, Grid, Form, Input, Icon, Select, Checkbox } from 'semantic-ui-react'
const starttime = [
  { key: '8', text: '8:00', value: '8:00' },
  { key: '9', text: '9:00', value: '9:00' },
  { key: '10', text: '10:00', value: '10:00' },
  { key: '11', text: '11:00', value: '11:00' },
  { key: '12', text: '12:00', value: '12:00' },
  { key: '13', text: '13:00', value: '13:00' },
  { key: '14', text: '14:00', value: '14:00' },
  { key: '15', text: '15:00', value: '15:00' },
  { key: '16', text: '16:00', value: '16:00' }
]
const endtime = [
  { key: '9', text: '9:00', value: '9:00' },
  { key: '10', text: '10:00', value: '10:00' },
  { key: '11', text: '11:00', value: '11:00' },
  { key: '12', text: '12:00', value: '12:00' },
  { key: '13', text: '13:00', value: '13:00' },
  { key: '14', text: '14:00', value: '14:00' },
  { key: '15', text: '15:00', value: '15:00' },
  { key: '16', text: '16:00', value: '16:00' },
  { key: '17', text: '17:00', value: '17:00' }
]

class AddCondition extends Component {
  render () {
    return (
      <div style={{ width: '1100px', margin: '20px 360px', paddingTop: '30px' }}>
        <h1> <Icon name='left chevron' />Add New Condition</h1>
        <Grid size='huge' divided='vertically'>
          <Grid.Column width={6}>
            <h3 style={{ margin: '30px 100px' }}>Lecturer's Name: </h3>
            <h3 style={{ margin: '30px 100px' }}>Monday:</h3>
            <h3 style={{ margin: '30px 100px' }}>Tuesday:</h3>
            <h3 style={{ margin: '30px 100px' }}>Wednesday: </h3>
            <h3 style={{ margin: '30px 100px' }}>Thurday: </h3>
            <h3 style={{ margin: '30px 100px' }}>Friday:</h3>
          </Grid.Column>
          <Grid.Column floated='left' width={7}>
            <Form style={{ marginLeft: '-30px', marginTop: '25px' }}>
              <Form.Field control={Input} search placeholder='Name' />
              <Form.Group inline>
                <Form.Field control={Select} options={starttime} placeholder='Start time' />
                <Form.Field control={Select} options={endtime} placeholder='End time' />
                <Form.Field label='AllDay' control={Checkbox} />
              </Form.Group>
              <Form.Group inline>
                <Form.Field control={Select} options={starttime} placeholder='Start time' />
                <Form.Field control={Select} options={endtime} placeholder='End time' />
                <Form.Field label='AllDay' control={Checkbox} />
              </Form.Group><Form.Group inline>
                <Form.Field control={Select} options={starttime} placeholder='Start time' />
                <Form.Field control={Select} options={endtime} placeholder='End time' />
                <Form.Field label='AllDay' control={Checkbox} />
              </Form.Group><Form.Group inline>
                <Form.Field control={Select} options={starttime} placeholder='Start time' />
                <Form.Field control={Select} options={endtime} placeholder='End time' />
                <Form.Field label='AllDay' control={Checkbox} />
              </Form.Group><Form.Group inline>
                <Form.Field control={Select} options={starttime} placeholder='Start time' />
                <Form.Field control={Select} options={endtime} placeholder='End time' />
                <Form.Field label='AllDay' control={Checkbox} />
              </Form.Group>
            </Form>
          </Grid.Column>
        </Grid>
        <Button primary floated='right' size='large'>Add</Button>
        <Button floated='right' size='large'>Cancel</Button>
      </div>
    )
  }
}

export default AddCondition

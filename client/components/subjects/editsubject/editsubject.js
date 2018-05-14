import React from 'react'
import { Grid, Button, Icon, Form, Dropdown } from 'semantic-ui-react'

export default class EditSubject extends React.Component {
  state = {
    subjectId: 'INT101',
    subjectName: 'ITFundamentals'

  }
  render () {
    const typeOptions = [
      { key: 'lecture', value: 'Lecture', text: 'Lecture' },
      { key: 'lab', value: 'Lab', text: 'Lab' }]
    const timeOptions = [
      { key: '2', value: '2', text: '2 hours' },
      { key: '3', value: '3', text: '3 hours' }]

    const roomOptions = [
      { key: 'CB2301', value: 'CB2301', text: 'CB2301' },
      { key: 'CB2306', value: 'CB2306', text: 'CB2306' }]

    return (
      <div style={{ margin: '20px 40px 20px 360px', paddingTop: '30px' }}>
        <h1> <Icon name='left chevron' />Subject - INT101 IT Fundamentals</h1>
        <Grid size='huge' divided='vertically'>
          <Grid.Column width={4}>
            <h3 style={{ margin: '30px 100px' }}>ID:</h3>
            <h3 style={{ margin: '30px 100px' }}>Name:</h3>
            <h3 style={{ margin: '30px 100px' }}>Type: </h3>
            <h3 style={{ margin: '30px 100px' }}>Time: </h3>
            <h3 style={{ margin: '30px 100px' }}>Room:</h3>
            <h3 style={{ margin: '30px 100px' }}>Sections:</h3>
          </Grid.Column>
          <Grid.Column floated='left' width={4}>
            <Form style={{ marginTop: '25px' }}>
              <h3 style={{ marginTop: '30px' }}> {this.state.subjectId}</h3>
              <h3 style={{ marginTop: '30px', marginBottom: '25px' }}> {this.state.subjectName}</h3>
              <Form.Field>
                <Dropdown placeholder='Type' selection options={typeOptions} defaultValue='Lecture' />
              </Form.Field>
              <Form.Field>
                <Dropdown placeholder='Time' selection options={timeOptions} defaultValue='3' />
              </Form.Field>
              <Form.Field>
                <Dropdown placeholder='Room' search selection options={roomOptions} defaultValue='CB2306' />
              </Form.Field>
              <Form.Field>
                <input placeholder='Amount' />
              </Form.Field>
              <Form.Field>
                <Button floated='right'> <icon name='add' />Add Section</Button>
              </Form.Field>
            </Form>
          </Grid.Column>
        </Grid>
        <Button primary size='large' floated='right' style={{ marginTop: '30px', marginRight: '90px' }}>
          Add
          <Icon name='right chevron' />
        </Button>
        <Button size='large' floated='right' style={{ marginTop: '30px' }}>Delete</Button>
      </div>
    )
  }
}

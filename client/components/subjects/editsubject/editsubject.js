import React from 'react'
import { Grid, Button, Icon, Form, Dropdown, Header } from 'semantic-ui-react'
import TagsInput from 'react-tagsinput'

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
        <Grid columns='equal' style={{ marginTop: 12, marginLeft: 30 }}>
          <Grid.Column width={2} verticalAlign='middle'>
            <Header>Code:</Header>
          </Grid.Column>
          <Grid.Column width={12}>
            <Header>{this.state.subjectId}</Header>
          </Grid.Column>
        </Grid>
        <Grid columns='equal' style={{ marginLeft: 30 }}>
          <Grid.Column width={2} verticalAlign='middle'>
            <Header>Name:</Header>
          </Grid.Column>
          <Grid.Column width={12}>
            <Header>{this.state.subjectName}</Header>
          </Grid.Column>
        </Grid>
        <Grid columns='equal' style={{ marginLeft: 30 }}>
          <Grid.Column width={2} verticalAlign='middle'>
            <Header>Type:</Header>
          </Grid.Column>
          <Grid.Column width={12}>
            <Form.Select
              options={typeOptions}
              fluid
              type='tel'
              name='tel'
              placeholder='Lecturer tel number' />
          </Grid.Column>
        </Grid>
        <Grid columns='equal' style={{ marginLeft: 30 }}>
          <Grid.Column width={2} verticalAlign='middle' >
            <Header>Time:</Header>
          </Grid.Column>
          <Grid.Column width={12}>
            <Form.Select
              options={timeOptions}
              fluid
              type='email'
              name='email'
              placeholder='Lecturer email' />
          </Grid.Column>
        </Grid>
        <Grid columns='equal' style={{ marginLeft: 30 }}>
          <Grid.Column width={2} verticalAlign='middle'>
            <Header>Room:</Header>
          </Grid.Column>
          <Grid.Column width={12}>
            <Form.Select
              options={roomOptions}
              fluid
              type='email'
              name='email'
              placeholder='Lecturer email' />
          </Grid.Column>
        </Grid>
        <Grid columns='equal' style={{ marginBottom: 12, marginLeft: 30 }}>
          <Grid.Column width={2} verticalAlign='middle'>
            <Header>Sections:</Header>
          </Grid.Column>
          <Grid.Column width={12}>
            <Form.Group>
              <Form.Field>
                <TagsInput value={[]} />
              </Form.Field>
            </Form.Group>
          </Grid.Column>
        </Grid>
        <Button primary size='large' floated='right' style={{ marginTop: '12px', marginRight: '90px' }}>
          Add
          <Icon name='right chevron' />
        </Button>
        <Button size='large' floated='right' style={{ marginTop: '12px' }}>Delete</Button>
      </div>
    )
  }
}

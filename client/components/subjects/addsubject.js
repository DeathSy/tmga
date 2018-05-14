import React from 'react'
import { Grid, Button, Icon, Form, Header } from 'semantic-ui-react'
import styled from 'styled-components'
import { reduxForm, reset, Field } from 'redux-form'

const typeOptions = [
  { key: 'lecture', value: 'Lecture', text: 'Lecture' },
  { key: 'lab', value: 'Lab', text: 'Lab' }]

const timeOptions = [
  { key: '2', value: '2', text: '2 hours' },
  { key: '3', value: '3', text: '3 hours' }]

const Container = styled(Form)`
  margin: 20px 40px 20px 360px !important;
  padding-top: 30px !important;
`

const RowContainer = styled(Grid)`
  margin-top: 12px !important;
  margin-left: 12px !important;
`

export const AddSubject = props => (
  <Container onSubmit={props.handleSubmit}>
    <h1>
      <Icon name='left chevron' onClick={props.changeState('')} />
      Add new subject
    </h1>
    <RowContainer columns='equal'>
      <Grid.Column width={3} verticalAlign='middle'>
        <Header>Code:</Header>
      </Grid.Column>
      <Grid.Column width={12}>
        <Field
          component='input'
          type='text'
          name='code'
          placeholder='Subject code' />
      </Grid.Column>
    </RowContainer>
    <RowContainer columns='equal'>
      <Grid.Column width={3} verticalAlign='middle'>
        <Header>Name:</Header>
      </Grid.Column>
      <Grid.Column width={12}>
        <Field
          component='input'
          type='text'
          name='name'
          placeholder='Subject name' />
      </Grid.Column>
    </RowContainer>
    <RowContainer columns='equal'>
      <Grid.Column width={3} verticalAlign='middle'>
        <Header>Type:</Header>
      </Grid.Column>
      <Grid.Column width={12}>
        <Field
          component='select'
          name='type'>
          {typeOptions.map((option, index) => (
            <option key={index} value={option.value}>{option.text}</option>
          ))}
        </Field>
      </Grid.Column>
    </RowContainer>
    <RowContainer columns='equal'>
      <Grid.Column width={3} verticalAlign='middle' >
        <Header>Time:</Header>
      </Grid.Column>
      <Grid.Column width={12}>
        <Field component='select' name='time'>
          {timeOptions.map((option, index) => (
            <option key={index} value={option.value}>{option.text}</option>
          ))}
        </Field>
      </Grid.Column>
    </RowContainer>
    <RowContainer columns='equal'>
      <Grid.Column width={3} verticalAlign='middle'>
        <Header>Room:</Header>
      </Grid.Column>
      <Grid.Column width={12}>
        <Field component='select' name='room'>
          {props.rooms.map((option, index) => (
            <option key={index} value={option._id}>{option.name}</option>
          ))}
        </Field>
      </Grid.Column>
    </RowContainer>
    <RowContainer columns='equal'>
      <Grid.Column width={3} verticalAlign='middle'>
        <Header>Sections:</Header>
      </Grid.Column>
      <Grid.Column width={12}>
        <Field
          component='input'
          name='sectionAmount'
          min={0}
          max={4}
          type='number' />
      </Grid.Column>
    </RowContainer>
    <Button
      primary
      size='large'
      floated='right'
      type='submit'
      style={{ marginTop: '12px', marginRight: '90px' }}>
      Submit
    </Button>
    <Button
      size='large'
      floated='right'
      type='button'
      style={{ marginTop: '12px' }}>
      Delete
    </Button>
  </Container>
)

const submitSuccess = (result, dispatch) => dispatch(reset('subjectForm'))

export default reduxForm({
  form: 'subjectForm',
  onSubmitSuccess: submitSuccess
})(AddSubject)

import React from 'react'
import { Button, Form, Icon, Grid, Header } from 'semantic-ui-react'
import { compose } from 'recompose'
import { reduxForm, Field, reset } from 'redux-form'
import styled from 'styled-components'

const type = [
  { key: 'lecture', text: 'Lecture', value: 'lecture' },
  { key: 'lab', text: 'Lab', value: 'lab' }
]

const FormContainer = styled(Form)`
  margin: 20px 40px 20px 360px !important;
  padding-top: 30px !important;
`

const RowContainer = styled(Grid)`
  margin-top: 12px !important;
  margin-left: 30px !important;
`

const AddRoom = props => (
  <FormContainer onSubmit={props.handleSubmit}>
    <Header as='h1'>
      <Icon name='left chevron' onClick={props.changeState('')} />
      Add New Room in {props.type}
    </Header>
    <RowContainer columns='equal'>
      <Grid.Column width={2} verticalAlign='middle'>
        <Header>Name:</Header>
      </Grid.Column>
      <Grid.Column width={12}>
        <Field
          component='input'
          type='text'
          name='roomname'
          placeholder='Room Name' />
      </Grid.Column>
    </RowContainer>
    <RowContainer columns='equal'>
      <Grid.Column width={2} verticalAlign='middle'>
        <Header>Type:</Header>
      </Grid.Column>
      <Grid.Column width={12}>
        <Field component='select' name='type'>
          {type.map((option, index) => (
            <option key={index} value={option.value}>{option.value}</option>
          ))}
        </Field>
      </Grid.Column>
    </RowContainer>
    <RowContainer columns='equal'>
      <Grid.Column width={2} verticalAlign='middle'>
        <Header>Quantity:</Header>
      </Grid.Column>
      <Grid.Column width={12}>
        <Field
          component='input'
          type='number'
          name='amount'
          min={0}
          placeholder='Room amount' />
      </Grid.Column>
    </RowContainer>
    <Button primary floated='right' size='large' style={{ marginTop: 12 }}>Add</Button>
    <Button floated='right' size='large' style={{ marginTop: 12 }}>Cancel</Button>
  </FormContainer>
)

const submitSuccess = (result, dispatch) => dispatch(reset('roomForm'))

export default compose(
  reduxForm({
    form: 'roomForm',
    onSubmitSuccess: submitSuccess
  })
)(AddRoom)

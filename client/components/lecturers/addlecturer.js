import React from 'react'
import { Button, Form, Icon, Grid, Header } from 'semantic-ui-react'
import { reduxForm, Field, reset } from 'redux-form'
import TagsInput from 'react-tagsinput'
import Autosuggest from 'react-autosuggest'
import styled, { injectGlobal } from 'styled-components'

injectGlobal`
  li {
    list-style-type: none !important;
  }
`

const StyledForm = styled(Form) `
  margin: 20px 40px 20px 360px;
  padding-top: 30px;
`

const StyledIcon = styled(Icon) `
  cursor: pointer;
`

const RowContainer = styled(Grid) `
  margin-top: 12px !important;
  margin-left: 30px !important;
`

const StyledSpan = styled.span`
  padding: 5px 0;
`

const submitSuccess = (result, dispatch) => dispatch(reset('allLecturer'))

const autosuggestRenderInput = subjects => ({ addTag, ...props }) => {
  const handleOnChange = (e, {newValue, method}) => {
    if (method === 'enter') {
      e.preventDefault()
    } else {
      props.onChange(e)
    }
  }

  return (
    <Autosuggest
      ref={props.ref}
      suggestions={subjects}
      shouldRenderSuggestions={(value) => value && value.trim().length > 0}
      getSuggestionValue={(suggestion) => suggestion.name}
      renderSuggestion={(suggestion) => <StyledSpan>{suggestion.name}</StyledSpan>}
      inputProps={{...props, onChange: handleOnChange}}
      onSuggestionSelected={(e, {suggestion}) => {
        addTag(suggestion.name)
      }}
      onSuggestionsClearRequested={() => {}}
      onSuggestionsFetchRequested={() => {}}
    />
  )
}

const renderTagInputs = props => (
  <TagsInput
    name='subject'
    value={props.input.value || []}
    renderInput={autosuggestRenderInput(props.subjects)}
    onChange={props.input.onChange} />
)

const AddLecturers = props => (
  <StyledForm onSubmit={props.handleSubmit}>
    <Header as='h1'>
      <StyledIcon name='left chevron' onClick={props.changeState} />
      Create New Lecturer
    </Header>
    <RowContainer columns='equal'>
      <Grid.Column width={2} verticalAlign='middle'>
        <Header>Firstname:</Header>
      </Grid.Column>
      <Grid.Column width={12}>
        <Field
          component='input'
          type='text'
          name='firstname'
          placeholder='Lecturer firstname' />
      </Grid.Column>
    </RowContainer>
    <RowContainer columns='equal'>
      <Grid.Column width={2} verticalAlign='middle'>
        <Header>Lastname:</Header>
      </Grid.Column>
      <Grid.Column width={12}>
        <Field
          component='input'
          type='text'
          name='lastname'
          placeholder='Lecturer lastname' />
      </Grid.Column>
    </RowContainer>
    <RowContainer columns='equal'>
      <Grid.Column width={2} verticalAlign='middle'>
        <Header>Tel:</Header>
      </Grid.Column>
      <Grid.Column width={12}>
        <Field
          component='input'
          type='tel'
          name='tel'
          placeholder='Lecturer tel number' />
      </Grid.Column>
    </RowContainer>
    <RowContainer columns='equal'>
      <Grid.Column width={2} verticalAlign='middle' >
        <Header>E-mail:</Header>
      </Grid.Column>
      <Grid.Column width={12}>
        <Field
          component='input'
          type='email'
          name='email'
          placeholder='Lecturer email' />
      </Grid.Column>
    </RowContainer>
    <RowContainer columns='equal'>
      <Grid.Column width={2} verticalAlign='middle'>
        <Header>Subjects:</Header>
      </Grid.Column>
      <Grid.Column width={12}>
        <Field component={renderTagInputs} subjects={props.subjects} name='subjects' />
      </Grid.Column>
    </RowContainer>
    <Button primary floated='right' size='large' style={{ marginTop: 12 }}>Add</Button>
    <Button floated='right' size='large' style={{ marginTop: 12 }}>Cancel</Button>
  </StyledForm>
)

export default reduxForm({
  form: 'allLecturer',
  onSubmitSuccess: submitSuccess
})(AddLecturers)

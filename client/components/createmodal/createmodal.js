import React, { Component } from 'react'
import {
  Modal,
  Dropdown,
  Accordion,
  Icon,
  Button
} from 'semantic-ui-react'

import { CreateTimeTableButton, StyledInput, SubjectCheckbox, TeacherCheckbox } from './styles'

export default class CreateModal extends Component {
  state = { activeIndex: -1 } //eslint-disable-line

  handleClick = (e, titleProps) => { //eslint-disable-line
    const { index } = titleProps
    const { activeIndex } = this.state
    const newIndex = activeIndex === index ? -1 : index
    this.setState({ activeIndex: newIndex })
  }

  render () {
    const { activeIndex } = this.state
    const options = [
      { key: 1, text: '1/2561', value: 1 },
      { key: 2, text: '2/2561', value: 2 },
      { key: 3, text: '1/2562', value: 3 }
    ]

    return (
      <Modal
        trigger={
          <Button primary style={{float: 'right', margin: '50px 80px'}}>
            Create a timetable
          </Button>
        }
        size='small'
        closeIcon >
        <Modal.Header scrolling>Create a timetable</Modal.Header>
        <StyledInput
          size='mini'
          placeholder='Search...'
          icon={{ name: 'search', link: true }}
        />
        <Modal.Content>
          <p>
            Semester:
            <Dropdown
              inline
              defaultValue={options[0].value}
              options={options}
              style={{ width: 'auto' }} />
          </p>
          <Accordion styled style={{ width: 'auto' }}>
            <Accordion.Title
              active={activeIndex === 0}
              index={0}
              onClick={this.handleClick}
            >
              <SubjectCheckbox
                onclick={this.handleClick}
                label={<label>INT101 IT Fundamental</label>}
              />
              <Icon name='dropdown' float='right' />
            </Accordion.Title>
            <Accordion.Content active={activeIndex === 0}>
              <TeacherCheckbox
                onclick={this.handleClick}
                label={<label>Aj.Kittiphan</label>}
              />
              <br />
              <TeacherCheckbox
                onclick={this.handleClick}
                label={<label>Aj.Ekapong</label>}
              />
            </Accordion.Content>
            <Accordion.Title
              active={activeIndex === 1}
              index={1}
              onClick={this.handleClick}
            >
              <SubjectCheckbox
                onclick={this.handleClick}
                label={<label>INT102 Computer Programming I</label>}
              />
              <Icon name='dropdown' float='right' />
            </Accordion.Title>
            <Accordion.Content active={activeIndex === 1}>
              <TeacherCheckbox
                onclick={this.handleClick}
                label={<label>Aj.Umaporn </label>}
              />
              <br />
              <TeacherCheckbox
                onclick={this.handleClick}
                label={<label>Aj.Praisan</label>}
              />

            </Accordion.Content>
          </Accordion>
        </Modal.Content>
        <Modal.Actions>
          <CreateTimeTableButton primary>
            Create a timetable
          </CreateTimeTableButton>
        </Modal.Actions>
      </Modal>
    )
  }
}

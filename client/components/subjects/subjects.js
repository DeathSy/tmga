import React, { Component } from 'react'
import { Icon, Button, Item, Label, Accordion } from 'semantic-ui-react'
import _ from 'lodash'
import { Topic } from './styles'

export default class Rooms extends Component {
  state = { activeIndex: 0 }

  handleClick = (e, titleProps) => {
    const { index } = titleProps
    const { activeIndex } = this.state
    const newIndex = activeIndex === index ? -1 : index

    this.setState({ activeIndex: newIndex })
  }

  render() {
    const { activeIndex } = this.state
    const { allSubjects } = this.props.subject
    const majors = _.uniq(allSubjects.map(subject => subject.major))

    console.log(majors)

    return (
      <div style={{ margin: '20px 40px 20px 360px', paddingTop: '30px' }}>
        <Topic as='h1'>Data Management</Topic>
        <Topic as='h2'>Subjects</Topic>
        <Accordion fluid styled>
          {majors.map((major, index) => (
            <div>
              <Accordion.Title active={activeIndex === index} index={index} onClick={this.handleClick}>
                <Icon name='dropdown' />
                {major}
              </Accordion.Title>
              <Accordion.Content active={activeIndex === index}>
                <Button
                  primary
                  floated='right'
                  onClick={this.props.changeState('BSc.IT')}>
                  <Icon name='plus' />
                  Add Subject
                </Button>
                <Item.Group divided>
                  {allSubjects.filter(subject => subject.major === major).map(subject => (
                    <Item key={subject._id}>
                      <Item.Content>
                        <Item.Header as='a'>{subject.code} {subject.name}</Item.Header>
                        <Item.Extra>
                          <Button primary floated='right' size='tiny'>
                            Edit
                            <Icon name='right chevron' />
                          </Button>
                          <Button floated='right' size='tiny'>
                            Delete
                          </Button>
                          <Label><Icon name='write' />{subject.type}</Label>
                          <Label><Icon name='time' />{subject.timeAmount} hours</Label>
                          <Label><Icon name='users' />{subject.sections} Sections</Label>
                        </Item.Extra>
                      </Item.Content>
                    </Item>
                  ))}
                </Item.Group>
              </Accordion.Content>
            </div>
          ))}
        </Accordion>
      </div>
    )
  }
}

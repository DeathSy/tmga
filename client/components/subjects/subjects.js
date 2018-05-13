import React, { Component } from 'react'
import { Icon, Button, Item, Label, Accordion } from 'semantic-ui-react'
import { Topic } from './styles'

export default class Rooms extends Component {
  state = { activeIndex: 0 }

  handleClick = (e, titleProps) => {
    const { index } = titleProps
    const { activeIndex } = this.state
    const newIndex = activeIndex === index ? -1 : index

    this.setState({ activeIndex: newIndex })
  }

  render () {
    const { activeIndex } = this.state

    return (
      <div style={{ width: '1100px', margin: '20px 360px', paddingTop: '30px' }}>
        <Topic as='h1'>Data Management</Topic>
        <Topic as='h2'>Subjects</Topic>
        <Accordion fluid styled>
          <Accordion.Title active={activeIndex === 0} index={0} onClick={this.handleClick}>
            <Icon name='dropdown' />
            Bsc.IT
          </Accordion.Title>
          <Accordion.Content active={activeIndex === 0}>
            <Button primary floated='right'><Icon name='plus' />Add Subject</Button>
            <Item.Group divided>
              <Item>
                <Item.Content>
                  <Item.Header as='a'>INT 101 IT Fundamentals</Item.Header>
                  <Item.Extra>
                    <Button primary floated='right' size='tiny'>
                      Edit
                      <Icon name='right chevron' />
                    </Button>
                    <Button floated='right' size='tiny'>
                      Delete
                    </Button>
                    <Label><Icon name='write' />Lecture</Label>
                    <Label><Icon name='time' /> 3 hours</Label>
                    <Label><Icon name='building outline' /> CB2306</Label>
                    <Label><Icon name='users' /> 3 Sections</Label>
                  </Item.Extra>
                </Item.Content>
              </Item>
              <Item>
                <Item.Content>
                  <Item.Header as='a'>INT 101 IT Fundamentals</Item.Header>
                  <Item.Extra>
                    <Button primary floated='right' size='tiny'>
                      Edit
                      <Icon name='right chevron' />
                    </Button>
                    <Button floated='right' size='tiny'>
                      Delete
                    </Button>
                    <Label><Icon name='write' />Lecture</Label>
                    <Label><Icon name='time' /> 3 hours</Label>
                    <Label><Icon name='building outline' /> CB2306</Label>
                    <Label><Icon name='users' /> 3 Sections</Label>
                  </Item.Extra>
                </Item.Content>
              </Item>
            </Item.Group>
          </Accordion.Content>
          <Accordion.Title active={activeIndex === 1} index={1} onClick={this.handleClick}>
            <Icon name='dropdown' />
            Bsc.CS
          </Accordion.Title>
          <Accordion.Content active={activeIndex === 1}>
            <Button primary floated='right'><Icon name='plus' />Add Subject</Button>
            <Item.Group divided>
              <Item>
                <Item.Content>
                  <Item.Header as='a'>INT 101 IT Fundamentals</Item.Header>
                  <Item.Extra>
                    <Button primary floated='right' size='tiny'>
                      Edit
                      <Icon name='right chevron' />
                    </Button>
                    <Button floated='right' size='tiny'>
                      Delete
                    </Button>
                    <Label><Icon name='write' />Lecture</Label>
                    <Label><Icon name='time' /> 3 hours</Label>
                    <Label><Icon name='building outline' /> CB2306</Label>
                    <Label><Icon name='users' /> 3 Sections</Label>
                  </Item.Extra>
                </Item.Content>
              </Item>
              <Item>
                <Item.Content>
                  <Item.Header as='a'>INT 101 IT Fundamentals</Item.Header>
                  <Item.Extra>
                    <Button primary floated='right' size='tiny'>
                      Edit
                      <Icon name='right chevron' />
                    </Button>
                    <Button floated='right' size='tiny'>
                      Delete
                    </Button>
                    <Label><Icon name='write' />Lecture</Label>
                    <Label><Icon name='time' /> 3 hours</Label>
                    <Label><Icon name='building outline' /> CB2306</Label>
                    <Label><Icon name='users' /> 3 Sections</Label>
                  </Item.Extra>
                </Item.Content>
              </Item>
            </Item.Group>
          </Accordion.Content>
        </Accordion>
      </div>
    )
  }
}

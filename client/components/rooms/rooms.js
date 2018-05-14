import React, { Component } from 'react'
import { Icon, Button, Item, Label, Accordion } from 'semantic-ui-react'
import styled from 'styled-components'
import _ from 'lodash'
import { Topic } from './styles'

const StyledDiv = styled.div`
  margin: 20px 40px 20px 360px;
  padding-top: 30px;
`

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
    const { room } = this.props
    const types = _.uniq(room.allRooms.map(room => room.building))
    return (
      <StyledDiv>
        <Topic as='h1'>Data Management</Topic>
        <Topic as='h2'>Rooms</Topic>
        <Accordion fluid styled>
          {types.map((type, index) => (
            <div>
              <Accordion.Title
                active={activeIndex === index}
                index={index}
                onClick={this.handleClick}>
                <Icon name='dropdown' />
                {type}
              </Accordion.Title>
              <Accordion.Content active={activeIndex === index}>
                <Button
                  primary
                  floated='right'
                  onClick={this.props.changeState(type)}>
                  <Icon name='plus' />Add Room
                </Button>
                <Item.Group divided>
                  {room.allRooms
                    .filter(room => room.building === type)
                    .map(room => (
                      <Item key={room._id}>
                        <Item.Content>
                          <Item.Header as='a'>{room.name}</Item.Header>
                          <Item.Extra>
                            <Button primary floated='right' size='tiny'>
                              Edit
                              <Icon name='right chevron' />
                            </Button>
                            <Button floated='right' size='tiny'>
                              Delete
                            </Button>
                            <Label><Icon name='users' /> {room.capacity}</Label>
                            <Label><Icon name='write' /> {room.type}</Label>
                          </Item.Extra>
                        </Item.Content>
                      </Item>
                    ))}
                </Item.Group>
              </Accordion.Content>
            </div>
          ))}
        </Accordion>
      </StyledDiv>
    )
  }
}

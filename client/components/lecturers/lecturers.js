import React from 'react'
import { Input, Icon, Card, Button, Item, Label, Header } from 'semantic-ui-react'

const Lecturers = props => (
  <div style={{ margin: '20px 40px 20px 360px', paddingTop: '30px' }}>
    <Header as='h1'>Data Management</Header>
    <Header as='h2'>Lecturers</Header>
    <Card fluid>
      <Card.Content>
        <Button primary floated='right' onClick={props.changeState}><Icon name='plus' />Add</Button>
        <Input icon='search' placeholder='Search...' style={{ 'float': 'right' }} /><Item.Group divided>
          {props.lecturer.allLecturers.length === 0 &&
            <Item>
              <Item.Content>
                No lecturer in system yet
              </Item.Content>
            </Item>}
          {props.lecturer.allLecturers.map(lecturer => (
            <Item>
              <Item.Content>
                <Item.Header as='a'>{lecturer.name} {lecturer.lastname}</Item.Header>
                <Item.Extra>
                  <Button primary floated='right'>
                    Edit
                    <Icon name='right chevron' />
                  </Button>
                  <Button floated='right'>
                    Delete
                  </Button>
                  {lecturer.teachSubjects.map(sub => (
                    <Label>{sub}</Label>
                  ))}
                </Item.Extra>
              </Item.Content>
            </Item>
          ))}
        </Item.Group>
      </Card.Content>
    </Card>
  </div>
)
export default Lecturers

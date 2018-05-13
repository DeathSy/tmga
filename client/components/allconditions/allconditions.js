import React from 'react'
import { Input, Icon, Card, Button, Item, Label, Header } from 'semantic-ui-react'

const AllConditions = () => (
  <div style={{ width: '1100px', margin: '20px 360px', paddingTop: '30px' }}>
    <Header as='h1'>Condition Management</Header>
    <Header as='h2'>Conditions</Header>
    <Card fluid scrolling >
      <Card.Content>
        <Button primary floated='right'><Icon name='plus' />Add</Button>
        <Input icon='search' placeholder='Search...' style={{ 'float': 'right' }} /><Item.Group divided>
          <Item>
            <Item.Content>
              <Item.Header as='a'>Aj.Atchara Tranu-raikul</Item.Header>
              <Item.Extra>
                <Button primary floated='right'>
                  Edit
                  <Icon name='right chevron' />
                </Button>
                <Button floated='right'>
                  Delete
                </Button>
                <Label><Icon name='x' /> MON- 11:00-12:00 </Label>
                <Label><Icon name='x' /> TUE- All day</Label>
                <Label><Icon name='x' /> WED- 8:00-12:00</Label>
              </Item.Extra>
            </Item.Content>
          </Item>
          <Item>
            <Item.Content>
              <Item.Header as='a'>Aj.Ekapong Jungcharoensukying</Item.Header>
              <Item.Extra>
                <Button primary floated='right'>
                  Edit
                  <Icon name='right chevron' />
                </Button>
                <Button floated='right'>
                  Delete
                </Button>
                <Label><Icon name='x' /> MON- All day </Label>
                <Label><Icon name='x' /> FRI- All day</Label>
              </Item.Extra>
            </Item.Content>
          </Item>
          <Item>
            <Item.Content>
              <Item.Header as='a'>Aj.Kittiphan Puapholthep</Item.Header>
              <Item.Extra>
                <Button primary floated='right'>
                  Edit
                  <Icon name='right chevron' />
                </Button>
                <Button floated='right'>
                  Delete
                </Button>
                <Label><Icon name='x' /> TUE- 13:00-15:00</Label>
              </Item.Extra>
            </Item.Content>
          </Item>
          <Item>
            <Item.Content>
              <Item.Header as='a'>Aj.Kittipong Warasup</Item.Header>
              <Item.Extra>
                <Button primary floated='right'>
                  Edit
                  <Icon name='right chevron' />
                </Button>
                <Button floated='right'>
                  Delete
                </Button>
                <Label><Icon name='x' /> WED- 8:00-12:00 </Label>
                <Label><Icon name='x' /> THU- 8:00-12:00</Label>
              </Item.Extra>
            </Item.Content>
          </Item>
        </Item.Group>
      </Card.Content>
    </Card>
  </div>
)
export default AllConditions

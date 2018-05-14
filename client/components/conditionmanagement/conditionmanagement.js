import React from 'react'
import { Icon, Card, Button, Grid, Header, Label, Item, Input } from 'semantic-ui-react'

const ConditionManagement = () => (
  <div style={{ margin: '20px 40px 20px 360px', paddingTop: '30px' }}>
    <Header as='h1'>Condition Management</Header>
    <Header as='h2'>Activity Day</Header>
    <Card fluid scrolling >
      <Card.Content>
        <Grid size='large' divided='vertically' >
          <Grid.Column width={2}>
            <Header as='h3' style={{ marginTop: '20px' }}>Monday:</Header>
          </Grid.Column>
          <Grid.Column width={5} >
            <Header as='h3' style={{ marginTop: '20px' }}><Icon name='x' color='red' />13:00-17:00</Header>
          </Grid.Column>
          <Grid.Column floated='right' width={5} >
            <Button primary floated='right' style={{ marginTop: '20px' }}>
              Edit
              <Icon name='right chevron' />
            </Button>
            <Button floated='right' style={{ marginTop: '20px' }}>Delete</Button>
          </Grid.Column>
        </Grid>
      </Card.Content>
    </Card>
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
export default ConditionManagement

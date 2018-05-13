import React from 'react'
import { Card, Grid, Button, Icon, Header } from 'semantic-ui-react'

const LecturerDetail = () => (
  <div style={{ width: '1100px', margin: '20px 360px', paddingTop: '30px' }}>
    <Header as='h1'> <Icon name='left chevron' />Lecturers</Header>
    <Header as='h2' style={{ marginLeft: '35px' }}>Aj.Atchara TranUraikul</Header>
    <Grid size='large' divided='vertically'>
      <Grid.Column width={4}>
        <Header as='h3' style={{ margin: '30px 100px' }}>Name: </Header>
        <Header as='h3' style={{ margin: '30px 100px' }}>Email:</Header>
        <Header as='h3' style={{ margin: '30px 100px' }}>Tel:</Header>
        <Header as='h3' style={{ margin: '30px 100px' }}>Subject:</Header>
      </Grid.Column>
      <Grid.Column floated='left' width={9}>
        <Header as='h3' style={{marginTop: '30px'}}>Aj.Atchara TranUraikul</Header>
        <Header as='h3' style={{marginTop: '30px'}}>atchara@sit.kmutt.ac.th</Header>
        <Header as='h3' style={{marginTop: '30px'}}>024709866</Header>
        <Card style={{ height: '200px', width: '340px' }} >
          <Card.Content>
            INT102
          </Card.Content>
        </Card>
      </Grid.Column>
    </Grid>
    <Button primary size='large' floated='right' style={{ marginTop: '30px', marginRight: '90px' }}>
      Edit
      <Icon name='right chevron' />
    </Button>
    <Button size='large'floated='right' style={{ marginTop: '30px' }}>Delete</Button>
  </div>
)

export default LecturerDetail

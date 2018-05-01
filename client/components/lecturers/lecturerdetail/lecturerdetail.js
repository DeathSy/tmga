import React, { Component } from 'react'
import { Card, Grid, Button, Icon } from 'semantic-ui-react'

const LecturerDetail = () => (
  <div style={{ width: '1100px', margin: '20px 360px', paddingTop: '30px' }}>
    <h1> <Icon name='left chevron' />Lecturers</h1>
    <h2 style={{ marginLeft: '35px' }}>Aj.Atchara TranUraikul</h2>
    <Grid size='large' divided='vertically'>
      <Grid.Column width={4}>
        <h3 style={{ margin: '30px 100px' }}>Name: </h3>
        <h3 style={{ margin: '30px 100px' }}>Email:      </h3>
        <h3 style={{ margin: '30px 100px' }}>Tel:      </h3>
        <h3 style={{ margin: '30px 100px' }}>Subject </h3>
       
      </Grid.Column>
      <Grid.Column floated='left' width={9}>
        <h3 style={{marginTop: '30px'}}>Aj.Atchara TranUraikul</h3>
        <h3 style={{marginTop: '30px'}}>atchara@sit.kmutt.ac.th</h3>
        <h3 style={{marginTop: '30px'}}>024709866</h3>
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

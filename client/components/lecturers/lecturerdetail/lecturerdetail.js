import React, { Component } from 'react'
import { Card, Grid, Button, Icon } from 'semantic-ui-react'

const LecturerDetail = () => (
  <div style={{ width: '1100px', margin: '20px 360px', paddingTop: '30px' }}>
    <h1> <Icon name='left chevron' />Lecturers</h1>
    <h2 style={{ marginLeft: '35px' }}>Aj.Atchara TranUraikul</h2>
    <Grid size='large' divided='vertically'>
      <Grid.Row columns={2}>
        <Grid.Column>
          <h3 style={{ margin: '30px 100px' }}>Name:Aj.Atchara TranUraikul </h3>
          <h3 style={{ margin: '30px 100px' }}>Email:      atchara@sit.kmutt.ac.th</h3>
          <h3 style={{ margin: '30px 100px' }}>Tel:      024709866</h3>
          <h3 style={{ margin: '30px 100px' }}>Subject </h3>
          <Card style={{ height: '200px', width: '340px', marginLeft: '100px' }} >
            <Card.Content>
              INT102
            </Card.Content>
          </Card>
        </Grid.Column>
      </Grid.Row>
    </Grid>
    <Button primary size='large' floated='right' style={{ marginTop: '30px', marginRight: '90px' }}>
      Edit
      <Icon name='right chevron' />
    </Button>
    <Button size='large'floated='right' style={{ marginTop: '30px' }}>Delete</Button>
  </div>
)

export default LecturerDetail

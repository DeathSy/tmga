import React, { Component } from 'react'
import { Card, Grid, Button, Icon } from 'semantic-ui-react'

const LecturerDetail = () => (
  <div style={{ marginLeft: '270px', marginTop: '30px' }}>
    <h1 style={{ margin: '30px 0px' }}> <Icon name='left chevron' />Lecturers</h1>
    <h2 style={{ marginLeft: '35px' }}>Aj.Atchara TranUraikul</h2>
    <Grid divided='vertically'>
      <Grid.Row columns={2}>
        <Grid.Column>
          <h4 style={{ marginLeft: '100px' }}>Name:Aj.Atchara TranUraikul </h4>
          <h4 style={{ marginLeft: '100px' }}>Email:      atchara@sit.kmutt.ac.th</h4>
          <h4 style={{ marginLeft: '100px' }}>Tel:      024709866</h4>
          <h4 style={{ marginLeft: '100px' }}>Subject </h4>
          <Card style={{ height: '100px', marginLeft: '100px' }} >
            <Card.Content>
              INT102
            </Card.Content>
          </Card>
        </Grid.Column>

      </Grid.Row>
    </Grid>
    <Button primary floated='right' style={{ marginTop: '30px', marginRight: '100px' }}>
      Edit
      <Icon name='right chevron' />
    </Button>
    <Button floated='right' style={{ marginTop: '30px' }}>Delete</Button>
  </div>
)

export default LecturerDetail

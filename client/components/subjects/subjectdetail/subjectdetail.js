import React from 'react'
import { Grid, Button, Icon, List } from 'semantic-ui-react'

const SubjectDetail = () => (
  <div style={{ width: '1100px', margin: '20px 360px', paddingTop: '30px' }}>
    <h1> <Icon name='left chevron' />Subject - INT101 IT Fundamentals</h1>
    <Grid size='huge' divided='vertically'>
      <Grid.Column width={4}>
        <h3 style={{ margin: '30px 100px' }}>ID:</h3>
        <h3 style={{ margin: '30px 100px' }}>Name:</h3>
        <h3 style={{ margin: '30px 100px' }}>Type: </h3>
        <h3 style={{ margin: '30px 100px' }}>Time: </h3>
        <h3 style={{ margin: '30px 100px' }}>Room:</h3>
        <h3 style={{ margin: '30px 100px' }}>Sections:</h3>
      </Grid.Column>
      <Grid.Column floated='left' width={9}>
        <h3 style={{ marginTop: '30px' }}>INT101</h3>
        <h3 style={{ marginTop: '30px' }}>IT Fundamentals</h3>
        <h3 style={{ marginTop: '30px' }}>Lecture</h3>
        <h3 style={{ marginTop: '30px' }}>3 hours</h3>
        <h3 style={{ marginTop: '30px' }}>CB2306</h3>
        <List bulleted relaxed style={{ marginTop: '30px' }}>
          <List.Item ><h3>Section1</h3>
            <List.List>
              <List.Item><h3>Student No. 60130500001-60130500045</h3></List.Item>
              <List.Item><h3>Amount    42</h3></List.Item>
            </List.List>
          </List.Item>
          <List.Item ><h3>Section2</h3>
            <List.List>
              <List.Item><h3>Student No. 60130500046-60130500096</h3></List.Item>
              <List.Item><h3>Amount    44</h3></List.Item>
            </List.List>
          </List.Item>
          <List.Item ><h3>Section3</h3>
            <List.List>
              <List.Item><h3>Student No. 6013050098-60130500140</h3></List.Item>
              <List.Item><h3>Amount    40</h3></List.Item>
            </List.List>
          </List.Item>
        </List>
      </Grid.Column>
    </Grid>
    <Button primary size='large' floated='right' style={{ marginTop: '30px', marginRight: '90px' }}>
      Edit
      <Icon name='right chevron' />
    </Button>
    <Button size='large' floated='right' style={{ marginTop: '30px' }}>Delete</Button>
  </div>
)

export default SubjectDetail

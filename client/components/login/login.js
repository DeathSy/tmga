import React from 'react'
import { Grid, Button, Header, Form } from 'semantic-ui-react'

const Login = () =>
  <div style={{ marginTop: 300, marginLeft: 800 }}>
    <Header as='h1' style={{ marginLeft: '160px' }}>TMGA </Header>
    <Grid columns='equal' style={{ marginTop: 12, marginLeft: 30 }}>
      <Grid.Column width={3} verticalAlign='middle'>
        <Header>Username:</Header>
      </Grid.Column>
      <Grid.Column width={12}>
        <Form.Input
          type='text'
          name='username'
          placeholder='Username' />
      </Grid.Column>
    </Grid>
    <Grid columns='equal' style={{ marginTop: 12, marginLeft: 30 }}>
      <Grid.Column width={3} verticalAlign='middle'>
        <Header>Password:</Header>
      </Grid.Column>
      <Grid.Column width={12}>
        <Form.Input
          type='text'
          name='password'
          placeholder='Password' />
      </Grid.Column>
    </Grid>
    <Grid>
      <Grid.Column width={15} style={{ marginLeft: '40px' }}>
        <Button color='facebook' type='submit' style={{ marginLeft: '130px' }}> Login </Button>
      </Grid.Column>
    </Grid>
  </div>

export default Login

import React from 'react'
import Login from '../components/login'
import withLayout from '../lib/withLayout'

export class LoginPage extends React.Component {
  static async getInitialProps (ctx) {
    return {}
  }

  render () {
    return (
      <div>
        <Login />
      </div>
    )
  }
}

export default withLayout(LoginPage)

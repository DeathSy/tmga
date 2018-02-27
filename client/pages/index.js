import React from 'react'

import withLayout from '../lib/withLayout'
import Home from '../components/home'

export class Index extends React.Component {
  static async getInitialProps (ctx) {
    return {}
  }

  render () {
    return (
      <div>
        <Home />
      </div>
    )
  }
}

export default withLayout(Index)

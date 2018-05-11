import React from 'react'
import Sidebar from '../components/sidebar'
import Conditions from '../components/allconditions'
import withLayout from '../lib/withLayout'

export class AllConditions extends React.Component {
  static async getInitialProps (ctx) {
    return {}
  }

  render () {
    return (
      <div>
        <Sidebar />
        <Conditions />
      </div>
    )
  }
}

export default withLayout(AllConditions)

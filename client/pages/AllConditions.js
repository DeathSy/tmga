import React from 'react'
import Conditions from '../components/allconditions'
import withLayout from '../lib/withLayout'

export class AllConditions extends React.Component {
  static async getInitialProps (ctx) {
    return {}
  }

  render () {
    return (
      <div>
        <Conditions />
      </div>
    )
  }
}

export default withLayout(AllConditions)

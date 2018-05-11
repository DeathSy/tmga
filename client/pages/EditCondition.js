import React from 'react'
import Sidebar from '../components/sidebar'
import EditCondition from '../components/allconditions/editcondition'
import withLayout from '../lib/withLayout'

export class ConditionEdit extends React.Component {
  static async getInitialProps (ctx) {
    return {}
  }

  render () {
    return (
      <div>
        <Sidebar />
        <EditCondition />
      </div>
    )
  }
}

export default withLayout(ConditionEdit)

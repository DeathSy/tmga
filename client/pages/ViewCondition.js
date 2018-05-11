import React from 'react'
import Sidebar from '../components/sidebar'
import ConditionDetail from '../components/allconditions/conditiondetail'
import withLayout from '../lib/withLayout'

export class ViewCondition extends React.Component {
  static async getInitialProps (ctx) {
    return {}
  }

  render () {
    return (
      <div>
        <Sidebar />
        <ConditionDetail />
      </div>
    )
  }
}

export default withLayout(ViewCondition)

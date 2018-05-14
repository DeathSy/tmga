import React from 'react'
import ConditionManage from '../components/conditionmanagement'
import withLayout from '../lib/withLayout'

export class ConditionManagement extends React.Component {
  static async getInitialProps (ctx) {
    return {}
  }

  render () {
    return (
      <div>
        <ConditionManage />
      </div>
    )
  }
}

export default withLayout(ConditionManagement)

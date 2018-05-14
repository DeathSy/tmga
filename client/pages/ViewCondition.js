import React from 'react'
import ConditionDetail from '../components/allconditions/conditiondetail'
import withLayout from '../lib/withLayout'

export class ViewCondition extends React.Component {
  static async getInitialProps (ctx) {
    return {}
  }

  render () {
    return (
      <div>
        <ConditionDetail />
      </div>
    )
  }
}

export default withLayout(ViewCondition)

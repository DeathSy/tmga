import React from 'react'
import EditCondition from '../components/allconditions/editcondition'
import withLayout from '../lib/withLayout'

export class ConditionEdit extends React.Component {
  static async getInitialProps (ctx) {
    return {}
  }

  render () {
    return (
      <div>
        <EditCondition />
      </div>
    )
  }
}

export default withLayout(ConditionEdit)

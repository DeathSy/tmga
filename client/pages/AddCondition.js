import React from 'react'
import AddCondition from '../components/allconditions/addcondition'
import withLayout from '../lib/withLayout'

export class NewCondition extends React.Component {
  static async getInitialProps (ctx) {
    return {}
  }

  render () {
    return (
      <div>
        <AddCondition />
      </div>
    )
  }
}

export default withLayout(NewCondition)

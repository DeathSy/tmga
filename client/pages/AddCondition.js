import React from 'react'
import Sidebar from '../components/sidebar'
import AddCondition from '../components/allconditions/addcondition'
import withLayout from '../lib/withLayout'

export class NewCondition extends React.Component {
  static async getInitialProps (ctx) {
    return {}
  }

  render () {
    return (
      <div>
        <Sidebar />
        <AddCondition />
      </div>
    )
  }
}

export default withLayout(NewCondition)

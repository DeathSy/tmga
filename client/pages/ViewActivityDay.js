import React from 'react'
import Sidebar from '../components/sidebar'
import ActivityDayDetail from '../components/activityday/activitydaydetail'
import withLayout from '../lib/withLayout'

export class ViewActivity extends React.Component {
  static async getInitialProps (ctx) {
    return {}
  }

  render () {
    return (
      <div>
        <Sidebar />
        <ActivityDayDetail />
      </div>
    )
  }
}

export default withLayout(ViewActivity)

import React from 'react'
import Sidebar from '../components/sidebar'
import withLayout from '../lib/withLayout'
import EditActivity from '../components/activityday/editactivityday'

export class AllSubjects extends React.Component {
  static async getInitialProps (ctx) {
    return {}
  }

  render () {
    return (
      <div>
        <Sidebar />
        <EditActivity />
      </div>
    )
  }
}

export default withLayout(AllSubjects)

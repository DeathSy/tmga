import React from 'react'
import Sidebar from '../components/sidebar'
import TimetableList from '../components/timetablelist'
import withLayout from '../lib/withLayout'

export class TtbList extends React.Component {
  static async getInitialProps (ctx) {
    return {}
  }

  render () {
    return (
      <div>
        <Sidebar />
        <TimetableList />
      </div>
    )
  }
}

export default withLayout(TtbList)

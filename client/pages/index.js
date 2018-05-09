import React from 'react'
import Sidebar from '../components/sidebar'
import Timetable from '../components/timetable'
import CreateModal from '../components/createmodal'
import withLayout from '../lib/withLayout'

export class Index extends React.Component {
  static async getInitialProps (ctx) {
    return {}
  }

  render () {
    return (
      <div>
        <Sidebar />
        <Timetable />
        <CreateModal />
      </div>
    )
  }
}

export default withLayout(Index)

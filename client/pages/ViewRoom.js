import React from 'react'
import Sidebar from '../components/sidebar'
import RoomDetail from '../components/rooms/roomdetail'
import withLayout from '../lib/withLayout'

export class ViewRoom extends React.Component {
  static async getInitialProps (ctx) {
    return {}
  }

  render () {
    return (
      <div>
        <Sidebar />
        <RoomDetail />
      </div>
    )
  }
}

export default withLayout(ViewRoom)

import React from 'react'
import Sidebar from '../components/sidebar'
import EditRoom from '../components/rooms/editroom'
import withLayout from '../lib/withLayout'

export class RoomEdit extends React.Component {
  static async getInitialProps (ctx) {
    return {}
  }

  render () {
    return (
      <div>
        <Sidebar />
        <EditRoom />
      </div>
    )
  }
}

export default withLayout(RoomEdit)

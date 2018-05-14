import React from 'react'
import RoomDetail from '../components/rooms/roomdetail'
import withLayout from '../lib/withLayout'

export class ViewRoom extends React.Component {
  static async getInitialProps (ctx) {
    return {}
  }

  render () {
    return (
      <div>
        <RoomDetail />
      </div>
    )
  }
}

export default withLayout(ViewRoom)

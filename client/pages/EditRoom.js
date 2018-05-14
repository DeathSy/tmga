import React from 'react'
import EditRoom from '../components/rooms/editroom'
import withLayout from '../lib/withLayout'

export class RoomEdit extends React.Component {
  static async getInitialProps (ctx) {
    return {}
  }

  render () {
    return (
      <div>
        <EditRoom />
      </div>
    )
  }
}

export default withLayout(RoomEdit)

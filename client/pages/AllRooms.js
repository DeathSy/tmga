import React from 'react'
import Rooms from '../components/rooms'
import withLayout from '../lib/withLayout'

export class AllRooms extends React.Component {
  static async getInitialProps (ctx) {
    return {}
  }

  render () {
    return (
      <div>
        <Rooms />
      </div>
    )
  }
}

export default withLayout(AllRooms)

import React from 'react'
import Sidebar from '../components/sidebar'
import AddRoom from '../components/rooms/addroom'
import withLayout from '../lib/withLayout'

export class NewRoom extends React.Component {
  static async getInitialProps (ctx) {
    return {}
  }

  render () {
    return (
      <div>
        <Sidebar />
        <AddRoom />
      </div>
    )
  }
}

export default withLayout(NewRoom)

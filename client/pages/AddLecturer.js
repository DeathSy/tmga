import React from 'react'
import Sidebar from '../components/sidebar'
import AddLecturer from '../components/lecturers/addlecturer'
import withLayout from '../lib/withLayout'

export class NewLecturer extends React.Component {
  static async getInitialProps (ctx) {
    return {}
  }

  render () {
    return (
      <div>
        <Sidebar />
        <AddLecturer />
      </div>
    )
  }
}

export default withLayout(NewLecturer)

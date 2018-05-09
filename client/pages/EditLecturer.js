import React from 'react'
import Sidebar from '../components/sidebar'
import EditLecturer from '../components/lecturers/editlecturer'
import withLayout from '../lib/withLayout'

export class EditLecturers extends React.Component {
  static async getInitialProps (ctx) {
    return {}
  }

  render () {
    return (
      <div>
        <Sidebar />
        <EditLecturer />
      </div>
    )
  }
}

export default withLayout(EditLecturers)

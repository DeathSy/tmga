import React from 'react'
import Sidebar from '../components/sidebar'
import LecturerDetail from '../components/lecturers/lecturerdetail'
import withLayout from '../lib/withLayout'

export class ViewLecturer extends React.Component {
  static async getInitialProps (ctx) {
    return {}
  }

  render () {
    return (
      <div>
        <Sidebar />
        <LecturerDetail />
      </div>
    )
  }
}

export default withLayout(ViewLecturer)

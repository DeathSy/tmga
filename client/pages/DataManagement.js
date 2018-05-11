import React from 'react'
import Sidebar from '../components/sidebar'
import Subjects from '../components/datamanagement/subjects'
import Rooms from '../components/datamanagement/rooms'
import Lecturers from '../components/datamanagement/lecturers'
import withLayout from '../lib/withLayout'

export class AllSubjects extends React.Component {
  static async getInitialProps (ctx) {
    return {}
  }

  render () {
    return (
      <div>
        <Sidebar />
        <Subjects />
        <Lecturers />
        <Rooms />
      </div>
    )
  }
}

export default withLayout(AllSubjects)

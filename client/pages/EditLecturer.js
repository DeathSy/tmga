import React from 'react'
import EditLecturer from '../components/lecturers/editlecturer'
import withLayout from '../lib/withLayout'

export class EditLecturers extends React.Component {
  static async getInitialProps (ctx) {
    return {}
  }

  render () {
    return (
      <div>
        <EditLecturer />
      </div>
    )
  }
}

export default withLayout(EditLecturers)

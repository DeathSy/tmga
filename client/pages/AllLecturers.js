import React from 'react'
import Sidebar from '../components/sidebar'
import Lecturers from '../components/lecturers'
import withLayout from '../lib/withLayout'

export class AllLecturers extends React.Component {
  static async getInitialProps (ctx) {
    return {}
  }

  render () {
    return (
      <div>
        <Sidebar />
        <Lecturers />
      </div>
    )
  }
}

export default withLayout(AllLecturers)

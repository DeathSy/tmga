import React from 'react'
import Lecturers from '../components/lecturers'
import withLayout from '../lib/withLayout'

export class AllLecturers extends React.Component {
  static async getInitialProps (ctx) {
    return {}
  }

  render () {
    return (
      <div>
        <Lecturers />
      </div>
    )
  }
}

export default withLayout(AllLecturers)

import React from 'react'
import Sidebar from '../components/sidebar'
import Subjects from '../components/subjects'
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
      </div>
    )
  }
}

export default withLayout(AllSubjects)

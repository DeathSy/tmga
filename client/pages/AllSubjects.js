import React from 'react'
import Subjects from '../components/subjects'
import withLayout from '../lib/withLayout'

export class AllSubjects extends React.Component {
  static async getInitialProps (ctx) {
    return {}
  }

  render () {
    return (
      <div>
        <Subjects />
      </div>
    )
  }
}

export default withLayout(AllSubjects)

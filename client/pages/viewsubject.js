import React from 'react'
import SubjectDetail from '../components/subjects/subjectdetail'
import withLayout from '../lib/withLayout'

export class ViewSubject extends React.Component {
  static async getInitialProps (ctx) {
    return {}
  }

  render () {
    return (
      <div>
        <SubjectDetail />
      </div>
    )
  }
}

export default withLayout(ViewSubject)

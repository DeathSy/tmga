import React from 'react'
import Sidebar from '../components/sidebar'
import SubjectDetail from '../components/subjects/subjectdetail'
import withLayout from '../lib/withLayout'

export class ViewSubject extends React.Component {
  static async getInitialProps(ctx) {
    return {}
  }

  render() {
    return (
      <div>
        <Sidebar/>
        <SubjectDetail/>
      </div>
    )
  }
}

export default withLayout(ViewSubject)

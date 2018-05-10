import React from 'react'
import Sidebar from '../components/sidebar'
import AddSubject from '../components/subjects/addsubject'
import withLayout from '../lib/withLayout'

export class NewSubject extends React.Component {
  static async getInitialProps (ctx) {
    return {}
  }

  render () {
    return (
      <div>
        <Sidebar />
        <AddSubject />
      </div>
    )
  }
}

export default withLayout(NewSubject)

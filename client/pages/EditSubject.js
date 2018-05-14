import React from 'react'
import EditSubject from '../components/subjects/editsubject'
import withLayout from '../lib/withLayout'

export class EditSubj extends React.Component {
  static async getInitialProps (ctx) {
    return {}
  }

  render () {
    return (
      <div>
        <EditSubject />
      </div>
    )
  }
}

export default withLayout(EditSubj)

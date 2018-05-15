import React from 'react'
import Lecturers from '../components/lecturers'
import AddLecturer from '../components/lecturers/addlecturer'
import withLayout from '../lib/withLayout'


export class AllLecturers extends React.Component {
  static async getInitialProps(ctx) {
    return {}
    return {}
  }


  constructor(props) {
    super(props)
    this.handleState = this.handleState.bind(this)
  }

  state = {
    add: false
  }

  handleState() {
    this.setState({ add: !this.state.add })
  }

  render() {
    return (
      <div>
        {!this.state.add && <Lecturers changeState={this.handleState} />}
        {this.state.add && <AddLecturer changeState={this.handleState} />}
      </div>
    )
  }
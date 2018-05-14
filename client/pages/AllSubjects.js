import React from 'react'
import { compose } from 'recompose'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'

import Subjects from '../components/subjects'
import AddSubject from '../components/subjects/addsubject'
import withLayout from '../lib/withLayout'
import { getAllRooms } from '../ducks/room'
import { getAllSubjects, createSubject, createSubjectLoading } from '../ducks/subject'
import { createSection, createSectionLoading } from '../ducks/section'
import { Dimmer, Loader } from 'semantic-ui-react';

export class AllSubjects extends React.Component {
  static async getInitialProps (ctx) {
    return {}
  }

  state = {
    add: false,
    major: 'BSc.IT',
    loading: false
  }

  componentWillMount () {
    this.props.getAllSubjects()
    if (!this.props.room.allRooms.length) {
      this.props.getAllRooms()
    }
  }

  handleState = major => () => {
    this.setState({ add: !this.state.add, major })
  }

  onSubmit = values => {
    const subject = {
      name: values.name,
      major: this.state.major,
      code: values.code,
      type: values.type,
      sections: values.sectionAmount
    }

    this.props.createSubjectLoading(true)
    this.props.createSubject({
      ...subject,
      createdAt: new Date(),
      updatedAt: new Date()
    })
    this.setState({ loading: true })
    setTimeout(() => {
      for (let i = 0; i < parseInt(values.sectionAmount, 10); i++) {
        const subject = {
          name: `${this.props.subject.subject.name}-0${i}`,
          subject: this.props.subject.subject._id,
          amount: 0,
          createdAt: new Date(),
          updatedAt: new Date()
        }
        this.props.createSectionLoading(true)
        this.props.createSection(subject)
      }
      this.props.getAllSubjects()
      this.setState({ add: false, loading: false })
    }, 1500)
  }

  render () {
    const { subject, room } = this.props
    if (subject.loading.isLoading && subject.loading.type === 'all') {
      return <div>Loading...</div>
    }
    if (this.state.loading) {
      return <Dimmer active><Loader>Saving Data</Loader></Dimmer>
    }
    return (
      <div>
        {!this.state.add && <Subjects changeState={this.handleState} />}
        {this.state.add && <AddSubject rooms={room.allRooms} onSubmit={this.onSubmit} major={this.state.major} changeState={this.handleState} />}
      </div>
    )
  }
}

const mapStateToProps = ({ subject, room }) => ({
  subject,
  room
})

const mapDispatchToProps = dispatch => bindActionCreators({
  getAllSubjects,
  getAllRooms,
  createSubject,
  createSubjectLoading,
  createSection,
  createSectionLoading
}, dispatch)

export default compose(
  withLayout,
  connect(mapStateToProps, mapDispatchToProps)
)(AllSubjects)

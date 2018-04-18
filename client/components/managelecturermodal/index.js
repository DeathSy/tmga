import React, { Component } from 'react'
import Lecturer from './lecturers'
import Rooms from './rooms'
import Subjects from './subjects'
import { compose } from 'recompose'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'

const mapStateToProps = state => ({})

const mapDispatchToProps = dispatch => bindActionCreators({}, dispatch, dispatch)
class Management extends Component {
  render () {

    return (
      <div>
        <Lecturer />
        <Rooms />
        <Subjects />
      </div>
    )
  }
}

export default compose(
  connect(mapStateToProps, mapDispatchToProps)
)(Management)

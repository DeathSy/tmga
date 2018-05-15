import React from 'react'
import { compose } from 'recompose'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import TimeTable from '../components/timetableresult'
import withLayout from '../lib/withLayout'

class TimeTableView extends React.Component {
  static async getInitialProps (ctx) {
    return {}
  }

  render () {
    return (
      <TimeTable />
    )
  }
}

const mapStateToProps = ({ period }) => ({
  period
})

const mapDispatchToProps = dispatch => bindActionCreators({}, dispatch)

export default compose(
  withLayout,
  connect(mapStateToProps, mapDispatchToProps)
)(TimeTableView)

import React from 'react'
import Timetable from '../components/timetable'
import CreateModal from '../components/createmodal'
import withLayout from '../lib/withLayout'
import { compose } from 'recompose'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { Button } from 'semantic-ui-react'
import TimetableResult from '../components/timetableresult'

import { getAllTimeTable, getAllTimeTableLoading, createTimetable, getTimetable, getTimetableLoading } from '../ducks/period'

export class Index extends React.Component {
  static async getInitialProps(ctx) {
    return {}
  }

  state = {
    open: false
  }

  componentWillMount() {
    this.props.getAllTimeTableLoading()
    this.props.getAllTimeTable()
  }

  handleModal = id => () => {
    this.props.getTimetableLoading(true)
    this.props.getTimetable(id)
    this.setState({ open: true })
  }

  handleClick = () => {
    this.props.createTimetable()
  }

  close = () => {
    this.setState({ open: false })
  }

  render() {
    if (this.props.period.loading) {
      return <div>Loading...</div>
    }
    return (
      <div>
        <Timetable onClick={this.handleModal} />
        {this.state.open &&
          <TimetableResult modalStatus={this.state.open} handleClose={this.close} />
        }
        <Button onClick={this.handleClick} style={{
          marginRight: 20
        }} primary floated='right'>Create a timetable</Button>
        {/* <CreateModal /> */}
      </div>
    )
  }
}

const mapStateToProps = ({ period }) => ({
  period
})

const mapDispatchToProps = dispatch => bindActionCreators({
  getAllTimeTable,
  getAllTimeTableLoading,
  createTimetable,
  getTimetable,
  getTimetableLoading
}, dispatch)

export default compose(
  withLayout,
  connect(mapStateToProps, mapDispatchToProps)
)(Index)

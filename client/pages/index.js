import React from 'react'
import Timetable from '../components/timetable'
import CreateModal from '../components/createmodal'
import withLayout from '../lib/withLayout'
import { compose } from 'recompose'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { Button } from 'semantic-ui-react'

import { getAllTimeTable, getAllTimeTableLoading, createTimetable } from '../ducks/period'

export class Index extends React.Component {
  static async getInitialProps (ctx) {
    return {}
  }

  componentWillMount () {
    this.props.getAllTimeTableLoading()
    this.props.getAllTimeTable()
  }

  handleClick = () => {
    this.props.createTimetable()
  }

  render () {
    if (this.props.period.loading) {
      return <div>Loading...</div>
    }
    return (
      <div>
        <Timetable />
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
  createTimetable
}, dispatch)

export default compose(
  withLayout,
  connect(mapStateToProps, mapDispatchToProps)
)(Index)

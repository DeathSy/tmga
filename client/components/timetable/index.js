import Timetable from './timetable'
import { compose } from 'recompose'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import { getTimetableLoading, getTimetable } from '../../ducks/period'

const mapStateToProps = ({ period }) => ({ period })

const mapDispatchToProps = dispatch => bindActionCreators({
  getTimetable,
  getTimetableLoading
}, dispatch)

export default compose(connect(mapStateToProps, mapDispatchToProps))(Timetable)

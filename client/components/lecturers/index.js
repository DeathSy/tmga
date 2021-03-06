import Lecturers from './lecturers'
import { compose } from 'recompose'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'

const mapStateToProps = ({ lecturer }) => ({ lecturer })

const mapDispatchToProps = dispatch => bindActionCreators({}, dispatch)

export default compose(
  connect(mapStateToProps, mapDispatchToProps)
)(Lecturers)

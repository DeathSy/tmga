import Rooms from './rooms'
import { compose } from 'recompose'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'

const mapStateToProps = ({ room }) => ({
  room
})

const mapDispatchToProps = dispatch => bindActionCreators({}, dispatch)

export default compose(
  connect(mapStateToProps, mapDispatchToProps)
)(Rooms)

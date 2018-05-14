import Subjects from './subjects'
import { compose } from 'recompose'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'

const mapStateToProps = ({ subject }) => ({
  subject
})

const mapDispatchToProps = dispatch => bindActionCreators({}, dispatch)

export default compose(connect(mapStateToProps, mapDispatchToProps))(Subjects)

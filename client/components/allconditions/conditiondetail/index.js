import ConditionDetail from './conditiondetail'
import { compose } from 'recompose'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'

const mapStateToProps = state => ({})

const mapDispatchToProps = dispatch => bindActionCreators({}, dispatch)

export default compose(connect(mapStateToProps, mapDispatchToProps))(ConditionDetail)

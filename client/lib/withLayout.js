import React from 'react'
import { compose } from 'recompose'
import { bindActionCreators } from 'redux'
import withRedux from 'next-redux-wrapper'

import makeStore from '../ducks'

const mapStateToProps = state => ({})
const mapDispatchToProps = dispatch => bindActionCreators({}, dispatch)

export default Component => {
  class WithLayout extends React.Component {
    static async getInitialProps (ctx) {
      return Component.getInitialProps(ctx)
    }

    render () {
      return <div><Component {...this.props} /></div>
    }
  }

  return compose(withRedux(makeStore, mapStateToProps, mapDispatchToProps))(
    WithLayout
  )
}

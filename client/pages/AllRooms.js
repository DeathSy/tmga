import React from 'react'
import { compose } from 'recompose'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { Dimmer, Loader } from 'semantic-ui-react'

import { getAllRooms, createRoom, createRoomLoading } from '../ducks/room'
import Rooms from '../components/rooms'
import AddRoom from '../components/rooms/addroom'
import withLayout from '../lib/withLayout'

export class AllRooms extends React.Component {
  static async getInitialProps (ctx) {
    return {}
  }

  constructor (props) {
    super(props)
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  state = {
    add: false,
    building: 'Classroom Building II'
  }

  componentWillMount () {
    this.props.getAllRooms()
  }

  handleState = building => () => {
    this.setState({ building, add: !this.state.add })
  }

  handleSubmit (values) {
    const room = {
      building: this.state.building,
      name: values.roomname,
      type: values.type,
      capacity: values.amount
    }

    this.setState({ add: false })
    this.props.createRoomLoading(true)
    this.props.createRoom({
      ...room,
      createdAt: new Date(),
      updatedAt: new Date()
    })
    this.props.getAllRooms()
  }

  render () {
    const { loading } = this.props.room
    if (loading.isLoading && loading.type === 'all') {
      return <div>Loading...</div>
    }
    if (loading.isLoading && loading.type === 'create') {
      return <Dimmer active><Loader>Saving Data</Loader></Dimmer>
    }
    return (
      <div>
        {!this.state.add && <Rooms changeState={this.handleState} />}
        {this.state.add &&
          <AddRoom
            onSubmit={this.handleSubmit}
            type={this.state.building}
            changeState={this.handleState} />}
      </div>
    )
  }
}

export const mapStateToProps = ({ room }) => ({
  room
})

export const mapDispatchToProps = dispatch => bindActionCreators({
  getAllRooms,
  createRoom,
  createRoomLoading
}, dispatch)

export default compose(
  withLayout,
  connect(mapStateToProps, mapDispatchToProps)
)(AllRooms)

import React, {Component} from 'react'
import { Card, Segment, Header, Image, Modal } from 'semantic-ui-react'

class NestedModal extends Component {
  state = { open: false }

  open = () => this.setState({ open: true })
  close = () => this.setState({ open: false })

  render () {
    const { open } = this.state

    return (
      <Modal
        dimmer={false}
        open={open}
        onOpen={this.open}
        onClose={this.close}
        size='small'
        trigger={<Card fluid header='INT102 Computer Programming I' />}
      >
        <Modal.Header>Modal #2</Modal.Header>
        <Modal.Content>
          <p>That's everything!</p>
        </Modal.Content>
      </Modal>
    )
  }
}

const SubjectModal = () => (
  <div style={{ width: '1500px', marginTop: '320px', marginLeft: '300px', position: 'absolute' }}>
    <Modal trigger={<Segment scrolling style={{ 'width': '870px', 'height': '250px' }}>
      <h2><u> Subjects </u></h2>
      <p>INT 101 IT Fundamentals</p>
    </Segment>}>
      <Modal.Header>Subject Management</Modal.Header>
      <Modal.Content>
        <h4>INT101 IT Fundamental </h4>
        <NestedModal />
        <Card fluid header='INT102 Computer Programming I' />
        <Card fluid header='INT104 Discrete Mathemetics for IT' />
      </Modal.Content>
    </Modal>
  </div>
)

export default SubjectModal

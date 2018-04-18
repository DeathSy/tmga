import React from 'react'
import { Segment, Header, Image, Modal } from 'semantic-ui-react'
import { Topic, TableHead, TableHeadCell, TableCellStyle } from './styles'

const LecturerModal = () => (
  <div style={{ width: '800px', margin: '20px 300px', paddingTop: '30px', position: 'absolute' }}>
    <Topic as='h1'>Data Management</Topic>
    <Modal trigger={<Segment scrolling style={{'width': '420px', 'height': '200px'}}>
      <h2><u> Lecturers </u></h2>
    </Segment>}>
      <Modal.Header>Select a Photo</Modal.Header>
      <Modal.Content image>
        <Image wrapped size='medium' src='/assets/images/avatar/large/rachel.png' />
        <Modal.Description>
          <Header>Default Profile Image</Header>
          <p>We've found the following gravatar image associated with your e-mail address.</p>
          <p>Is it okay to use this photo?</p>
        </Modal.Description>
      </Modal.Content>
    </Modal>
  </div>
)

export default LecturerModal

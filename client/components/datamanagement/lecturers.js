import React from 'react'
import { Segment } from 'semantic-ui-react'
import { Topic } from './styles'

const LecturerModal = () => (
  <div style={{ margin: '20px 40px 20px 360px', paddingTop: '30px', position: 'absolute' }}>
    <Topic as='h1'>Data Management</Topic>
    <Segment scrolling style={{'width': '530px', 'height': '280px'}}>
      <h2><u> Lecturers </u></h2>
    </Segment>
  </div>
)

export default LecturerModal

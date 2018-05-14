import React from 'react'
import { Segment, Label, Header } from 'semantic-ui-react'
const SubjectName = [
  { value: 'INT101 IT Fundamentals' },
  { value: 'INT102 Computer Programming I' },
  { value: 'INT104 Discrete Mathematics' },
  { value: 'INT201 Network I' }
]
const Subject = () => (
  <div style={{ margin: '360px 40px 20px 360px', paddingTop: '30px', position: 'absolute' }}>
    <Segment scrolling style={{ 'width': '1100px', 'height': '280px' }}>
      <Header as='h2'><u>Subject</u></Header>
      {SubjectName.map(s => (
        <Header as='h3'>{s.value}</Header>
      ))}
      <Label content='See more' attached='bottom right' style={{ marginBottom: '10px', marginRight: '10px' }} />
    </Segment>
  </div>
)

export default Subject

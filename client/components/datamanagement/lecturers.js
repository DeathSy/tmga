import React from 'react'
import { Segment, Header, Label } from 'semantic-ui-react'
import { Topic } from './styles'
const LecturerName = [
  { value: 'Dr.Umaporn Supasitthimethee' },
  { value: 'Aj.Kittiphan Pualphonthep' },
  { value: 'Dr.Olarn Rojanapornpun' },
  { value: 'Aj.Pichet Limvachiranan' }
]
const LecturerEx = () => (
  <div style={{ margin: '20px 40px 20px 360px', paddingTop: '30px', position: 'absolute' }}>
    <Topic as='h1'>Data Management</Topic>
    <Segment scrolling style={{'width': '530px', 'height': '280px'}}>
      <Header as='h2'><u> Lecturers </u></Header>
      {LecturerName.map(l => (
        <Header as='h3'>{l.value}</Header>
      ))}
      <Label content='See more' attached='bottom right' style={{ marginBottom: '10px', marginRight: '10px' }} />
    </Segment>
  </div>
)

export default LecturerEx

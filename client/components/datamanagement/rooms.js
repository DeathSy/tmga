import React from 'react'
import { Segment, Header, Label, Grid } from 'semantic-ui-react'
const Rooms = [
  { value: 'CB2301', building: 'Classroom Building II' },
  { value: 'CB2304', building: 'Classroom Building II' },
  { value: 'CB2305', building: 'Classroom Building II' },
  { value: 'CB2306', building: 'Classroom Building II' }
]
const RoomEx = () => (
  <div style={{ margin: '65px 40px 20px 920px', paddingTop: '30px', position: 'absolute' }}>
    <Segment scrolling style={{ 'width': '530px', 'height': '280px' }}>
      <Header as='h2'><u> Rooms </u></Header>
      {Rooms.map(r => (
        <Grid columns={2}>
          <Grid.Column>
            <Header as='h3'>{r.value}</Header>
          </Grid.Column>
          <Grid.Column>
            <Header as='h3'>{r.building}</Header>
          </Grid.Column>
        </Grid>
      ))}
      <Label content='See more' attached='bottom right' style={{ marginBottom: '10px', marginRight: '10px' }} />
    </Segment>
  </div>
)
export default RoomEx

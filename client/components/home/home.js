import React from 'react'
import Sidebar from '../sidebar'
import Timetable from '../timetable'
import CreateModal from '../createmodal'
import { Button } from 'semantic-ui-react'

export default () => (
  <div>
<<<<<<< HEAD
    <Sidebar />
    <h1 style={{ textAlign: 'center' }}>Timetable Scheduling Processes</h1>
    <Timetable />
    <Button primary style={{ float: 'right', marginRight: '62px' }}>
      Create a timetable
    </Button>
  </div>
=======
    <Sidebar /><h1 style={{'textAlign':"center"}}>Timetable Scheduling Processes</h1>
    <Timetable/>
    <CreateModal/></div>
>>>>>>> feature/modal
)

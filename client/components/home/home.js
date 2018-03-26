import React from 'react'
import Sidebar from '../sidebar'
import Timetable from '../timetable'
import CreateModal from '../createmodal'

export default () => (
  <div>
    <Sidebar />
    <h1 style={{ textAlign: 'center' }}>Timetable Scheduling Processes</h1>
    <Timetable />
    <CreateModal />
  </div>
)

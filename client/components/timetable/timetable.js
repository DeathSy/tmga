import React from 'react'
import { Table, Icon } from 'semantic-ui-react'

const TimetableList = () => (
  <div style={{ width: '750px', margin: '20px 300px' }}>
    <h1 style={{ padding: '24px' }}>Timetable Scheduling Processes</h1>
    <Table
      basic='very'
      fixed
      style={{ overflow: 'scroll' }}
    >
      <Table.Header style={{ 'font-size': '20px' }}>
        <Table.Row>
          <Table.HeaderCell width={12} style={{ 'padding-left': '20px' }}>
            Semester
          </Table.HeaderCell>
          <Table.HeaderCell style={{ 'padding-left': '20px' }}>
            Status
          </Table.HeaderCell>
        </Table.Row>
      </Table.Header>
      <Table.Body>
        <Table.Row>
          <Table.Cell style={{ 'padding-left': '25px' }}>2/2560</Table.Cell>
          <Table.Cell style={{ 'padding-left': '25px' }}>
            <Icon size='big' color='green' name='checkmark' textAlign='center' />
          </Table.Cell>
        </Table.Row>
        <Table.Row>
          <Table.Cell style={{ 'padding-left': '25px' }}>2/2561</Table.Cell>
          <Table.Cell style={{ 'padding-left': '25px' }}>
            <Icon loading size='big' color='red' name='refresh' />
          </Table.Cell>
        </Table.Row>
      </Table.Body>
    </Table>
  </div>
)

export default TimetableList

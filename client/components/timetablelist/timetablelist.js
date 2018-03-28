import React from 'react'
import { Table, Icon } from 'semantic-ui-react'

const TimetableList = () => (
  <Table
    basic='very'
    fixed
    style={{ width: '750px', overflow: 'scroll', margin: '50px' }}
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
          {' '}<Icon size='big' color='black' name='search' />
        </Table.Cell>
      </Table.Row>
      <Table.Row>
        <Table.Cell style={{ 'padding-left': '25px' }}>2/2561</Table.Cell>
        <Table.Cell style={{ 'padding-left': '25px' }}>
          {' '}<Icon size='big' color='black ' name='search' />
        </Table.Cell>
      </Table.Row>
    </Table.Body>
  </Table>
)

export default TimetableList

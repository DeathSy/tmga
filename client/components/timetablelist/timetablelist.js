import React from 'react'
import { Table, Icon } from 'semantic-ui-react'
import { Topic, TableHead, TableHeadCell, TableCellStyle } from './styles'

const TimetableList = () => (
  <div style={{ margin: '20px 40px 20px 360px', paddingTop: '30px' }}>
    <Topic as='h1'>Timetable Editor</Topic>
    <Table
      basic='very'
      fixed
      style={{ overflow: 'scroll' }}
    >
      <TableHead>
        <Table.Row>
          <TableHeadCell width={12}>
            Semester
          </TableHeadCell>
          <TableHeadCell>
            Status
          </TableHeadCell>
        </Table.Row>
      </TableHead>
      <Table.Body>
        <Table.Row>
          <TableCellStyle>2/2560</TableCellStyle>
          <TableCellStyle>
            {' '}<Icon size='big' color='black' name='search' />
          </TableCellStyle>
        </Table.Row>
        <Table.Row>
          <TableCellStyle>2/2561</TableCellStyle>
          <TableCellStyle>
            {' '}<Icon size='big' color='black ' name='search' />
          </TableCellStyle>
        </Table.Row>
      </Table.Body>
    </Table>
  </div>
)

export default TimetableList

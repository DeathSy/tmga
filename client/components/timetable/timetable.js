import React from 'react'
import Link from 'next/link'
import { Table, Icon } from 'semantic-ui-react'
import { Topic, TableHead, TableHeadCell, TableCellStyle } from './styles'

const TimetableList = props => (
  <div style={{ margin: '20px 40px 20px 360px', paddingTop: '30px' }}>
    <Topic as='h1'>Timetable Scheduling Processes</Topic>
    <Table
      basic='very'
      fixed
      style={{ overflow: 'scroll' }}
    >
      <TableHead>
        <Table.Row>
          <TableHeadCell width={12} >
            Semester
          </TableHeadCell>
          <TableHeadCell>
            Status
          </TableHeadCell>
        </Table.Row>
      </TableHead>
      <Table.Body>
        {!props.period.allTimetables.length &&
          <Table.Row>
            <TableCellStyle>No timetable created now</TableCellStyle>
          </Table.Row>}
        {props.period.allTimetables.slice(0).reverse().map(period => (
          <Table.Row key={period._id}>
            <TableCellStyle>
              <Link href={{ pathname: '/timetable', query: period._id }}>
                {period.semester}
              </Link>
            </TableCellStyle>
            <TableCellStyle>
              <Icon size='big' color='green' name='checkmark' textalign='center' />
            </TableCellStyle>
          </Table.Row>
        ))}
      </Table.Body>
    </Table>
  </div>
)

export default TimetableList

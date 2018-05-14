import React from 'react'
import { Button, Table, Header, Modal } from 'semantic-ui-react'

const days = [
  { key: '1', value: 'Monday', text: 'Monday' },
  { key: '2', value: 'Tuesday', text: 'Tuesday' },
  { key: '3', value: 'Wednesday', text: 'Wednesday' },
  { key: '4', value: 'Thursday', text: 'Thursday' },
  { key: '5', value: 'Friday', text: 'Friday' }
]
const timeSlots = [
  { key: '1', value: '8:00-8:30' },
  { key: '2', value: '8:30-9:00' },
  { key: '3', value: '9:00-9:30' },
  { key: '4', value: '9:30-10:00' },
  { key: '5', value: '10:00-10:30' },
  { key: '6', value: '10:30-11:00' },
  { key: '7', value: '11:00-11:30' },
  { key: '8', value: '11:30-12:00' },
  { key: '9', value: '12:00-12:30' },
  { key: '10', value: '12:30-13:00' },
  { key: '11', value: '13:00-13:30' },
  { key: '12', value: '13:30-14:00' },
  { key: '13', value: '14:00-14:30' },
  { key: '14', value: '14:30-15:00' },
  { key: '15', value: '15:00-15:30' },
  { key: '16', value: '15:30-16:00' },
  { key: '17', value: '16:00-16:30' },
  { key: '18', value: '16:30-17:00' },
  { key: '19', value: '17:00-17:30' },
  { key: '20', value: '17:30-18:00' },
  { key: '21', value: '18:00-18:30' }

]
const TimetableResult = () => (
  <div style={{ margin: '20px 40px 20px 360px', paddingTop: '30px' }}>
    <Header as='h1'>Timetable Scheduling Processes</Header>
    <Modal size={'fullscreen'} open={'true'} onClose={this.close}>
      <Modal.Header>
        Timetable (2/2562)- BSc.IT
      </Modal.Header>
      <Modal.Content>
        <Table celled structured>
          <Table.Header>
            <Table.Row>
              <Table.HeaderCell rowSpan={2} textAlign='center'>Day</Table.HeaderCell>
              <Table.HeaderCell colSpan={21} textAlign='center'>Time</Table.HeaderCell>
            </Table.Row>
            <Table.Row>
              {timeSlots.map(t => (
                <Table.HeaderCell>{t.value}</Table.HeaderCell>
              ))}
            </Table.Row>
          </Table.Header>
          <Table.Body>
            {days.map(d => (
              <Table.Row>
                <Table.Cell>{d.value}</Table.Cell>
              </Table.Row>
            ))}
          </Table.Body>
        </Table>
      </Modal.Content>
      <Modal.Actions>
        <Button primary icon='edit' labelPosition='right' content='Edit' />
      </Modal.Actions>
    </Modal>
  </div>
)

export default TimetableResult

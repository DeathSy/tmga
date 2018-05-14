import React, { Component } from 'react'
import Link from 'next/link'
import { Sidebar, Menu, Icon } from 'semantic-ui-react'

export default class SidebarMenu extends Component {
  render () {
    return (
      <Sidebar as={Menu} visible vertical inverted color='blue' style={{ width: '300px' }} >
        <Menu.Item name='Logo'>
          <Icon />
        </Menu.Item>
        <Link href={{ pathname: '/' }}>
          <Menu.Item
            name='Home'
            as='a'
            active={this.props.url.pathname === '/'}
          />
        </Link>
        <Link href={{ pathname: '/TimetableList' }}>
          <Menu.Item
            name='Timetable Editor'
            as='a'
            active={this.props.url.pathname === '/TimetableList'}
          />
        </Link>
        <Link href={{ pathname: '/DataManagement' }}>
          <Menu.Item
            name='Data Management'
            as='a'
            active={this.props.url.pathname === '/DataManagement'}
          />
        </Link>
        <Menu.Menu>
          <Link href={{ pathname: '/AllLecturers' }}>
            <Menu.Item
              name='Lecturers'
              as='a'
              active={this.props.url.pathname === '/AllLecturers'} />
          </Link>
          <Link href={{ pathname: '/AllRooms' }}>
            <Menu.Item
              name='Rooms'
              as='a'
              active={this.props.url.pathname === '/AllRooms'} />
          </Link>
          <Link href={{ pathname: '/AllSubjects' }}>
            <Menu.Item
              name='Subjects'
              as='a'
              active={this.props.url.pathname === '/AllSubjects'} />
          </Link>
        </Menu.Menu>
        <Link href={{ pathname: '/ConditionManagement' }}>
          <Menu.Item
            name='Condition Management'
            as='a'
            active={this.props.url.pathname === '/ConditionManagement'} />
        </Link>
        <Menu.Menu>
          <Link href={{ pathname: '/ViewActivityDay' }}>
            <Menu.Item
              name='Activity Day'
              as='a'
              active={this.props.url.pathname === '/ViewActivityDay'} />
          </Link>
          <Link href={{ pathname: '/AllConditions' }}>
            <Menu.Item
              name="Lecturer's Condition"
              as='a'
              active={this.props.url.pathname === '/AllConditions'} />
          </Link>
        </Menu.Menu>
      </Sidebar>
    )
  }
}

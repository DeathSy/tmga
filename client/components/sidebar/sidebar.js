import React, { Component } from 'react'
import { Sidebar, Menu, Icon } from 'semantic-ui-react'

export default class SidebarMenu extends Component {
  state = { activeItem: 'Home' } // eslint-disable-line

  handleItemClick = (e, { name }) => this.setState({ activeItem: name })

  render () {
    const { activeItem } = this.state

    return (
      <Sidebar as={Menu} visible vertical inverted color='blue' style={{ width: '300px' }} >
        <Menu.Item name='Logo'>
          <Icon />
        </Menu.Item>
        <Menu.Item
          name='Home'
          active={activeItem === 'Home'}
          onClick={this.handleItemClick}
        />
        <Menu.Item
          name='Timetable Editor'
          active={activeItem === 'Timetable Editor'}
          onClick={this.handleItemClick}
        />
        <Menu.Item
          name='Data Management'
          active={activeItem === 'Data Management'}
          onClick={this.handleItemClick}
        />
        <Menu.Menu>
          <Menu.Item name='Lecturers' active={activeItem === 'Lecturers'} onClick={this.handleItemClick} />
          <Menu.Item name='Rooms' active={activeItem === 'Rooms'} onClick={this.handleItemClick} />
          <Menu.Item name='Subjects' active={activeItem === 'Subjects'} onClick={this.handleItemClick} />
        </Menu.Menu>
        <Menu.Item
          name='Condition Management'
          active={activeItem === 'Condition Management'}
          onClick={this.handleItemClick}
        />
        <Menu.Menu>
          <Menu.Item name='Activity Day' active={activeItem === 'Activity Day'} onClick={this.handleItemClick} />
          <Menu.Item name="Lecturer's Condition" active={activeItem === "Lecturer's Condition"} onClick={this.handleItemClick} />
        </Menu.Menu>

      </Sidebar>
    )
  }
}

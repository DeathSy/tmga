import React, { Component } from 'react'
import { Sidebar, Segment, Button, Menu, Image, Icon, Header } from 'semantic-ui-react'

export default class SidebarMenu extends Component {
  state = { activeItem: 'home' }

  handleItemClick = (e, { name }) => this.setState({ activeItem: name })

  render() {
    const { activeItem } = this.state

    return (
      <Sidebar as={Menu} width='wide' visible={true} vertical inverted color='blue'>
        <Menu.Item name='Logo'>
          <Icon />
        </Menu.Item>
        <Menu.Item name='Home' active={activeItem === 'home'} onClick={this.handleItemClick} />
        <Menu.Item name='Timetable Editor' active={activeItem === 'Timetable Editor'} onClick={this.handleItemClick} />
        <Menu.Item name='Data Management' active={activeItem === 'Data Management'} onClick={this.handleItemClick} />
        <Menu.Item name='Condition Management' active={activeItem === 'Condition Management'} onClick={this.handleItemClick} />
      </Sidebar>
    )
  }
}
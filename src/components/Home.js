import React from 'react'
import { Sidebar, Segment, Button, Menu, Icon } from 'semantic-ui-react'
import MenuButton from './MenuButton'

class Home extends React.Component {

  state = { visible: false }

  toggleVisibility = () => this.setState({ visible: !this.state.visible })

  render() {
    const { visible } = this.state
    return (
      <div>
        <MenuButton toggleVisibility={this.toggleVisibility}/>
        <Sidebar.Pushable as={Segment}>
          <Sidebar as={Menu} animation='push' width='thin' visible={visible} icon='labeled' vertical inverted>
            <Menu.Item name='home'>
              <Icon name='home' />
              Home
            </Menu.Item>
            <Menu.Item name='gamepad'>
              <Icon name='gamepad' />
              Games
            </Menu.Item>
            <Menu.Item name='camera'>
              <Icon name='camera' />
              Channels
            </Menu.Item>
          </Sidebar>
          <Sidebar.Pusher>
            {/* start other components */}
            <Segment basic>
              Hi
            </Segment>
            {/* end other components */}
          </Sidebar.Pusher>
        </Sidebar.Pushable>
      </div>
    )
  }
}

export default Home

import React from 'react'
import { Menu } from 'semantic-ui-react'

const NavBar = (props) => {

  const handleHome = () => {
    props.history.push('/profile');
  }

  const handleLogout = () => {
    props.logoutUser()
    props.history.push('/')
  }

  return(
    <Menu inverted pointing>
      <Menu.Item name='home' onClick={handleHome} />
      <Menu.Menu position='right'>
        <Menu.Item name='logout' onClick={handleLogout}/>
      </Menu.Menu>
    </Menu>
  )
}

export default NavBar

import React from 'react'
import { Button, Sticky, Icon } from 'semantic-ui-react'

class MenuButton extends React.Component {

  state = {}

  handleContextRef = contextRef => this.setState({ contextRef })

  render() {
    const { contextRef } = this.state

    return (
          <div ref={this.handleContextRef} style={{textAlign: 'left'}}>
            <Sticky context={contextRef}>
              <Button onClick={this.props.toggleVisibility}><Icon name='options' size='large'/></Button>
            </Sticky>
          </div>
    )
  }
}

export default MenuButton

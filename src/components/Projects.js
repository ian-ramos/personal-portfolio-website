import React from 'react'
import { Grid, Segment } from 'semantic-ui-react'

class Projects extends React.Component {

  render() {
    return (
      <Grid id='Projects'>
        <Grid.Row centered columns={2}>
          <Grid.Column>
            <Segment raised>
              <a href="https://nerd-alert-frontend.herokuapp.com/"><img src={require("../images/nerd-alert-screenshot.png")} alt="Nerd Alert" id="nerd-alert-screenshot"/></a>
            </Segment>
          </Grid.Column>
        </Grid.Row>

        <Grid.Row centered columns={2}>
          <Grid.Column>
            <Segment raised>
              <a href="https://set-game-frontend.herokuapp.com/"><img src={require("../images/set-game-screenshot.png")} alt="Set Game" id="set-game-screenshot"/></a>
            </Segment>
          </Grid.Column>
        </Grid.Row>

        <Grid.Row centered columns={2}>
          <Grid.Column>
            <Segment raised>
              <a href="https://ian-ramos.github.io/mod-3-final-project-frontend/"><img src={require("../images/bass-o-matic-screenshot.png")} alt="Bass-O-Matic" id="bass-o-matic-screenshot"/></a>
            </Segment>
          </Grid.Column>
        </Grid.Row>
      </Grid>
    )
  }
}

export default Projects

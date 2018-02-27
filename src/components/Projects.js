import React from 'react'
import { Grid, Segment } from 'semantic-ui-react'

class Projects extends React.Component {

  render() {
    return (
      <Grid id='Projects'>
        <Grid.Row centered columns={2}>
          <Grid.Column>
            <Segment raised>
              <img src={require("../images/nerd-alert-screenshot.png")} alt="Nerd Alert" id="nerd-alert-screenshot"/>
            </Segment>
          </Grid.Column>
        </Grid.Row>

        <Grid.Row centered columns={2}>
          <Grid.Column>
            <Segment raised>
              <img src={require("../images/set-game-screenshot.png")} alt="Set Game" id="set-game-screenshot"/>
            </Segment>
          </Grid.Column>
        </Grid.Row>

        <Grid.Row centered columns={2}>
          <Grid.Column>
            <Segment raised>
              <img src={require("../images/bass-o-matic-screenshot.png")} alt="Bass-O-Matic" id="bass-o-matic-screenshot"/>
            </Segment>
          </Grid.Column>
        </Grid.Row>
      </Grid>
    )
  }
}

export default Projects

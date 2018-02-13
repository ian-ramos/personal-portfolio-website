import React from 'react'
import { Grid, Segment } from 'semantic-ui-react'

class AboutMe extends React.Component {

  render() {
    return (
      <Grid>
        <Grid.Row centered columns={3}>
          <Grid.Column>
            <Segment>
              Hello
            </Segment>
          </Grid.Column>
          <Grid.Column>
            <Segment>
              World
            </Segment>
          </Grid.Column>
        </Grid.Row>
      </Grid>
    )
  }
}

export default AboutMe

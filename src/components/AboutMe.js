import React from 'react'
import { Grid, Segment } from 'semantic-ui-react'

class AboutMe extends React.Component {

  render() {
    return (
      <Grid id='AboutMe'>
        <Grid.Row centered columns={3}>
          <Grid.Column>
            <Segment raised id="about-me-text">
              <p>Hi! My name is Ian Ramos.  I graduated from Fordham University in 2012 with a BS in Business Administration (concentration in Finance) and a minor in Economics.  The following year I got my MBA in Finance, also from Fordham.</p>
              <p>After 5 years as a Financial Analyst, I decided to pursue my passion in programming and enroll in The Flatiron School.  This is a 15 week boot camp which teaches, Ruby, Ruby on Rails, Javascript, React, Redux, and many more frameworks.</p>
            </Segment>
          </Grid.Column>
          <Grid.Column>
            <Segment raised>
              World
            </Segment>
          </Grid.Column>
        </Grid.Row>
      </Grid>
    )
  }
}

export default AboutMe

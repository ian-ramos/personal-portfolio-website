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
              <p>After 5 years as a Financial Analyst, I decided to pursue my passion in programming and enroll in The Flatiron School.  This is a 15 week boot camp which teaches a number of languages and frameworks, including Ruby, Ruby on Rails, Javascript, React, and Redux.</p>
              <p>For me, my experience as a Financial Analyst gives me a unique perspective as I code.  As a lifelong learner, I am just always trying to learn new things, and just build upon my skillset.</p>
              <p>When I'm not coding, you can find me playing basketball or playing video games (mainly RPGs & MMOs).  Otherwise, I'm taking care of or chasing around my Shar-pei mix puppy, Charli.</p>
            </Segment>
          </Grid.Column>
          <Grid.Column>
            <Segment raised>
              <img src={require("../images/profile.png")} alt="Profile Pic" id="about-me-img"/>
            </Segment>
          </Grid.Column>
        </Grid.Row>
      </Grid>
    )
  }
}

export default AboutMe

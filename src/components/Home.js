import React from 'react'
import TopSection from './TopSection'
import AboutMe from './AboutMe'
import Projects from './Projects'

class Home extends React.Component {

  render() {
    return (
      <div>
        <TopSection />
        <AboutMe />
        <Projects />
      </div>
    )
  }
}

export default Home

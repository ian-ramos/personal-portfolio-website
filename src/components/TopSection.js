import React from 'react'
import { Image } from 'semantic-ui-react'
import '../App.css';

class TopSection extends React.Component {

  render() {
    return (
      <header className='top-section-bg'>
        <div className='top-section-text-box'>
          <h1>Testing</h1>
          <a class="btn btn-full" href="#" >I'm hungry</a>
          <a class="btn btn-ghost" href="#" >Show me more</a>
        </div>
      </header>
    )
  }
}

export default TopSection

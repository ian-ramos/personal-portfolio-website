import React from 'react'
import { Image } from 'semantic-ui-react'
import '../App.css';

class TopSection extends React.Component {

  render() {
    return (
      <header className='top-section-bg'>
        <div className='top-section-text-box'>
          <h1>Welcome!</h1>
          <a className="btn btn-ghost" href="#" >I'm hungry</a>
          <a className="btn btn-ghost" href="#" >Show me more</a>
        </div>
      </header>
    )
  }
}

export default TopSection

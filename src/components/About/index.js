// Write your JS code here
import {Component} from 'react'
import Header from '../Header'
import LogoutButton from '../LogoutButton'

class About extends Component {
  render() {
    return (
      <div className="aboutContainer">
        <Header />
        <h1 className="name">About Route</h1>
        <LogoutButton />
      </div>
    )
  }
}

export default About

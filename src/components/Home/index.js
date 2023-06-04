// Write your JS code here
import {Component} from 'react'
import Header from '../Header'
import LogoutButton from '../LogoutButton'
import './index.css'

class Home extends Component {
  render() {
    return (
      <div className="HomeContainer">
        <Header />
        <h1 className="name">Home Route</h1>
        <LogoutButton />
      </div>
    )
  }
}

export default Home

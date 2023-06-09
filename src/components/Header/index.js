// Write your JS code here
import {Link} from 'react-router-dom'
import './index.css'

const Header = () => (
  <ul className="headerContainer">
    <Link to="/">
      <li className="item">Home</li>
    </Link>
    <Link to="/about">
      <li className="item">About</li>
    </Link>
  </ul>
)

export default Header

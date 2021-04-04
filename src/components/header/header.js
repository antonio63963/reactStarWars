import React from 'react' 
import './header.css'
import { Link } from 'react-router-dom'

const Header = () => {
  return (
    <div className="header d-flex row justify-content-between">
      <Link to="/">
        <div className="logoWrapper ml-3">
          <div className="SW">
              <h1 className="SW-left">STAR</h1>
              <h1 className="SW-left">WARS</h1>
          </div>
  
          <h1 className="SW-right">UNIVERSE</h1>
        </div>
      </Link>
      <ul className="nav mx-2" >

        <li className="nav-item">
        <Link className="nav-link active" aria-current="page" to="/people/">People</Link>
        </li>
        <li className="nav-item">
        <Link className="nav-link" to="/planet/">Planets</Link>
        </li>
        <li className="nav-item">
        <Link className="nav-link" to="/starships/">Starships</Link>
        </li>
       
      </ul>
    </div>
  )
}
export default Header
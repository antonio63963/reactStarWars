import React from 'react' 
import './header.css'

const Header = () => {
  return (
    <div className="header d-flex row justify-content-between">
      <div className="logoWrapper ml-3">
        <div className="SW">
            <h1 className="SW-left">STAR</h1>
            <h1 className="SW-left">WARS</h1>
        </div>

        <h1 className="SW-right">UNIVERSE</h1>
      </div>
      <ul className="nav mx-2" >
        <li className="nav-item">
        <span className="nav-link active" aria-current="page" href="#">People</span>
        </li>
        <li className="nav-item">
        <span className="nav-link" href="#">Planets</span>
        </li>
        <li className="nav-item">
        <span className="nav-link" href="#">Starships</span>
        </li>
      </ul>
    </div>
  )
}
export default Header
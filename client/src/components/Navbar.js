import React from 'react'
import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg navbar-light">
      <Link className="nav-item nav-link" to="/">
        <img src="https://via.placeholder.com/500" width="100" height="50" alt="logo" className="navbar-brand" />
      </Link>
      <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
        <div className="navbar-nav">
          <Link className="nav-item nav-link" to="/health">Health <span className="sr-only">(current)</span></Link>
          <Link className="nav-item nav-link" to="/kitchen">Kitchen</Link>
          <Link className="nav-item nav-link" to="/toys">Toys</Link>
          <Link className="nav-item nav-link" to="/elctronics">Electronics</Link>
          <Link className="nav-item nav-link" to="/clothing">Clothing</Link>
          <Link className="nav-item nav-link" to="/addItem">Add new item</Link>
        </div>
      </div>
    </nav>
  )
}

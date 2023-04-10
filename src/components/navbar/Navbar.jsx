import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <div>
       <nav className="navbar navbar-expand-lg navbar-light bg-danger">
  <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
    <span className="navbar-toggler-icon" />
  </button>
  <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
    <div className="navbar-nav mx-auto ">
      <Link className="nav-item nav-link px-5 text-white" to='/'>Form</Link>
      <Link className="nav-item nav-link px-5 text-white" to='/table'>Table</Link>
      <Link className="nav-item nav-link px-5 text-white" to='/smslog'>SMS lOG</Link>
    </div>
  </div>
</nav>

    </div>
  )
}

export default Navbar
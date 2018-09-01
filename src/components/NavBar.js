import React from 'react'
import { Link } from 'react-router-dom'

const NavBar = () => (
  <div>
    <div><Link to="/">Home</Link> <Link to="/volumes">Volumes</Link></div>
  </div>
)

export default NavBar
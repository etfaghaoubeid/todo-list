import React from 'react'
import {Link} from 'react-router-dom'
export default function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
    <div className="container">
    <Link to ='/' className="navbar-brand">Todo App</Link>
    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
  
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav ml-auto">
        <li className="nav-item active">
          <Link  to='createTodo'className="nav-link" href="#">Create todo <span className="sr-only">(current)</span></Link>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#">Link</a>
        </li>
        
      </ul>
      
    </div>
    </div>
  </nav>

  )
}

import React from 'react'
import Navbar from './Navbar'
export default function Main(props) {
  return (
    <React.Fragment> 
       <Navbar/>
       <div className="container">
        {props.children}

       </div>
    </React.Fragment>
  )
}

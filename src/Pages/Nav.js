import React from 'react'
import { Link,Outlet } from 'react-router-dom'
import "../styles/style.css"
const Nav = () => {
  return (
    <div >
        <div className='hero-container'>
        <nav>
            <ul>
                 <li>
                    <Link  to="/">Home</Link>
                </li>
                <li>
                    <Link to="/About">About</Link>
                </li>
                <li>
                    <Link to="/Login">Login</Link>
                </li>
                
                <li>
                    <Link to="/Register">Register</Link>
                </li>
            </ul>
        </nav>
        </div>
        <Outlet/>
    </div>
  )
}

export default Nav
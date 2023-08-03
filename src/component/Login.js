import React from 'react'
import { Link } from 'react-router-dom'
import PhoneIcon from '@mui/icons-material/Phone';
const Login = () => {
  return (
    <div>
    <div className='login-container'>
      <h1>Login</h1>
      <form>
        <input className="login" type='text' placeholder='Enter email'></input>
        <input className="login" type='text' placeholder='Enter Password'></input>
        <button className='login-btn'>Login</button>
      </form>
      <span>Dont have an account? :</span> <Link to="/Register">register here</Link>
    </div>
    <section className='footer'>
            <article>
            
              <h4>Contact Us</h4>
              <p>Email: <Link href="https://ombenienrique@gmail.com">onusra@gmail.com</Link></p>
              <span>phone <PhoneIcon/></span>: <Link className="link" phone="7024206052">7024206052</Link>
              <form>
                <input placeholder='Full Name ' type='text'></input><br></br>
                <input placeholder='Email ' type='text'></input><br></br>
                <textarea placeholder='Leave a message'></textarea><br></br>
                <button className='btn'>Send a message</button>
              </form>
            </article>
            <article>
              <h4>Site Map</h4>
              <Link to="/">Go to home</Link><br></br>
              <Link to="/Login">Login</Link><br></br>
              <Link to="/Register">Register</Link><br></br>
              <Link to="/About">About</Link><br></br>
            </article>
            <article>
            
              <h4>Direction</h4>
              <Link to="/">direction on map</Link><br></br>
            </article>
            </section>
    </div>
  )
}

export default Login
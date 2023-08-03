import React from 'react'
import { Link } from 'react-router-dom'
import PhoneIcon from '@mui/icons-material/Phone';
const About = () => {
  return (
    <div className='about-container'>
      <div className='about-hero' >
      
      </div>
      <div className='discription'>
      <h1 className='home'>We provide a wide range of services</h1>
      <section>
        <p>
        We are happy you have chosen us today,
          Our tour guides are highly trained and 
          ready provide you with an excellent experience.<br></br>
          Feel free to ask any question you may have 
          and will always have an answer for you.
          It is a long established fact that a reader will be distracted 
          by the readable content of a page when looking at its layout. 
          The point of using Lorem Ipsum is that it has a more-or-less normal 
          distribution of letters, as opposed to using 'Content here, content here', 
          making it look like readable English. Many desktop publishing packages and 
          web page editors now use Lorem Ipsum as their default model text, and a 
          search for 'lorem ipsum' will uncover many web sites still in their infancy. 
          Various versions have evolved over the years, sometimes by accident, 
          sometimes on purpose (injected humour and the like).
        </p>
      </section>
      </div>
      <section className='contents'>
      <article className='one art'>
        <div className='one-image'>
          
        </div>
        <p>
          It is a long established fact that a reader will be distracted 
          by the readable content of a page when looking at its layout. 
          The point of using Lorem Ipsum is that it has a more-or-less normal 
          distribution of letters, as opposed to using 'Content here, content here', 
          making it look like readable English. Many desktop publishing packages and 
          web page editors now use Lorem Ipsum as their default model text, and a 
          search for 'lorem ipsum' will uncover many web sites still in their infancy. 
          Various versions have evolved over the years, sometimes by accident, 
          sometimes on purpose (injected humour and the like).
        </p>
      </article>
      <article className='two art'>
      <div className='two-image'>
          
          </div>
          <p>
          It is a long established fact that a reader will be distracted 
          by the readable content of a page when looking at its layout. 
          The point of using Lorem Ipsum is that it has a more-or-less normal 
          distribution of letters, as opposed to using 'Content here, content here', 
          making it look like readable English. Many desktop publishing packages and 
          web page editors now use Lorem Ipsum as their default model text, and a 
          search for 'lorem ipsum' will uncover many web sites still in their infancy. 
          Various versions have evolved over the years, sometimes by accident, 
          sometimes on purpose (injected humour and the like).
        </p>
      </article>
      <article className='three art'>
      <div className='three-image'>
          
          </div>
          <p>
          It is a long established fact that a reader will be distracted 
          by the readable content of a page when looking at its layout. 
          The point of using Lorem Ipsum is that it has a more-or-less normal 
          distribution of letters, as opposed to using 'Content here, content here', 
          making it look like readable English. Many desktop publishing packages and 
          web page editors now use Lorem Ipsum as their default model text, and a 
          search for 'lorem ipsum' will uncover many web sites still in their infancy. 
          Various versions have evolved over the years, sometimes by accident, 
          sometimes on purpose (injected humour and the like).
        </p>
      </article>
      </section>
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

export default About
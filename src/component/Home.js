import React from 'react'
import StarIcon from '@mui/icons-material/Star';
import PersonOutlineIcon from '@mui/icons-material/PersonOutline';
//import { Link } from '@react-email/link';
import StarHalfIcon from '@mui/icons-material/StarHalf';
import PhoneIcon from '@mui/icons-material/Phone';
import { Navigate } from 'react-router-dom';
import { Link } from 'react-router-dom';
const Home = () => {
  return (
    <div className='home-container' id="home">
      <section className='hero'>
        <h1 className='home'>Welcome to the land of glaciers</h1>
        
      </section>
      <div className='intro'>
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
           <div className='join'>
            <Link to={"/About"}><button className='join-btn'>Click To Learn More</button></Link>
          </div>
          </div>
          <div>
          <h2 className='header'>Testimonials</h2>
          <section className='testimonial'>
            
            <article>
            
              <h4>Ombeni Nusra</h4>
              <p><StarIcon/><StarIcon/><StarIcon/><StarIcon/><StarIcon/></p>
              <p>It is a long established fact that a reader will be distracted by 
                the readable content of a page when looking at its layout. 
                The point of using Lorem Ipsum is that it has a more-or-less 
                normal distribution of letters, as opposed to using 'Content here, 
                content here', making it look like readable English.</p>
            </article>
            <article>
              <h4>Marcia Rebecca</h4>
              <p><StarIcon/><StarIcon/><StarIcon/><StarIcon/><StarHalfIcon/></p>
              <p>It is a long established fact that a reader will be distracted by the 
                readable content of a page when looking at its layout. The point of 
                using Lorem Ipsum is that it has a more-or-less normal distribution 
                of letters, as opposed to using 'Content here, content here', 
                making it look like readable English.</p>
            </article>
            <article>
            
              <h4>Oliva Elizabeth</h4>
              <p><StarIcon/><StarIcon/><StarIcon/><StarIcon/><StarIcon/></p>
              <p>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English.</p>
            </article>
            <article>
              <h4>Prisca Sengiyunva</h4>
              <p><StarIcon/><StarIcon/><StarIcon/><StarHalfIcon/><StarHalfIcon/></p>
              <p>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English.</p>
            </article>
          </section>
          </div>
          <div className='intro'>
        <p>
          We are happy you have chosen us today,
          Our tour guides are highly trained and 
          ready provide you with an excellent experience.<br></br>
          Feel free to ask any question you may have 
          and will always have an answer for you. It is a long established fact that a 
          reader will be distracted by the readable content of a page when looking at its 
          layout. The point of using Lorem Ipsum is that it has a more-or-less normal 
          distribution of letters, as opposed to using 'Content here, content here', 
          making it look like readable English. Many desktop publishing packages and 
          web page editors now use Lorem Ipsum as their default model text, and a search 
          for 'lorem ipsum' will uncover many web sites still in their infancy. 
          Various versions have evolved over the years, sometimes by accident, 
          sometimes on purpose (injected humour and the like).</p>
          <div className='join'>
            <Link to={"/Register"}><button className='join-btn'>Join Us Today</button></Link>
          </div>
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

export default Home
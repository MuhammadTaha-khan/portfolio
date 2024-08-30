import React from 'react';
import './component/home.css';
import InstagramIcon from '@mui/icons-material/Instagram';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
import taha from './images/image.png'
import { HashLink as Link } from 'react-router-hash-link';

function Home() {
  return (
    <div className='main-home'>
    <div className='container-lg Home'>
      <div className="home-left col-md-6">
        <h1>Muhammad Taha</h1>
        <h3 className='text-animation'>I'm a <span></span></h3>
        <p className='sec-para text-start'>Hello! I'm Muhammad Taha Khan, a dedicated Frontend Developer with a passion for creating seamless and visually appealing user experiences. I specialize in crafting responsive, user-friendly websites. Let's build something great together!</p>
        <div className="icon">
          <a href="https://www.instagram.com/muhammadtahakhan71" target="_blank" rel="noopener noreferrer"><InstagramIcon/></a>
          <a href="https://www.linkedin.com/in/muhammad-taha-207545313/" target="_blank" rel="noopener noreferrer"><LinkedInIcon className='icon-two'/></a>
          <a href="https://github.com/Taha-dev-ai" target="_blank" rel="noopener noreferrer"><GitHubIcon className='icon-three'/></a>
        </div>
        <div className="btn hire-button mb-3">
          <a href="https://wa.me/923266835065" target="_blank" rel="noopener noreferrer"><button className="button" id='first-btn'>Hire</button></a>   
          <Link className="nav-link" to="#msg"><button className="button" id='second-btn'>Contact</button></Link>
          {/* <button className="button" id='first-btn'>Hire</button> */}
          {/* <button className="button" id='second-btn'>Contact</button> */}
        </div>
      </div>
      <div className="col-md-6">
            <div className="profile-image container d-flex justify-content-center align-items-center"  style={{ height: '60vh' }}>
                <img src={taha} alt="Profile" />
            </div>
      </div>
    </div>
    </div>
  );
}

export default Home;

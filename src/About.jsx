import React from 'react'
import './component/about.css'
import taha from './images/image.png'
import { HashLink as Link } from 'react-router-hash-link';

function About() {
  return (
    <div className='About-section'>
      <div className="container-lg ">
        <div className='row about-row'>
          <div className="col-md-5">
            <div className="about-image container d-flex justify-content-center align-items-center" style={{ height: '60vh' }} >
              <img src={taha} alt="Profile" />
            </div>
          </div>
          <div className="outer-about-me col-md-7">
            <div className="col-md-12 col-sm-10 About-Me mt-5">
              <h1 className='about-heading'>About Me</h1>
              <h3 className='about-subheading'>Frontend Developer</h3>
              <p className='about-para text-start'>Hello! I'm Muhammad Taha, a passionate Frontend Developer with expertise in creating dynamic and responsive web interfaces. With a solid foundation in HTML, CSS, Bootstrap, and Tailwind, I ensure visually appealing and user-friendly designs. My proficiency in JavaScript and React allows me to build interactive and efficient web applications. I'm committed to continuous learning and keeping up with the latest trends in web development to deliver high-quality solutions. Explore my portfolio to see the projects that showcase my skills and dedication to frontend development. </p>
              <Link className="nav-link" to="#Skill">
              <button className='button mb-5'>More About Me</button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default About

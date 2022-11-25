import React from 'react'
import './About.css'
import ME from '../../assets/sha.jpg'
import {FaAward} from 'react-icons/fa'
import {FiUsers} from 'react-icons/fi'
import {FaProjectDiagram} from 'react-icons/fa'
const About = () => {
  return (
    <section id='about'>
    <h5>Get to know</h5>
    <h2>About Me</h2>

    <div className="container about_container">
      <div className="about_me">
        <div id="about_me-image">
          <img src={ME} alt="About Image" id='me_s'/>
        </div>
      </div>
        <div className="about_content">
          <div className="about_cards">
            <article className="about_card">
              
              <FaAward className='about_icon'/>
              <h5>Experience</h5>
              <small>3+ Years Working</small>
            </article>

            <article className="about_card">
              
              <FiUsers className='about_icon'/>
              <h5>Clients</h5>
              <small>200+ Worldwide</small>
            </article>

            <article className="about_card">
              
              <FaProjectDiagram className='about_icon'/>
              <h5>Projects</h5>
              <small>80+ Completed Peojects</small>
            </article>
            </div>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Reiciendis, maxime sapiente! Molestiae maxime debitis ipsa est? Sequi, natus! Quas enim quae deserunt. Ipsum, obcaecati distinctio dolorum nisi atque alias dolorem?
        </p>
        <a href="#contact" className='btn btn-primary'>Let's Talk</a>
        </div>

    </div>
    </section>
  )
}

export default About
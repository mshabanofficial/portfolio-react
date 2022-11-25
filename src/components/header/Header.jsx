import React from 'react'
import './Header.css'
import CTA from './CTA'
import ME from '../../assets/sha.jpg'
import HeaderSocials  from './HeaderSocials'
const Header = () => {
  return (
    <header>
      <div className="container header-container">
        <h5>Hello I'M</h5>
        <small className='sha_h'>Muhammad_Shaban</small>
        <h5 className="text-light">FullStack Developer</h5>
        <CTA/>
        <HeaderSocials/>

        <div className="me"   >
          <img src={ME} alt="me" id='imag' />
        </div>
         
        <a href="#contact" className='scroll_down'>Scroll Down</a>

      </div>
    </header>
  )
}

export default Header
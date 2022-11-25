import React from 'react'
import './Nav.css'
import {AiOutlineHome} from 'react-icons/ai'
import {BiUser} from 'react-icons/bi'
import {BiBookAlt} from 'react-icons/bi'
import {RiServiceLine} from 'react-icons/ri'
import {TbMessageCircle2} from 'react-icons/tb'

const Nav = () => {
  return (
    <nav>
      <a href="#" className='active'><AiOutlineHome/></a>
      <a href="#about"><BiUser/></a>
      <a href="#experience"><BiBookAlt/></a>
      <a href="#services"><RiServiceLine/></a>
      <a href="#contact"><TbMessageCircle2/></a>
    </nav>
  )
}

export default Nav
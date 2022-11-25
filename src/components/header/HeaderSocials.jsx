import React from 'react'
import {BsLinkedin} from 'react-icons/bs'
import {AiOutlineGithub} from 'react-icons/ai'
import {ImDribbble} from 'react-icons/im'
const HeaderSocials = () => {
  return (
    <div className='header_social'>
        <a href="https://linkedin.com" target="-blank"><BsLinkedin/></a>
        <a href="https://github.com" target="-blank"><AiOutlineGithub/></a>
        <a href="https://dribbble.com" target="-blank"><ImDribbble/></a>


    </div>
  )
}

export default HeaderSocials
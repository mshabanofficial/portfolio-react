import React from 'react'
import './Contact.css'
import {MdOutlineEmail} from 'react-icons/md'
import {RiMessengerLine} from 'react-icons/ri'
import {BsWhatsapp} from 'react-icons/bs'

const Contact = () => {
  return (
    <section id='contact'>
      <h5>Get In Touch</h5>
      <h2>Contact Me</h2>

      <div className="container conatact_container">
        <div className="contact_options">
        <article className="contact_option">
          <MdOutlineEmail className='contact_option-icon'/>
        <h2>Email</h2>
        <h5>msk00256@gmail.com</h5>
        <a href="mailto:msk00256@gmail.com" target="_blank">Send a message</a>
        </article>

        <article className="contact_option">
          <RiMessengerLine className='contact_option-icon'/>
        <h2>Messenger</h2>
        <h5>mskTutorials</h5>
        <a href="https://m.me/t/100023864025231" target="_blank">Send a message</a>
        </article>

        <article className="contact_option">
          <BsWhatsapp className='contact_option-icon'/>
        <h2>WhatsApp</h2>
        <h5>+92 309 0307434</h5>
        <a href="https://api.whatsapp.com/send?phone=+92 309 0307434 " target="_blank">Send a message</a>
        </article>
        </div>
        {/*End Of Contact option */}
        <form action="">
          <input type="text" name='name' placeholder='Your Full Name' required />
          <input type="email" name='email' placeholder='Your Email' required />
          <textarea name="message"  rows="7" placeholder='Type Your Message Here' required></textarea>
          <button type='submit' className='btn btn-primary'>Send Message</button>
          </form>
          

      </div>

     

    </section>
  )
}

export default Contact
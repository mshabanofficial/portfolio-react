import React from 'react'
import './Testimonial.css'
import AVT1 from '../../assets/avatar1.jpg'
import AVT2 from '../../assets/avatar2.jpg'
import AVT3 from '../../assets/avatar3.jpg'
import AVT4 from '../../assets/avatar4.jpg'



const data =[
  {
    avatar: AVT1,
    name: 'Tina Snow',
    review:'Target Makes Shopping Easy! Try Drive-Up, Pick-Up, ReStock, or Same Day Delivery w/  Buy Decorations, Costumes, Cards & More Sesonal Items. Shop Online & Save at Target.com?'
 },
 
]
const Testimonial = () => {
  return (
    <section id='testimonials'>
      <h5>Reviews From Clients</h5>
      <h2>Testimonials</h2>

      <div className="container testimonial-container">
        {
          data.map(({avatar, name, review} , index) =>{
            return(
              <div key={index} className="testimonial">
          <div className="client_avater">
            <img src={avatar} id="ava_im" />
          </div>
            <h5 className='client_name'>{name}</h5>
            <small className='client_review'>
              {review}
              </small>
        </div>
            )
          })
        }

        
      </div>

    </section>
  )
}

export default Testimonial
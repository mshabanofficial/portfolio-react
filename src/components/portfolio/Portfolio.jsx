import React from 'react'
import './Portfolio.css'
import ME1 from '../../assets/portfolio1.jpg'
import ME2 from '../../assets/portfolio2.jpg'
import ME3 from '../../assets/portfolio3.jpg'
import ME4 from '../../assets/portfolio4.jpg'
import ME5 from '../../assets/portfolio5.png'
import ME6 from '../../assets/portfolio6.jpg'

const Portfolio = () => {
  return (
    <section id='portfolio'>
    <h5>My Recent Work</h5>
    <h2>Portfolio</h2>
    <div className="container porfolio_container">
      <article className="portfolio_item">
        <div className="portfolio_item-image">
        <img src={ME1} alt=""  className='port-ima'/>

          <h3>This is a Portfolio Item Title</h3>
          <div className="portfolio_item-cta">
          <a href="https://github.com" className='btn' target="_blank">Github</a>
          <a href="https://dribbble.com/Allien_pixels" className='btn btn-primary' target="_blank">Live Demo</a>

          </div>
          
        </div>
      </article>

      <article className="portfolio_item">
        <div className="portfolio_item-image">
          <img src={ME2} alt=""  className='port-ima'/>
          <h3>This is a Portfolio Item Title</h3>
          <div className="portfolio_item-cta">
          <a href="https://github.com" className='btn' target="_blank">Github</a>
          <a href="https://dribbble.com/Allien_pixels" className='btn btn-primary' target="_blank">Live Demo</a>
</div>
        </div>
        </article>

        
      <article className="portfolio_item">
        <div className="portfolio_item-image">
        <img src={ME3} alt=""  className='port-ima'/>

          <h3>This is a Portfolio Item Title</h3>
          <div className="portfolio_item-cta">
          <a href="https://github.com" className='btn' target="_blank">Github</a>
          <a href="https://dribbble.com/Allien_pixels" className='btn btn-primary' target="_blank">Live Demo</a>
</div>
        </div>
        </article>

        
      <article className="portfolio_item">
        <div className="portfolio_item-image">
        <img src={ME4} alt=""  className='port-ima'/>

          <h3>This is a Portfolio Item Title</h3>
          <div className="portfolio_item-cta">
          <a href="https://github.com" className='btn' target="_blank">Github</a>
          <a href="https://dribbble.com/Allien_pixels" className='btn btn-primary' target="_blank">Live Demo</a>
</div>
        </div>
        </article>

        
      <article className="portfolio_item">
        <div className="portfolio_item-image">
        <img src={ME5} alt=""  className='port-ima'/>
          
          <h3>This is a Portfolio Item Title</h3>
          <div className="portfolio_item-cta">
          <a href="https://github.com" className='btn' target="_blank">Github</a>
          <a href="https://dribbble.com/Allien_pixels" className='btn btn-primary' target="_blank">Live Demo</a>
        </div>
        </div>
        </article>

        
      <article className="portfolio_item">
        <div className="portfolio_item-image">
        <img src={ME6} alt=""  className='port-ima'/>

          <h3>This is a Portfolio Item Title</h3>
          <div className="portfolio_item-cta">
          <a href="https://github.com" className='btn' target="_blank">Github</a>
          <a href="https://dribbble.com/Allien_pixels" className='btn btn-primary' target="_blank">Live Demo</a>
</div>
        </div>
        </article>
    </div>
    </section>
  )
}

export default Portfolio
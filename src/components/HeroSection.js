import React from 'react'
import { Button } from './Button'
import './HeroSection.css'

function HeroSection() {
  return (
    <div className='hero-container'>
        <img src='/images/cleaningBG_1.jpg' alt='Hero' />

        <h1>Find Trusted Professionals Near You</h1>
        <p>From home services to personal care — book experts instantly.</p>

        <div className='hero-btns'>   
            <Button 
              className='btns' 
              buttonStyle='btn--outline' 
              buttonSize='btn--large'
            >
                Book Now
            </Button>

            <Button 
              className='btns' 
              buttonStyle='btn--primary' 
              buttonSize='btn--large'
            >
                Explore Services <i className='far fa-arrow-alt-circle-right' />
            </Button>
        </div>

    </div>
  )
}

export default HeroSection;
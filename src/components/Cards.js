import React from 'react';
import CardItem from './CardItem'; 
import './Cards.css';

function Cards() {
  return (
    <div className='cards'>
      <h1>Check out these EPIC Destinations!</h1>

      <div className='cards__container'>
        <div className='cards__wrapper'>

          <ul className='cards__items'>
            <CardItem 
              src='/images/cleaning.jpg'
              text='Explore cleaning services'
              label='Home Services'
              path='/services'
            />
          </ul>

        </div>
      </div>
    </div>
  );
}

export default Cards;
import React from 'react';
import CardItem from './CardItem'; 
import './Cards.css';

function Cards() {
  return (
    <div className='cards'>
      <h1>Checkout our services!</h1>

      <div className='cards__container'>
        <div className='cards__wrapper'>

          <ul className='cards__items'>
            <CardItem 
              src='/images/cleaning.jpg'
              text='Cleaning services for your home.'
              label='Cleaning services'
              path='/services'
            />
            <CardItem 
              src='/images/cooking.jpg'
              text='Chef services for your culinary needs.'
              label='Cooking services'
              path='/services'
            />
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
import React from 'react';
import CardItem from './CardItem';
import './Cards.css';


function Cards() {
  return (
    <div className='cards'>
      <h1>Check out these EPIC Destination</h1>
      <div className='cards__container'>
        <div className='cards__wrapper'>
          <ul className='cards__items'>
            <CardItem  
              src="images/img-9.jpg"
              text="Explore the hidden waterfall deep inside the Amazon Jungle"
              label="Adventure"
              path='/Services'
            />

            <CardItem  
              src="images/img-2.jpg"
              text="Travel Throug th island in private tours"
              label="Luxary"
              path='/Services'
            />
          </ul>
          <ul className='cards__items'>
            <CardItem  
              src="images/img-3.jpg"
              text="Explore the hidden waterfall deep inside the Amazon Jungle"
              label="Adventure"
              path='/Services'
            />

            <CardItem  
              src="images/img-4.jpg"
              text="Travel Throug th island in private tours"
              label="Luxary"
              path='/Services'
            />

            <CardItem  
              src="images/img-8.jpg"
              text="Explore the hidden waterfall deep inside the Amazon Jungle"
              label="Adventure"
              path='/Services'
            />

          </ul>

        </div>
      </div>
    </div>
  )
}

export default Cards

// rfce

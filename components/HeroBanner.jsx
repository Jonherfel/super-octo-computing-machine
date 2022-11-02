import React from 'react'
import Link from 'next/link';
import { urlFor } from '../lib/client';

const HeroBanner = ({heroBanner}) => {
  return (
    <div className='hero-banner-container'>
      <div>
        <p className='coaching-banner'> {heroBanner.smallText} </p>
        <h3> {heroBanner.midText}</h3>
        <h1> {heroBanner.largeText1}</h1>


        <div>
            <button type='button'> {heroBanner.buttonText} </button>
          <div className='descripton'>
            <h5> New To League?</h5>
            <p> {heroBanner.desc}</p>

          </div>
        </div>
      </div>
    </div>
  )
}

export default HeroBanner
import React from 'react'
import Link from 'next/link'
import { urlFor } from '../lib/client'

const FooterBanner = ({footerBanner}) => {
  return (
    <div className='footer-banner-container'>
      <div className='banner-desc'>

        <div className='left'>
          <p>{footerBanner.discount}</p>
          <h3> {footerBanner.largetext1}</h3>
          <h3>{footerBanner.largetext2}</h3>
          <p>{footerBanner.saleTime}</p>
         
        </div>
        <div className='right'>
        <p>{footerBanner.smallText}</p>
        <h3> <p>{footerBanner.midText}</p></h3>
        <p> <p>{footerBanner.desc}</p></p>
          <button type='button'>{footerBanner.buttonText}</button>
        </div>
      </div>
    </div>
  )
}

export default FooterBanner
import React from 'react';
import Link from 'next/link';
import { urlFor } from '../lib/client';


const Coaching = ({product: {image, name, slug ,price}}) => {
  return (
    <div>
      <Link href={`/product/${slug.current}`}>
        <div className='product-card'>
          <img
          src={urlFor(image && image[0])}
          width = {260}
          height = {260}
          className= 'product-image'
          />
          <p className='product-name'>{name}</p>
          <p className='product-price'>${price}</p>
        </div>
      </Link>
    </div>
  )
}

export default Coaching
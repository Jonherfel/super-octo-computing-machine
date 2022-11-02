import React from 'react'
import { AiFillFacebook, AiFillInstagram, AiFillPayCircle, AiFillTwitterCircle, AiOutlineTwitter} from 'react-icons/ai'

const Footer = () => {
  return (
    <div className='footer-container'>
      <p> 2022 LoL Coaching All rights reserverd </p>
      <p className='icons'>
        <AiFillTwitterCircle/>
        <AiFillInstagram/>
        <AiFillFacebook/>
      </p>
    </div>
  )
}

export default Footer
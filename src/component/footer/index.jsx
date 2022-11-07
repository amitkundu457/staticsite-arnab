import { StaticImage } from 'gatsby-plugin-image'
import React from 'react'
import { FaFacebookF,FaTwitter } from "react-icons/fa";
import { GrLinkedinOption } from "react-icons/gr";
export default function Footer(){
    return <div className='footer-container px-4
     bg-[#F5F6FA] py-20 grid place-items-center xl:px-[10rem] md:px-4'>
     <div className='item  grid md:grid-cols-4 xl:grid-cols-4 
      md:space-y-0 space-y-7 md:gap-[10rem] xl:place-items-center'>
          <div className='row xl:w-[17rem] md:w-[15rem] space-y-3'>
        <StaticImage class='w-[3rem]' src="../../images/logo.svg"/>
        <p className='text-theme-default-text-color text-[14.5px] font-Roboto'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Negare non possum. Apparet statim, quae sint officia, quae actiones.</p>
       
       <div className='icon flex space-x-3 text-[1.1rem] text-theme-default-text-color'>
        <FaFacebookF/>
        <FaTwitter/>
        <GrLinkedinOption/>

       </div>
       </div>
       <div className='row  space-y-3'>
        <h3 className='text-theme-secondary-heading-text-color  font-[200] text-[16px] font-Montserrat'>Discover</h3>
     <ul className='text-theme-default-text-color text-[15px]  font-Roboto font-[500]'>
        <li>Get Started</li>
        <li>Product</li>
        <li>Features</li>
        <li>Sign Up</li>
        <li>Sign In</li>
     </ul>
       </div>
       <div className='row  space-y-3'>
        <h3 className='text-theme-secondary-heading-text-color  font-[200] text-[16px] font-Montserrat'>Discover</h3>
     <ul className='text-theme-default-text-color text-[15px]  font-Roboto font-[500]'>
        <li>Get Started</li>
        <li>Product</li>
        <li>Features</li>
        <li>Sign Up</li>
        <li>Sign In</li>
     </ul>
       </div>
       <div className='row  space-y-3'>
        <h3 className='text-theme-secondary-heading-text-color  font-[200] text-[16px] font-Montserrat'>Discover</h3>
     <ul className='text-theme-default-text-color text-[15px]  font-Roboto font-[500]'>
        <li>Get Started</li>
        <li>Product</li>
        <li>Features</li>
        <li>Sign Up</li>
        <li>Sign In</li>
     </ul>
       </div>
     </div>

     <div className='image space-y-3 text-center'>
      <StaticImage src="../../images/footer-cityscape.png"/>
      <h3 className='text-theme-default-text-color text-[14.4px] font-Roboto'>© 2020-2021 Vulk. All rights reserved.</h3>
     </div>
     
    </div>
}
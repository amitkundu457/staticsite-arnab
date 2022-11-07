import React from 'react';
import { StaticImage } from "gatsby-plugin-image"
export default function Bodysection1(){
    return <div className='bodysection-container  py-9 space-y-10'>
       <div className="section-title text-center">
         <h3 className='font-Roboto text-[20px] text-theme-primary-heading-text-color font-[700]'>Hi Performing Application</h3>
        <h1 className='text-[32px] text-theme-secondary-heading-text-color font-Montserrat font-[700]'>Say Hello to Productive Meetings</h1>
       </div>

       <div className="image-section grid place-items-center p-4">
        <StaticImage className='border border-theme-default-border-color overflow-hidden rounded-md' fluid width={900} src='../../images/meeting-app.png'/>
       </div>

      <div className="grid place-items-center">
         <div className="row-section md:space-x-4 space-y-5
        md:space-y-0 flex md:flex-row flex-col px-0  m-5">
        <div className="item space-y-1 w-[15rem] ">
          <h3 className='text-theme-secondary-heading-text-color font-Montserrat font-[600] text-[20px]'>AI Powered</h3>
          <p className='text-[16px] text-theme-default-text-color font-Roboto'>Our AI handles every complex operation, letting you focus.</p>
        </div>
        <div className="item space-y-1 w-[15rem] ">
          <h3 className='text-theme-secondary-heading-text-color font-Montserrat font-[600] text-[20px]'>Real-Time Data</h3>
          <p className='text-[16px] text-theme-default-text-color font-Roboto'>All your data is processed in real-time, for better performance.</p>
        </div>
        <div className="item space-y-1 w-[15rem] ">
          <h3 className='text-theme-secondary-heading-text-color font-Montserrat font-[600] text-[20px]'>Fast and Secure</h3>
          <p className='text-[16px] text-theme-default-text-color font-Roboto'>Your data is virtually unhackable compared to traditional net.</p>
        </div>
       </div>
      </div>
    </div>
}
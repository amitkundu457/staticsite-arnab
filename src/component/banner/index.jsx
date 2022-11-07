import React from 'react'
import Header from '../header.js'
import Carousel from "../carousel";
import Roundbordercomponent from '../roundedbordercomponent/index.jsx'
export default function Banner(){
   
    return(
        <div className='banner-container
         flex md:flex-row  md:px-[5rem]
          flex-col xl:px-[5rem] 2xl:px-[10rem] md:px-9 lg:px-[5rem]
           w-[100vw] bg-[#F5F6FA] relative md:h-[100vh]'>
<Header/>

<div className='banner-secton-left md:mt-0 mt-[4rem]
 md:w-[35rem] w-full  md:py-[12rem]   md:px-0 px-[1.75rem] '>
<h3 className=' text-[32px] xl:text-[40px] font-Montserrat 
 text-[#283252] font-[700] leading-[1.125] md:text-left text-center'>Try team  meetings <br /> like you never did before.</h3>
<p className='text-[20px] md:text-left text-center text-theme-default-text-color font-Roboto'>This is the place where teams gather to build collaborative meeting agendas, record decisions, and task assignments.</p>
<div className="flex space-x-3 mt-6 md:justify-start justify-center">
    <button className='bg-theme-primary-button-color text-[15px] font-Roboto p-3 rounded-xl text-theme-primary-button-text-color w-[8rem]' type="">Free Trail</button>
<button className='bg-theme-secondary-button-color border border-theme-default-border-color text-[15px] font-Roboto p-3 rounded-xl text-black w-[8rem]' type="">
    Learn More</button>
</div>
</div>
{/* END OF BANNER-SECTION-LEFT */}

<div className="banner-section-right py-[7rem] 
 xl:w-[60rem] md:h-[40rem] md:w-[50rem]  grid place-items-center   md:mt-2 md:p-5 ">
<Roundbordercomponent />
</div>
<div className="image absolute bottom-3 py-4 left-0 right-0
    md:w-full xl:w-full md:p-4  xl:grid xl:place-items-center 
      ">
 <div className='xl:w-[50rem] md:w-full text-center'><Carousel /></div>
</div>
        </div>
    )
}
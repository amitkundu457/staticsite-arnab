import { StaticImage } from 'gatsby-plugin-image';
import React from 'react';
import { AiOutlineClockCircle } from "react-icons/ai";
import { BsCalendar3 } from "react-icons/bs";
import { IoLeafOutline } from "react-icons/io5";
export default function Roundbordercomponent(){
    return <div><div className="border-2 border-theme-default-border-color grid place-items-center
     w-[20rem] h-[20rem] relative rounded-full  xl:w-[35rem] xl:h-[35rem]">

        <div className="border-2 border-theme-default-border-color w-[14rem] 
         h-[14rem] xl:w-[25rem] p-10 grid place-items-center xl:h-[25rem] rounded-full">
<div className="grid place-items-center relative    rounded-full xl:w-[18rem] xl:h-[18rem] w-[9rem] h-[9rem]">
    <StaticImage class=' m-auto block' src='../../images/man-circle.png'/>

<div className="absolute bottom-0 xl:left-[42px] xl:bottom-[0rem] left-[13px]">
            <div className='bg-theme-icon-bg-color
              text-theme-default-icon-color shadow-2xl w-[53px] h-[53px] grid place-items-center
            rounded-full'>
              <BsCalendar3 className='text-[1.4rem]'/>
            </div>
        </div>

</div>
        </div>
        <div className="absolute xl:top-[9rem] top-[5rem] left-[36px]">
            <div className='bg-theme-icon-bg-color
              text-theme-default-icon-color shadow-2xl w-[53px] h-[53px] grid place-items-center
            rounded-full'>
              <AiOutlineClockCircle className='text-[1.4rem]'/>
            </div>
        </div>
        <div className="absolute top-[3rem] right-[3.5rem]">
            <div className='bg-theme-icon-bg-color
              text-theme-default-icon-color shadow-2xl w-[53px] h-[53px] grid place-items-center
            rounded-full'>
              <IoLeafOutline className='text-[1.4rem]'/>
            </div>
        </div>

        <div className="item-section-left absolute shadow-xl  
         xl:-left-[40px] left-2 border border-theme-default-border-color bg-theme-default-bg-color xl:p-4 p-2 xl:px-3 rounded-lg">
            <div className='px-1 space-y-1'><h3 className=' text-[10.4px] xl:text-[14.4px] font-[600] font-Montserrat text-theme-secondary-heading-text-color'>Project review #2</h3>
            <h3 className=' text-[8.5px] xl:text-[13.5px] font-Roboto text-theme-default-text-color'>Team review before launch</h3></div>

            <div className=" absolute xl:-left-[38px] -left-[25px] top-[0.6rem]
             xl:top-[1.2rem] overflow-hidden w-[31px] h-[31px] xl:w-[50px] xl:h-[50px]  border border-theme-default-border-color rounded-full">
<StaticImage src='../../images/29.jpg' cl/>
            </div>
        </div>

        {/* END OF ITEM-SECTION-LEFT */}
        <div className="item-section-right absolute shadow-xl xl:top-[12rem] top-[7rem]
         xl:-right-[21px] right-2 border border-theme-default-border-color bg-theme-default-bg-color p-2 xl:p-4 xl:px-4 rounded-lg">
            <div className='px-1 space-y-1'><h3 className=' text-[10.4px] xl:text-[14.4px] font-[600] font-Montserrat text-theme-secondary-heading-text-color'>Project review #2</h3>
            <h3 className=' text-[8.5px] xl:text-[13.5px] font-Roboto text-theme-default-text-color'>Team review before launch</h3></div>

            <div className=" absolute xl:-right-[38px] -right-[15px] top-[0.6rem]
             xl:top-[1.2rem] overflow-hidden xl:w-[50px]
             xl:h-[50px] w-[31px] h-[31px] border border-theme-default-border-color rounded-full">
<StaticImage src='../../images/29.jpg' cl/>
            </div>
        </div>
        {/* END OF ITEM-SECTION-right */}

         <div className="item-section-right absolute shadow-xl
          right-[48px] xl:right-[55px] bottom-[37px] xl:bottom-[69px] 
          border border-theme-default-border-color bg-theme-default-bg-color xl:p-4 p-2 xl:px-4 rounded-lg">
            <div className='px-1 space-y-1'><h3 className=' text-[10.4px] xl:text-[14.4px] font-[600] font-Montserrat text-theme-secondary-heading-text-color'>Project review #2</h3>
            <h3 className=' text-[8.5px] xl:text-[13.5px] font-Roboto text-theme-default-text-color'>Team review before launch</h3></div>

            <div className="border-theme-default-border-color absolute -right-5 xl:-right-[38px] top-[0.6rem] xl:top-[1rem] overflow-hidden w-[31px] xl:w-[50px] h-[31px] xl:h-[50px]  border rounded-full">
<StaticImage src='../../images/29.jpg' cl/>
            </div>
        </div>
        </div></div>
}
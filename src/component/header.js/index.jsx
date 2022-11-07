import React,{useState} from 'react'
import "./style.css"
import { StaticImage } from "gatsby-plugin-image"

import { AiOutlineMenu,AiOutlineClose } from "react-icons/ai";
export default function Header (){
    const [menu,setMenu]=useState(false)
    return <>
    <div className='md:hidden hidden xl:flex header-container
     absolute top-0 right-0 left-0 text-[14.7px] font-[600]  font-Montserrat p-4  justify-between px-[12rem]'>
     <div className='row'>
<ul className='flex space-x-4 text-theme-menu-text-color'>
    <li>
        <StaticImage width={32} height={35} src="../../../public/images/logo.svg" alt="alt"  />
    </li>
    <li className='grid place-items-center'>Product</li>
    <li className='grid place-items-center'>Price</li>
    <li className='grid place-items-center'> Company</li>
    <li className='grid place-items-center'>Resource</li>
</ul>
     </div>
     <div className="row">
      <button className='bg-theme-primary-button-color p-3 rounded-lg text-theme-primary-button-text-color w-[6rem]' type="">Buy Vulk</button>
     </div>
    </div>
    {/* END OF DESKTOP MENU  */}

    <div className="mobile-menu w-full xl:hidden absolute font-[600]  font-Montserrat top-0 right-0 left-0">
        <div className={menu?"bg z-10 duration-1000 delay-500 bg-theme-default-bg-color shadow-md absolute space-y-3 top-0 right-0 px-2 left-0 py-5":"hidden"}>
          <div className="nav flex justify-between  ">
            <div className="img">
                <StaticImage width={32} height={35} src="../../../public/images/logo.svg" alt="alt"  />
            </div>

            <div className="humber mr-7 text-[1.5rem] text-[#747990] cursor-pointer">
               <AiOutlineClose onClick={()=>setMenu(!menu)}/>
            </div>
        </div>
        <ul className='text-[#283252] space-y-3 text-[14px]'>
            <li>Product</li>
            <li>Price</li>
            <li>Company</li>
            <li>Resource</li>
        </ul>
        </div>
        <div className="nav flex justify-between px-2 p-4">
            <div className="img">
                <StaticImage width={32} height={35} src="../../../public/images/logo.svg" alt="alt"  />
            </div>

            <div className="humber text-[#747990] cursor-pointer" onClick={()=>setMenu(!menu)}>
               <AiOutlineMenu className='mr-7 text-[1.5rem]'/>
            </div>
        </div>
    </div>
    
    </>
}
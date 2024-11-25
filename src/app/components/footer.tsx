import React from 'react'
import { SiLinkedin } from "react-icons/si";
import { Sora } from "next/font/google";
import { IoLogoGithub } from "react-icons/io5";
import { IoLogoInstagram } from "react-icons/io5";
const sora = Sora({ subsets: ["latin"] });
const Footer= () => {
  return (
    <div className='flex flex-col items-start w-[579px] h-[294px] relative left-28 top-12'>
        <p className={`${sora} text-[28px] font-semibold text-imgback`}>Contacts</p>
        <p className={`${sora} text-[48px] font-bold text-black`}>Get in touch</p>
        <p className={`${sora} text-[20px] font-normal text-black`}>rizfanher@gmail.com</p>
        <div className='flex space-x-4'><SiLinkedin className='text-imgback w-[40px] h-[39.5px]'/> <IoLogoGithub  className='text-imgback w-[40px] h-[39.5px]'/> <IoLogoInstagram className='text-imgback w-[40px] h-[39.5px]' /> </div>
        <br />
        <br />
        <br />
        <p className={`${sora} text-[20px] font-normal text-black`}>Copyright © 2023. Develop & Designed by Rizfan Herlaya</p>
      
    </div>
  )
}

export default Footer

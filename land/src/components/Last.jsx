import React from 'react'
import { IoIosArrowForward } from "react-icons/io";
import { CiLocationOn } from "react-icons/ci";
import { CiMail } from "react-icons/ci";
import { SlSocialFacebook } from "react-icons/sl";
import { RiTwitterXLine } from "react-icons/ri";
import { LiaGooglePlusG } from "react-icons/lia";
import { SlSocialLinkedin } from "react-icons/sl";
import { CiInstagram } from "react-icons/ci";
import { AiOutlinePinterest } from "react-icons/ai";
import { SlSocialYoutube } from "react-icons/sl";
const Last = () => {
  return (
    <>
       {/* Section Heading */}
       <div className="text-center my-30 px-4 ">
        <p className="text-[34px] leading-[1.5em] tracking-tight text-black font-semibold">
        Guide for buyers and sellers
        </p>
        <p className="mt-4  text-[18px] text-gray-500 max-w-[828px] mx-auto leading-[28px]">
          

Get immediate access to find the best homes for sale, information on market trends, open houses and homes-in-progress.

        </p>
      </div>

      
      {/* Footer */}

      <div className="flex flex-col md:flex-row  p-6 py-30 bg-gray-100">
  {/* Discover Section */}
  <div className="no-underline px-30">
    <p className="text-[18px] font-semibold pb-[25px]">Discover</p>
    <ul className='text-sm space-y-2 font-semibold'>
    <li className="flex items-center space-x-2">
    <IoIosArrowForward className="" />
    <span>Hapur</span>
  </li>
  <li className="flex items-center space-x-2">
    <IoIosArrowForward className="" />
    <span>Sawai Madhopur</span>
  </li>
  <li className="flex items-center space-x-2">
    <IoIosArrowForward className="" />
    <span>Naugaon</span>
  </li>
  <li className="flex items-center space-x-2">
    <IoIosArrowForward className="" />
    <span>Noida</span>
  </li>
  <li className="flex items-center space-x-2">
    <IoIosArrowForward className="" />
    <span>Saharanpur</span>
  </li>
  </ul>
  </div>

  {/* Contact Us Section */}
  <div className="no-underline">
    <p className="text-[18px] font-semibold pb-[25px]">Contact Us</p>
    <ul className="space-y-2 text-sm font-semibold">
      <li className="flex items-center space-x-2">
    <CiLocationOn  className="" />
    <span>17th Floor, Supertech E-Square, Sector-96.</span>
  </li>
  <li className="flex items-center space-x-2">
    <CiMail className="" />
    <span>info@FarmlandIndia.com</span>
  </li>
  <li className="flex items-center space-x-2">
    <IoIosArrowForward className="" />
    <span>Contact us</span>
  </li>
    </ul>
  </div>

  {/* Newsletter Section */}
  <div className=' px-30'>
    <p className="text-[18px] font-semibold pb-[25px]">Newsletter</p>
    <p className="text-sm text-gray-600 font-semibold">Subscribe to get the latest updates.</p>
    
    {/* <input
      type="email"
      placeholder="Enter your email"
      className="w-full mt-2 p-2 border border-gray-300 rounded-md"
    /> */}
    {/* <button className="mt-2 bg-indigo-600 text-white px-4 py-2 rounded-md hover:bg-indigo-700 transition">
      Subscribe
    </button> */}
  </div>
</div>


{/* All Right */}


<div className='flex justify-around items-center bg-[#F1F2F3] py-20'>
  <div>
    <p>© FarmlandIndia - All rights reserved.</p>
  </div>

  <div>
    <img src="" alt="" />
  </div>

  <div className=' '>
     <ul className='flex items-center space-x-2'>
      <li><SlSocialFacebook/></li>
      <li><RiTwitterXLine /></li>
      <li><LiaGooglePlusG /></li>
      <li><SlSocialLinkedin /></li>
      <li><CiInstagram /></li>
      <li><AiOutlinePinterest /></li>
      <li><SlSocialYoutube/></li>
     </ul>
  </div>
</div>


    </>
  )
}

export default Last





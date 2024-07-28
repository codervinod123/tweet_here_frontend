import React from 'react'
import { IoHomeOutline } from "react-icons/io5";
import { CiSearch } from "react-icons/ci";
import { IoMdNotificationsOutline } from "react-icons/io";
import { IoChatboxOutline } from "react-icons/io5";
import { PiUsers } from "react-icons/pi";
import { HiOutlineUserCircle } from "react-icons/hi2";


const Dashboard = () => {
  return (
    <div className='w-[100%] h-[100vh] bg-black grid grid-cols-5 text-white'>
        
        <div className='p-4 flex flex-col gap-y-1  border-r'>
           
            <div className='flex gap-x-4 items-center px-4 py-1 rounded-full hover:bg-gray-800 text-[1.2rem] cursor-pointer'>
                <span><IoHomeOutline/></span>
                <span>Home</span>
             </div>

             <div className='flex gap-x-4 items-center px-4 py-1 rounded-full hover:bg-gray-800 text-[1.2rem] cursor-pointer'>
                <span><CiSearch/></span>
                <span>Search</span>
             </div>

             <div className='flex gap-x-4 items-center px-4 py-1 rounded-full hover:bg-gray-800 text-[1.2rem] cursor-pointer'>
                <span><IoMdNotificationsOutline/></span>
                <span>Notifications</span>
             </div>

             <div className='flex gap-x-4 items-center px-4 py-1 rounded-full hover:bg-gray-800 text-[1.2rem] cursor-pointer'>
                <span><IoChatboxOutline/></span>
                <span>Messages</span>
             </div>

             <div className='flex gap-x-4 items-center px-4 py-1 rounded-full hover:bg-gray-800 text-[1.2rem] cursor-pointer'>
                <span><PiUsers/></span>
                <span>Communities</span>
             </div>

             <div className='flex gap-x-4 items-center px-4 py-1 rounded-full hover:bg-gray-800 text-[1.2rem] cursor-pointer'>
                <span><HiOutlineUserCircle/></span>
                <span>Profile</span>
             </div>

        </div> 

        <div className='col-span-4'>
              Hello from Content side page
        </div>
    </div>
  )
}

export default Dashboard
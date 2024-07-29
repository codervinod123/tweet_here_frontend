import React from 'react'
import { IoHomeOutline } from "react-icons/io5";
import { CiSearch } from "react-icons/ci";
import { IoMdNotificationsOutline } from "react-icons/io";
import { IoChatboxOutline } from "react-icons/io5";
import { PiUsers } from "react-icons/pi";
import { HiOutlineUserCircle } from "react-icons/hi2";

import { Link } from 'react-router-dom';

const Navigation = () => {
    return (
        <div className='p-4 flex flex-col gap-y-1  border-r'>

         <Link to="/">
            <div className='flex gap-x-4 items-center px-4 py-1 rounded-full hover:bg-gray-800 text-[1.2rem] cursor-pointer'>
                <span><IoHomeOutline /></span>
                <span>Home</span>
            </div>
         </Link>

            <div className='flex gap-x-4 items-center px-4 py-1 rounded-full hover:bg-gray-800 text-[1.2rem] cursor-pointer'>
                <span><CiSearch /></span>
                <span>Search</span>
            </div>

            <div className='flex gap-x-4 items-center px-4 py-1 rounded-full hover:bg-gray-800 text-[1.2rem] cursor-pointer'>
                <span><IoMdNotificationsOutline /></span>
                <span>Notifications</span>
            </div>

            <div className='flex gap-x-4 items-center px-4 py-1 rounded-full hover:bg-gray-800 text-[1.2rem] cursor-pointer'>
                <span><IoChatboxOutline /></span>
                <span>Messages</span>
            </div>

            <div className='flex gap-x-4 items-center px-4 py-1 rounded-full hover:bg-gray-800 text-[1.2rem] cursor-pointer'>
                <span><PiUsers /></span>
                <span>Communities</span>
            </div>

            <Link to="/profile">
              <div className='flex gap-x-4 items-center px-4 py-1 rounded-full hover:bg-gray-800 text-[1.2rem] cursor-pointer'>
                <span><HiOutlineUserCircle /></span>
                <span>Profile</span>
              </div>
            </Link>

        </div>
    )
}

export default Navigation
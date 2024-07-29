import React from 'react'
import { BsEmojiSmile } from "react-icons/bs";
import { CiImageOn } from "react-icons/ci";
import IMG from "../../src/assets/vinod.jpg";

const Post = () => {
  return (
    <div className='bg-black overflow-auto pt-8'>

      <div className='border-b'>
        <div className='flex gap-x-8 px-8 pb-4'>
          <img className='w-[40px] rounded-full' src={IMG} alt="" />
          <input className='bg-black text-white text-[1rem] outline-none placeholder:text-gray-700  w-[100%]' placeholder='What id happening ?' type="text" />
        </div>
        <div className='flex gap-x-4 px-8 pb-8 ml-16'>
          <button className='text-blue-600'><CiImageOn /></button>
          <button className='text-blue-600'><BsEmojiSmile /></button>
        </div>

      </div>

    </div>
  )
}

export default Post
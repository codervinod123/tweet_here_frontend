import React,{useEffect,useState} from 'react'
import { IoIosArrowRoundBack } from "react-icons/io";
import IMG from "../../../src/assets/harmayni.png"
import { SlCalender } from "react-icons/sl";
import TweetContent from './TweetContent';
import Tweet from '../Tweet';
import axios from 'axios';

const Profile = () => {

  const [tweet,setTweet]=useState([]);

  useEffect(()=>{
      getTweets();
  },[])

  const getTweets=async()=>{
         const res=await axios.get("http://localhost:3001/api/v1/tweet");
         setTweet(res.data.data);
         console.log(res.data.data);
  }


    return (
        <div className='lg:col-span-3 col-span-3 overflow-y-auto relative'>

            <div className='flex justify-between py-3 px-8 backdrop-blur sticky top-0 z-10'>
                <div className='flex items-center gap-x-6'>
                    <IoIosArrowRoundBack size={"1.8rem"}/>
                    <div className='flex flex-col leading-[14px]'>
                      <span className='font-semibold'>@aryan_Yadav</span>
                      <span className='text-gray-600 text-sm'>238 Posts</span>
                    </div>
                </div>
            </div>

            <div className='h-[200px] bg-gray-500 relative'>
                
            </div>

            <div className='box-border relative top-[-50px] px-8 text-white'>
              
               <div className='box-border border-2 border-slate-700 h-[100px] w-[100px] rounded-full'>
                 <img className='rounded-full box-border h-[100px] w-[100px]' src={IMG} alt="" />
               </div>

               <div className='pt-4 leading-[16px]'>
                 <h1 className='font-bold'>Emma Watson</h1>
                 <h1 className='text-thin text-gray-600'>@emmawatsonHarry</h1>
               </div>

               <div className='pt-3'>
                 <h1 className='text-sm'>Actoress, Model, Harry Porter</h1>
                 <h1 className='text-sm'>Love from India ✅</h1>
               </div>

               <div className='pt-3 flex items-center gap-x-2'>
                  <SlCalender size={".6rem"}/>
                  <p className='text-[12px] text-thin text-gray-600'>Joined on feb 2023</p>
               </div>

               <div className='pt-3 flex items-center gap-x-2'>
                   <p className='text-[12px] text-thin text-white font-semibold'>543<span className='px-1 text-gray-600 font-normal'>Followers</span></p>
                   <p className='text-[12px] text-thin text-white font-semibold'>203<span className='px-1 text-gray-600 font-normal'>Following</span></p>
               </div>

            </div>

            <div className='box-border border-b px-8 text-white'>
                <ul className='flex justify-between'>
                    <li className='text-gray-600 font-semibold'>Posts</li>
                    <li className='text-gray-600 font-semibold'>Replies</li>
                    <li className='text-gray-600 font-semibold'>Highlights</li>
                    <li className='text-gray-600 font-semibold'>Artile</li>
                    <li className='text-gray-600 font-semibold'>Media</li>
                    <li className='text-gray-600 font-semibold'>Links</li>
                </ul>
            </div>

            <Tweet tweet={tweet} />

            
        </div>
    )
}

export default Profile
import React, { useEffect,useState } from 'react'
import IMG from "../../../src/assets/vinod.jpg"
import Navigation from '../NavigationMenu';
import Post from '../Post';
import Tweet from '../Tweet';

import axios from "axios";


const Dashboard = () => {

  const [tweet,setTweet]=useState([]);

  useEffect(()=>{
      getTweets();
  },[])

  const getTweets=async()=>{
         const res=await axios.get("http://localhost:3001/api/v1/tweet");
         setTweet(res.data.data);
  }

  return (
    <div className='w-[100%] h-[100vh] bg-black grid grid-cols-5 text-white'>
        
         <Navigation/>

        <div className='col-span-3 overflow-y-auto relative'>

              <div className='flex justify-between py-3 px-8 backdrop-blur sticky top-0 z-10'>
                   <div>For You</div>
                   <div>Following</div>
                   <div>Trending</div>
              </div>

               <Post/>
               <Tweet tweet={tweet}/>
        </div>

        <div className='text-white border-l'>kds</div>
     
       
    </div>
  )
}

export default Dashboard
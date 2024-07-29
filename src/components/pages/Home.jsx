import React, { useEffect,useState } from 'react'
import IMG from "../../../src/assets/vinod.jpg"
import Navigation from '../NavigationMenu';
import Post from '../Post';
import Tweet from '../Tweet';

import { Outlet } from 'react-router-dom';

import axios from "axios";
import TweetContent from './TweetContent';


const Home = () => {

  const [tweet,setTweet]=useState([]);

  useEffect(()=>{
      getTweets();
  },[])

  const getTweets=async()=>{
         const res=await axios.get("http://localhost:3001/api/v1/tweet");
         setTweet(res.data.data);
  }

  return (
    <div className='w-[100%] h-[100vh] bg-black grid lg:grid-cols-5 grid-cols-3 text-white'>

        <div className='hidden lg:grid'>
           <Navigation/>
        </div>

        <Outlet/>

        <div className='hidden lg:grid'>
          <div className='text-white border-l'>kds</div>
        </div>
       
    </div>
  )
}

export default Home

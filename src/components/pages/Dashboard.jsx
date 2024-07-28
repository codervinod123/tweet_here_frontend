import React from 'react'




import IMG from "../../../src/assets/vinod.jpg"
import Navigation from '../NavigationMenu';
import Post from '../Post';
import Tweet from '../Tweet';



const Dashboard = () => {
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
               <Tweet/>
               <Tweet/>
               <Tweet/>
               <Tweet/>
               <Tweet/>
        </div>

        <div className='text-white border-l'>kds</div>
     
       
    </div>
  )
}

export default Dashboard
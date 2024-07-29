import React,{useState,useEffect} from 'react'
import axios from 'axios'
import Tweet from '../Tweet'
import Post from '../Post'

const TweetContent = () => {

  const [tweet,setTweet]=useState([]);

  useEffect(()=>{
      getTweets();
  },[])

  const getTweets=async()=>{
         const res=await axios.get("http://localhost:3001/api/v1/tweet");
         setTweet(res.data.data);
  }

    return (
       
            <div className='lg:col-span-3 col-span-3 overflow-y-auto relative'>

                <div className='flex justify-between py-3 px-8 backdrop-blur sticky top-0 z-10'>
                    <div>For You</div>
                    <div>Following</div>
                    <div>Trending</div>
                </div>
                <Post />
                <Tweet tweet={tweet} />
            </div>
      
    )
}

export default TweetContent

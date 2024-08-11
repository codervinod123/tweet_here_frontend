import React, { useEffect ,useState } from 'react'
import { Link,useNavigate } from 'react-router-dom'
import axios from 'axios'
import CategoryNavigation from '../CategoryNavigation';

const Trending = () => {

    const navigate=useNavigate();
    const [trending,setTrending]=useState([]);

    useEffect(()=>{
        getAllTrending();
    },[])
  
    const getAllTrending=async()=>{
           const res=await axios.get("http://localhost:3001/api/v1/trending");
           setTrending(res.data.data);
    }

    const handleTrendNavigate=(data)=>{
        navigate("/" ,{state:{trends:data}});
    }


  return (
    <div className='lg:col-span-3 col-span-3 overflow-y-auto relative'>
    <CategoryNavigation/>
    <div className='flex flex-col gap-y-2 py-1 px-8 backdrop-blur sticky top-0 z-10'>
      {
        trending.map((data)=>{
            return(
                <div onClick={()=>handleTrendNavigate(data)} key={data._id} className='bg-gray-900 rounded cursor-pointer hover:bg-gray-800 transition-all duration-500'>
                    <div className='flex flex-col px-3 py-1 leading-4'>
                         <span className='text-gray-300 text-[12px] flex flex-col gap-y-1'>Trending in INDIA</span>
                         <span>#{data.hashtag}</span>
                         <span className='text-gray-300 text-[12px] flex flex-col gap-y-1'>{data.tweets.length} posts</span>
                    </div>
                </div>
            )
        })
      }
    </div>   

</div>
  )
}

export default Trending
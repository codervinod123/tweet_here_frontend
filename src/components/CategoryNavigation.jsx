import React from 'react'
import { Link } from 'react-router-dom'

const CategoryNavigation = () => {
    return (

        <div className='flex justify-between py-3 px-8 backdrop-blur sticky top-0 z-50'>
           <Link to="/"> 
              <div>For You</div>
            </Link>
            
            <Link to="/"> 
              <div>Following</div>
            </Link>

             <Link to="/trending">
               <div>Trending</div>
             </Link>
        </div>
    )
}

export default CategoryNavigation
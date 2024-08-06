import React from 'react'
import FutureUmage from "../../assets/futureupdate.jpg"

const FutureUpdate = () => {
  return (
    <div>
        <div className='px-12 py-12 flex flex-col items-center'>
          <h1 className='py-2 text-xl'>We Are coming with new Updates</h1>
          <img className='w-[500px] rounded-md' src={FutureUmage} alt="" />
        </div>
    </div>
  )
}

export default FutureUpdate
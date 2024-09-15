import React, { useRef } from 'react'


const EditProfileDialog = ({handleProfileEdit}) => {
    
  const dialofRef=useRef();


  return (
    <div>
        <dialog ref={dialofRef}>
            <h1>Hello from my side</h1>
            <div className='h-[200px] w-[200px] border-2 bg-pink-600'></div>
        </dialog>
    </div>
  )
}

export default EditProfileDialog
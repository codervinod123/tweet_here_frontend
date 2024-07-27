import React from 'react'
import { FaArrowRight } from 'react-icons/fa'

const Button = ({buttonName}) => {
  return (
    <div>
        <button type="submit"  className='bg-blue-600 w-fit mx-auto  py-1 rounded font-semibold text-white relative pr-16 pl-4' >
            {buttonName}
            <div className='w-[30px] h-[40px] bg-green-500 absolute ml-8 skew-x-[20deg] right-[20px] top-[-4px] flex items-center justify-center'>
                 <FaArrowRight className='skew-x-[-20deg]' />
            </div>
        </button>
    </div>
  )
}

export default Button
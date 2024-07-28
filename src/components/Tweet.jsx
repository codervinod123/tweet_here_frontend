import React from 'react'
import { CiHeart } from "react-icons/ci";
import { BsChat } from "react-icons/bs";
import IMG from "../../src/assets/vinod.jpg";

const Tweet = ({ tweet }) => {
    console.log(tweet);
    return (
        <React.Fragment>
            {
                tweet?.map((data) => {
                    console.log(data);
                    return (
                        <React.Fragment>
                            <div className='text-white border-b'>

                                <div className='px-8 grid grid-cols-12 py-4'>
                                    <div className=''>
                                        <img className='w-[40px] rounded-full' src={IMG} alt="author" />
                                    </div>
                                    <div className='col-span-11'>
                                        <div className='flex items-center gap-x-3 pb-1'>
                                            <span className='font-bold'>Name</span>
                                            <span className='text-gray-600 text-sm'>User Name</span>
                                        </div>
                                        <p className='text-md'>
                                            { 
                                               data.content
                                            }
                                        </p>
                                        <div className='flex gap-x-8 pt-4'>
                                            <div className='flex items-start gap-x-1'>
                                                <CiHeart size={"1.5rem"} />
                                                <span>12</span>
                                            </div>
                                            <div className='flex items-start gap-x-1'>
                                                <BsChat className='font-thin' size={"1.3rem"} />
                                                <span>12</span>
                                            </div>

                                        </div>
                                    </div>
                                </div>
                            </div>
                        </React.Fragment>
                    )
                })
            }
        </React.Fragment>
    )
}

export default Tweet
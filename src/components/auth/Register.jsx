import React, { useState } from 'react'
import Button from '../commonComp/Button';
import axios from "axios"
import { Link } from 'react-router-dom';


const Register = () => {

    const [loginData, setLoginData] = useState({
        name:"",
        email: "",
        password: ""
    })

    const handleInputChange = (e) => {
        const val=e.target.value;
        const name=e.target.name;
        setLoginData(prev => ({...prev, [name]: val}))
    }

    const handleRegister=async(e)=>{
          e.preventDefault();
          console.log(loginData);
         const user = await axios.post("http://localhost:3001/api/v1/user",
            {
                email: loginData.email,
                password: loginData.password,
                name: loginData.name,
            });
        console.log(user);
        setLoginData({
            name:"",
            email: "",
            password: ""
        })
    }

    return (
        <div className='h-[100vh] w-[100vw] bg-slate-700 flex justify-center items-center'>
            <div className='h-[80%] lg:w-[40%] bg-slate-900 rounded-lg shadow-xl p-4 flex flex-col items-center'>
                <h1 className='text-2xl text-white font-bold'>Register In to <span className='text-green-500 underline underline-offset-4'>Tweet Here</span></h1>

                <form onSubmit={handleRegister} className='flex flex-col gap-y-4 justify-center w-[40%] pt-12'>
                   
                <div>
                <label className='text-white pb-[2px]' for="name">Name</label>
                  <input
                        type="text"
                        id="name"
                        placeholder='Name'
                        className='px-2 py-[4px] rounded text-gray-300 bg-slate-900 border outline-none'
                        value={loginData.name}
                        name="name"
                        onChange={handleInputChange}
                    />
                </div>

                 <div>
                    <label className='text-white pb-[2px]' for="email">Email</label>
                    <input
                        type="text"
                        id="email"
                        placeholder='Email'
                        className='px-2 py-[4px] rounded text-gray-300 bg-slate-900 border outline-none '
                        value={loginData.email}
                        name="email"
                        onChange={handleInputChange}
                    />
                </div>

                <div>
                    <label className='text-white pb-[2px]' for="password">Password</label>
                    <input
                        type="password"
                        id="password"
                        placeholder='Password'
                        className='px-2 py-[4px] rounded text-gray-300 bg-slate-900 border outline-none'
                        value={loginData.password}
                        name="password"
                        onChange={handleInputChange}
                    />
               </div>

                    <Button type="submit" buttonName="Sign Up"/>

                </form>

                <p className='pt-4 text-gray-300'>
                    Already Have an Account ?
                     <span  className='text-blue-500'>
                        <Link to="/login">
                          Sign In
                        </Link>
                    </span>
                </p>

            </div>
        </div>
    )
}

export default Register
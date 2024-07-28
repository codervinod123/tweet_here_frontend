import React, { useState } from 'react'
import Button from '../commonComp/Button';
import axios from 'axios';

const Login = () => {

    const [loginData, setLoginData] = useState({
        email: "",
        password: ""
    })

    const handleInputChange = (e) => {
        const val = e.target.value;
        const name = e.target.name;
        setLoginData(prev => ({ ...prev, [name]: val }))
    }

    const handleLogin = async (e) => {
        e.preventDefault();
        console.log(loginData);
        const user = await axios.post("http://localhost:3001/api/v1/login",
            {
                email: loginData.email,
                password: loginData.password
            });
        console.log(user);
        setLoginData({
            email: "",
            password: ""
        })
    }

    return (
        <div className='h-[100vh] w-[100vw] bg-slate-700 flex justify-center items-center'>
            <div className='h-[80%] lg:w-[40%] bg-slate-900 rounded-lg shadow-xl p-4 flex flex-col items-center'>
                <h1 className='p-4 text-2xl text-white font-bold'>Sign In to <span className='text-green-500 underline underline-offset-4'>Tweet Here</span></h1>

                <form onSubmit={handleLogin} className='flex flex-col justify-center items-center gap-6 w-[40%] pt-12'>
                    <input
                        type="text"
                        placeholder='Email'
                        className='px-2 py-[4px] rounded text-gray-300 bg-slate-900 border outline-none'
                        value={loginData.email}
                        name="email"
                        onChange={handleInputChange}
                    />

                    <input
                        type="password"
                        placeholder='Password'
                        className='px-2 py-[4px] rounded text-gray-300 bg-slate-900 border outline-none'
                        value={loginData.password}
                        name="password"
                        onChange={handleInputChange}
                    />

                    <Button type="submit" buttonName="Login" />

                </form>

            </div>
        </div>
    )
}

export default Login
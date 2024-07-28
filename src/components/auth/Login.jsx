import React, { useEffect, useState } from 'react'
import Button from '../commonComp/Button';
import axios from 'axios';
import { Link } from 'react-router-dom';
import Dashboard from '../pages/Dashboard';


const Login = () => {

    const [loginData, setLoginData] = useState({
        email: "",
        password: ""
    })
    const [authenticated, setAuthenticated] = useState(false);

    const handleInputChange = (e) => {
        const val = e.target.value;
        const name = e.target.name;
        setLoginData(prev => ({ ...prev, [name]: val }))
    }

    const handleLogin = async (e) => {
        e.preventDefault();
        const user = await axios.post("http://localhost:3001/api/v1/login",
            {
                email: loginData.email,
                password: loginData.password
            });
        setLoginData({
            email: "",
            password: ""
        })
        if (user) {
            localStorage.setItem("authenticated", true);
            setAuthenticated(true);
        }
    }

    // useEffect(()=>{
    //     const isLogin=localStorage.getItem("authenticated");
    //     setAuthenticated(isLogin);
    // },[])


    return !authenticated ? <Dashboard /> : (
        <div className='h-[100vh] w-[100vw] bg-slate-700 flex justify-center items-center'>
            <div className='h-[80%] lg:w-[40%] bg-slate-900 rounded-lg shadow-xl p-4 flex flex-col items-center'>
                <h1 className='p-4 text-2xl text-white font-bold'>Sign In to <span className='text-green-500 underline underline-offset-4'>Tweet Here</span></h1>

                <form onSubmit={handleLogin} className='flex flex-col  gap-6 w-[40%] pt-12'>


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

                    <Button type="submit" buttonName="Sign In" />

                </form>

                <p className='pt-4 text-gray-300'>
                    Don't Have an Account ? 
                    <span className='text-blue-500'>
                        <Link to="/register">
                            Sign Up
                        </Link>
                    </span>
                </p>


            </div>
        </div>
    )
}

export default Login
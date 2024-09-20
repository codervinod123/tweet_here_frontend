import React, { useState, useEffect } from "react";
import Button from "../commonComp/Button";
import axios from "axios";
import { Link,useNavigate } from "react-router-dom";


import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";


const Login = () => {

  const navigate=useNavigate();
  // eslint-disable-next-line
  const [authenticated, setAuthenticated] = useState(false);
  const [loginData, setLoginData] = useState({
    email: "",
    password: "",
  });

  const handleInputChange = (e) => {
    const val = e.target.value;
    const name = e.target.name;
    setLoginData((prev) => ({ ...prev, [name]: val }));
  };

  const handleLogin = async (e) => {
    e.preventDefault();
    if (isValidate(loginData)) {
      const response=await axios.post("http://localhost:3001/api/v1/login", {
        email: loginData.email,
        password: loginData.password,
      });
      setLoginData({
          email: "",
          password: ""
      })
      console.log("Resp on Front",response.data.token);
      if (response.data.token) {
          localStorage.setItem("token", response.data.token);
          navigate("/home");
      }else{
        console.log(response);
      }
    }
  };

  const isValidate = (data) => {
    if (!data.email) {
      toast.error("Please Enter the email id", {
        position: "top-right",
        autoClose: 1000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "dark",
      });
      return false;
    } else if (!data.password) {
      toast.error("Please Enter Password", {
        position: "top-right",
        autoClose: 1000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "dark",
      });
      return false;
    }
    return true;
  };

  useEffect(()=>{
      const isLogin=localStorage.getItem("token");
      if(isLogin){
        navigate("/home");
      }
  },[])

  return( 
    <div className="h-[100vh] w-[100vw] bg-slate-700 flex justify-center items-center">
      <div className="h-[80%] lg:w-[40%] bg-slate-900 rounded-lg shadow-xl p-4 flex flex-col items-center">
        <h1 className="p-4 text-2xl text-white font-bold">
          Sign In to{" "}
          <span className="text-green-500 underline underline-offset-4">
            Tweet Here
          </span>
        </h1>

        <form
          onSubmit={handleLogin}
          className="flex flex-col  gap-6 w-[40%] pt-12"
        >
          <div>
            <label className="text-white pb-[2px]">Email</label>
            <input
              type="email"
              placeholder="Email"
              className="px-2 py-[4px] rounded text-gray-300 bg-slate-900 border outline-none"
              value={loginData.email}
              name="email"
              onChange={handleInputChange}
            />
          </div>

          <div>
            <label className="text-white pb-[2px]">Password</label>
            <input
              type="password"
              placeholder="Passsword"
              className="px-2 py-[4px] rounded text-gray-300 bg-slate-900 border outline-none "
              value={loginData.password}
              name="password"
              onChange={handleInputChange}
            />
          </div>

          <Button type="submit" buttonName="Sign In" />
        </form>

        <p className="pt-4 text-gray-300">
          Don`&apos;t Have an Account ?
          <span className="text-blue-500">
            <Link to="/register">Sign Up</Link>
          </span>
        </p>
      </div>
      <ToastContainer />
    </div>
  )
};

export default Login;

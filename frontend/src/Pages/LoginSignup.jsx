import React, { useState } from 'react';

const LoginSignup = () => {

  const [state, setState] =  useState("Login");
  const [formData, setFormData] = useState({
    username: "",
    password: "",
    email:""
  });

  const changeHandler = (e) => {
    setFormData({...formData, [e.target.name]: e.target.value});
  }

  const login = async () =>{
    console.log("Login Function Executed", formData);
     let responseData;
      await fetch('http://localhost:4000/login', {
        method: "POST",
        headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
    }).then((response) => response.json()).then((data)=>{responseData = data});
    
    if(responseData.success){
      localStorage.setItem('auth_token', responseData.token);
      window.location.replace("/")
    }
    else {
      alert(responseData.error)
    }
  }

  const signup = async () =>{
    console.log("Signup Function Executed", formData);
    let responseData;
    await fetch('http://localhost:4000/signup', {
        method: "POST",
        headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
    }).then((response) => response.json()).then((data)=>{responseData = data});
    
    if(responseData.success){
      localStorage.setItem('auth-token', responseData.token);
      window.location.replace("/")
    }
    else {
      alert(responseData.error)
    }
  }

  return (
    <div className="flex items-center justify-center min-h-screen bg-blue-950 px-4 py-10">
      <div className="w-full max-w-md bg-white p-6 md:p-8 rounded-lg shadow-lg flex flex-col gap-4">
        <h1 className="text-2xl md:text-3xl font-bold text-blue-900 text-center">{state}</h1>

        <div className="flex flex-col gap-4">
          {state === "Sign Up"?<input name="username" value={formData.username}
            onChange={changeHandler}
            className="h-12 px-4 border border-gray-300 rounded-md text-gray-700 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500"
            type="text"
            placeholder="Enter your name"
          />:<></>}
          <input name="email" value={formData.email} onChange={changeHandler}
            className="h-12 px-4 border border-gray-300 rounded-md text-gray-700 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500"
            type="email"
            placeholder="Enter your email"
          />
          <input name="password" value={formData.password} 
            onChange={changeHandler}
            className="h-12 px-4 border border-gray-300 rounded-md text-gray-700 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500"
            type="password"
            placeholder="Enter your password"
          />
        </div>

        <button onClick={()=>{state === "Login"?login():signup()}} className="h-12 bg-blue-600 text-white font-semibold rounded-md hover:bg-blue-700 transition duration-300">
          Continue
        </button>

        {state === "Sign Up"
        ?  <p className="text-sm text-gray-600 text-center">
          Already have an account?{' '}
          <span 
          onClick={()=>{setState("Login")}}
           className="text-blue-600 hover:underline cursor-pointer">Login</span>
        </p>:<p className="text-sm text-gray-600 text-center">
          Create an account? 
          <span
          onClick={()=>{setState("Sign Up")}}
           className="text-blue-600 hover:underline cursor-pointer"> Click here</span>
        </p>}


       

        <div className="flex items-start gap-2 text-xs text-gray-600">
          <input type="checkbox" className="mt-1" />
          <p className="text-xs">
            By continuing, I agree to the{' '}
            <span className="text-blue-600 hover:underline cursor-pointer">Terms of Service</span>{' '}
            and{' '}
            <span className="text-blue-600 hover:underline cursor-pointer">Privacy Policy</span>.
          </p>
        </div>
      </div>
    </div>
  );
};

export default LoginSignup;

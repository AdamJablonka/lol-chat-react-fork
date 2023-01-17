import React from 'react'

const Login = () => {
  return (
    <div className="bg-red-100 flex flex-wrap justify-center items-center h-screen ">
        <div className="bg-white flex flex-col px-32 py-40 justify-center h-2/3 w-1/3">
            <span className="flex justify-center">Rito games</span>
            <span className="flex justify-center">Login</span>
            <form className="flex flex-col gap-1 ">
                <input className="border" type="text"placeholder="username" />
                <input className="border" type="password" placeholder="password" />
                <button>Sign in</button>
                <p className="flex justify-center" >Create Account</p>
            </form>
        </div>
    </div>
    
  )
}

export default Login
import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { UserAuth } from '../context/AuthContext'

const Login = () => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [error, setError ] = useState('')
  const {user, logIn} = UserAuth()
  const navigate = useNavigate()

  const handleSubmit = async (e) => {
      e.preventDefault();
      setError('')
      try {
        await logIn(email, password);
        console.log(user)
        navigate('/Home')
      } catch (error) {
        console.log(error);
        setError(error.message)
      }
  }

  return (
    <div className="bg-red-100 flex flex-wrap justify-center items-center h-screen ">
        <div className="bg-white flex flex-col px-32 py-40 justify-center h-2/3 w-1/3">
            <span className="flex justify-center">Rito games</span>
            <span className="flex justify-center">Login</span>
            <form onSubmit={handleSubmit} className="flex flex-col gap-1 ">
                <input onChange={(e) => setEmail(e.target.value)}
                className="border" type="text"placeholder="username" />
                <input input onChange={(e) => setPassword(e.target.value)}
                className="border" type="password" placeholder="password" />
                <button >Sign in</button>
                {error && <span>{error}</span>}
                <p className="flex justify-center" >Create Account</p>
            </form>
        </div>
    </div>
    
  )
}

export default Login
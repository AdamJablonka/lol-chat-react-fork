import React, { useState } from 'react'
import { UserAuth } from '../context/AuthContext'
import { useNavigate } from 'react-router-dom'

const Register = () => {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [error, setError ] = useState('')
    const {user, signUp} = UserAuth()
    const navigate = useNavigate()

    const handleSubmit = async (e) => {
        e.preventDefault();
        setError('')
        try {
          await signUp(email, password);
          console.log(user)
          navigate('/')
        } catch (error) {
          console.log(error);
          setError(error.message)
        }
    }

    return (
        <div className="bg-red-100 flex flex-wrap justify-center items-center h-screen ">
            <div className="bg-white flex flex-col px-32 py-40 justify-center  h-2/3 w-1/3">
                <span className="flex justify-center">Rito games</span>
                <span className="flex justify-center">Register</span>
                <form onSubmit={handleSubmit}className="flex flex-col gap-1 ">
                    <input onChange={(e) => setEmail(e.target.value)} 
                    className="border" type="email"placeholder="email" />
                    <input input onChange={(e) => setPassword(e.target.value)}
                    className="border" type="password" placeholder="password"/>
                    <button>Sign up</button> 
                    {error && <span>Something went wrong {error}</span>}
                    </form>                       
                <p className="flex justify-center" >Already registered? Login</p>
  
            </div>
        </div>
        
      )
}

export default Register
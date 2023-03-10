import React from 'react';
import { Link, Navigate, useNavigate } from 'react-router-dom';
import { UserAuth } from '../context/AuthContext';

const Navbar = () => {
    const {user, logOut} = UserAuth()
    const handleLogout = async () => {
        try{
            await logOut()
            Navigate('/signup')
        } catch(error){
            console.log(error)
        }
    }

  return (
    <div className="flex items-center justify-between p-4 z-[100] w-full absolute">
        <Link to='/Home'>
            <h1 className="text-red-600 text-4xl font-bold cursor-pointer">
                RITO
            </h1>
        </Link>
    {user?.email ? (        
        <div>
            <Link to='/Home'>
                <button className="text-white pr-4">Account</button>
            </Link>
                <button 
                onClick={handleLogout}
                className="bg-red-600 px-6 py-2 rounded cursor-pointer text-white">
                    Logout
                </button>
        </div>
        ) : (
        <div>
            <Link to='/'>
                <button className="text-white pr-4">Sign In</button>
            </Link>
            <Link to='/signup'>
                <button className="bg-red-600 px-6 py-2 rounded cursor-pointer text-white">
                    Sign up and logout
                </button>
            </Link>
        </div>)
        }
    </div>
  );
};

export default Navbar;

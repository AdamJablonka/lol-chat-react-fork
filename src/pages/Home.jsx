import React from 'react'
import Chat from '../components/Chat'
import Sidebar from '../components/Sidebar'

const Home = () => {
  return (
    <div className="flex justify-center items-center h-screen bg-slate-300">
        <div className="border w-2/3 flex">
            {/* <Sidebar/> */}
            <Chat/>
        </div>
    </div>
  )
}

export default Home
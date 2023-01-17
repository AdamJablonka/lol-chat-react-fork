import React from 'react'

const Chats = () => {
  return (
    <div>
        <div className="flex items-center p-2 hover:bg-slate-500 border-b-2">
            <img src="/Kaiju.png" className="w-16 h-16 rounded-full"/>    
            <div>
                <span>Display name</span>
                <p className="">Hello!</p>      
            </div>  
        </div>
    </div>
  )
}

export default Chats
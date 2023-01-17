import React from 'react'
import Input from './Input'
import Messages from './Messages'

const Chat = () => {
  return (
    <div className="bg-slate-500 w-full">
        <div className="flex justify-between p-2 bg-slate-300">
            <span>username</span>
            <div>
                <span className="px-4"> - </span>
                <span> g </span>
            </div>
        </div>
    </div>
  )
}

export default Chat
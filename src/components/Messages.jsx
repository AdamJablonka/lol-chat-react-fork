import React from 'react'
import Input from './Input'
import Message from './Message'

const Messages = ({message}) => {
  return (
    <>
        <div className="flex flex-row-reverse p-2">
            <div>
                <img src="/Kaiju.png" className="w-16 h-16 rounded-full"/>      
                <span>{}</span>
            </div>
            <div className="flex  px-2 items-center">
                <p className="bg-gray-50 py-2">{message.text}</p>
            </div>
        </div>
      {/* <div className="flex flex-row-reverse p-2">
        <div>
            <img src="/Kaiju.png" className="w-16 h-16 rounded-full"/>      
            <span>Just now</span>
        </div>
        <div className="flex px-2 items-center ">
            <p className="bg-white py-2">Hello!</p>
        </div>
    </div> */}
    </>
  )
}

export default Messages
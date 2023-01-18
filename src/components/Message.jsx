import React from 'react'

const Message = () => {
  return (
    // <div className="flex flex-row-reverse p-2">
    //     <div>
    //         <img src="/Kaiju.png" className="w-16 h-16 rounded-full"/>      
    //         <span>Just now</span>
    //     </div>
    //     <div className="flex px-2 items-center ">
    //         <p className="bg-white py-2">Hello!</p>
    //     </div>
    // </div>
 
    <div className="flex flex-row-reverse p-2">
        <div>
            <img src="/Kaiju.png" className="w-16 h-16 rounded-full"/>      
            <span>Just now</span>
        </div>
        <div className="flex  px-2 items-center">
            <p className="bg-gray-50 py-2">Hello!</p>
        </div>
    </div>
  )
}

export default Message
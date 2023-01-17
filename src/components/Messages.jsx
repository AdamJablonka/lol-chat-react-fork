import React from 'react'
import Message from './Message'

const Messages = () => {
  return (
    <div className="bg-slate-600 h-[calc(100vh-19.4rem)] overflow-y-scroll">
        <Message/>
        <Message/>
        <Message/>
        <Message/>
        <Message/>
        <Message/>
        <Message/>
    </div>
  )
}

export default Messages
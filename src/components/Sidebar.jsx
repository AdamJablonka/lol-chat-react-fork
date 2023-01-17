import React from 'react'
import Chats from './Chats'
import Search from './Search'

const Sidebar = () => {
  return (
    <div className="bg-slate-400 w-2/3 border-r-2">
        <Search/>
        <Chats/>
    </div>
  )
}

export default Sidebar
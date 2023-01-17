import React from 'react'

const Search = () => {
  return (
    <div>
        <div>
            <input className="w-full" type="text" placeholder="search"></input>
            <div className="flex items-center p-2 hover:bg-slate-500 border-y-2">
                <img src="/Kaiju.png" className="w-16 h-16 rounded-full"/>      
                <span>Display name</span>      
            </div>
        </div>
    </div>
  )
}

export default Search
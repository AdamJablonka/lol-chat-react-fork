import { doc, onSnapshot, orderBy } from 'firebase/firestore'
import React, { useEffect, useRef, useState } from 'react'
import Input from './Input'
import Messages from './Messages'
import { db } from '../firebase'
import {query,collection} from 'firebase/firestore'
import { map } from '@firebase/util'

const Chat = () => {
  const [messages, setMessages] = useState([]);

  useEffect(()=>{
    const q = query(collection(db,'messages'),orderBy('timestamp'))
    const unsubscribe = onSnapshot(q,(querySnapshot) =>{
      let messages =[]
      querySnapshot.forEach((doc)=>{
        messages.push({...doc.data(),id: doc.id})
    })
    setMessages(messages)
    })
    return () => unsubscribe()
  },[])

  return (
    <div className="flex flex-col w-full">
      <div className="bg-slate-500 ">
          <div className="flex justify-between p-2 bg-slate-300">
              <span>username</span>
              <div>
                  <span className="px-4"> - </span>
                  <span> g </span>
              </div>
          </div>
      </div>
      <div className="bg-slate-600 h-[calc(100vh-19.4rem)] overflow-y-scroll scroll-smooth scrollbar-hide">        {messages && messages.map((message)=>(
          <Messages key={message.id} message={message} />
        ))}
      </div>
      <Input/>
    </div>
  )
}

export default Chat
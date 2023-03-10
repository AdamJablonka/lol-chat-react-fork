import { addDoc, collection, serverTimestamp } from 'firebase/firestore'
import React, { useState } from 'react'
import { UserAuth } from '../context/AuthContext'
import {auth, db} from '../firebase'

const Input = () => {
  const [input, setInput] = useState('')
  const {user} = UserAuth()

  const sendMessage = async (e) => {
    e.preventDefault()
    if (user.uid === "uiuu18yUhQXgD1fuHs6XCBI1hlJ2"){
      console.log("I FOUND MY ADMIN!")
    }
    console.log(user.uid)
    if (input === ''){
      alert('Please enter a valid message')
      return
    }
    const {uid, displayName } = auth.currentUser
    await addDoc(collection(db,'messages'),{
      text:input,
      name: displayName,
      uid,
      timestamp:serverTimestamp()
    })
    setInput('')
  }
  return (
    <div>
      <form onSubmit={sendMessage} className="flex h-10">
        <input value={input} onChange={(e)=>setInput(e.target.value)} className="w-full h-full" type="text" placeholder="Type here.." />
        <button>Send</button>
      </form>
    </div>
  )
}

export default Input
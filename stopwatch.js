import React from 'react'
import { useRef } from 'react'
import { useState } from 'react'

function App() {
   const[count,setCount]=useState(0)
   const timer=useRef()
   const starttime=()=>{
      timer.current=setInterval(()=>{
         setCount(count=>count+1)
      },1000)
   }
   const stoptime=()=>{
      clearInterval(timer.current)
   }
  return (
    <>
      <button onClick={starttime}>start</button>
      <h1>{count}</h1>
      <button onClick={stoptime}>stop</button>
    </>
  )
}

export default App

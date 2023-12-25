import React from 'react'
import {useState} from 'react'
function App() {
   const[city,setCity]=useState('')
   const [result, setResult] = useState('')
   const submithandler =(e)=> {
     
      e.preventDefault()
      fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=65ba38ae9b418bc5a80dbbd5c43a6f1d`)
      .then(response=>response.json())
      .then(json=>{
         const Kelvin = json.main.temp;
         const celsius = Kelvin - 273.15;
         setResult(Math.round(celsius))

      })
    
   }
  const changehandle=(e)=>{
   setCity(e.target.value)
  }
 
  return (
    <>
    <form onSubmit={submithandler}>
      {result }
      <br/>
      <input type="text" value={city} onChange={changehandle}/>  
      <br/>
      <input type='submit'/>
      </form>
        </>
  )
}

export default App

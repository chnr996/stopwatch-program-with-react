import React from 'react'
import { useContext } from 'react'
import { data ,lastname} from './App'
function Compc() {
    const firstname=useContext(data)
  return (
    <div>
      <h1>component c</h1>
      <h2>my name is{firstname}</h2>
      <h2>my lastname is{lastname}</h2>

    </div>
  )
}

export default Compc
 
import React, { useState } from 'react'
import './Footer.css'




const Test = () => 

    {
        const [first, setfirst] = useState( 1)
  return (
    <div id='test'>
        <button onClick={()=> setfirst((prev)=>prev+1)} style={{padding:'10px', fontSize:"1.4rem" }} >+</button>  {first}   <button onClick={()=> setfirst((prev)=>prev-1)}  style={{padding:'10px',fontSize:"1.4rem"}}>-</button>
    </div>
  )
}

export default Test
import React, { useState } from 'react'
import useCountar from './useCountar'
const App = () => {
    const [count,Increment,Decrement]=useCountar()

    
    
  return (
    <div>
      <h1>MY COUNTAR IS :- {count} </h1>
      <button onClick={Increment}>increment</button>
      <button onClick={Decrement}>decrement</button>
    </div>
  )
}

export default App

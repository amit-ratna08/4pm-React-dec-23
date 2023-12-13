import React from 'react'
import useCustomLogic from './useCustomLogic'


const CustomHooks = () => {
const [count,increment,decrement]=useCustomLogic()
   
  return (
    <div>
      <h1>MY COUNTAR :- {count} </h1>

      <button onClick={increment}>Increment</button>
      <button onClick={decrement}>Decrement</button>
    </div>
  )
}

export default CustomHooks

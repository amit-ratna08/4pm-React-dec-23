import React from 'react'
import './App.css'

import { IncreNumber,DecreNumber } from './action/Index'
import { useDispatch, useSelector } from 'react-redux'

const App = () => {
    const mystate=useSelector((state)=>state.changeState)

    const dispatch=useDispatch()
  return (
    <div className='main'>
      <button className='btn' onClick={()=>dispatch(IncreNumber())} >+</button>
      <input type='text' className='inputtype' value={mystate} />
      <button className='btn' onClick={()=>dispatch(DecreNumber())}>-</button>
    </div>
  )
}

export default App

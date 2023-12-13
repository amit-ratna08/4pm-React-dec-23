import React, { useReducer } from 'react'

const UseReducer = () => {

    const initialstate=0
    const reducer=(state,action)=>{
        switch(action){
            case "INCREMENT":
                return state+1
            case "DECREMENT" :
                return state-1
            default :
            return state
        }
    }

    const [count,dispatch]=useReducer(reducer,initialstate)
  return (
    <div>
      <h1>MY COUNTAR IS :- {count} </h1>
      <button onClick={()=>dispatch("INCREMENT")}>increment</button>
      <button onClick={()=>dispatch("DECREMENT")}>decrement</button>

    </div>

  )
}

export default UseReducer

import React, { useState } from 'react'

const useCustomLogic = () => {
    const [count,setCount]=useState(0)

    const increment=()=>{
        setCount(count+1)
    }

    const decrement=()=>{
        setCount(count-1)
    }
  return [count,increment,decrement]
}

export default useCustomLogic

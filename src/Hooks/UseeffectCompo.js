import React, { useEffect, useState } from 'react'
import ChildCompo from './ChildCompo'

const UseeffectCompo = () => {

    const[count,setCount]=useState(1)
    const[countar,setCountar]=useState(2)
    const [toggal,setToggal]=useState(true)


//     useEffect(()=>{
//       console.log("call in mounting phase")
//     },[])// mounting phase

// useEffect(()=>{
//     console.log("call when count state is updated")
// },[count,countar])

  return (
    <div>
      {/* <h1>MY COUNTAR IS ... {count} </h1>
      <button onClick={()=>setCount(count+1)}>increment</button>



      <h1>MY SECOND COUNTAR IS ... {countar} </h1>
      <button onClick={()=>setCountar(countar+1)}>incrementBy 2</button> */}


{
    toggal ? <ChildCompo /> : " "
}
<button onClick={()=>setToggal(!toggal)}>SHOW | HIDE</button>

    </div>
  )
}

export default UseeffectCompo

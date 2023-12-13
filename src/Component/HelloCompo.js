import React, { useState } from "react";

const HelloCompo=()=>{
    const [count,setCount]=useState(1)
    return(
        <>
        <h1>HELLO MY VALUE IS = {count}  </h1>
        <button onClick={()=>setCount(count+2)}>increment</button>

        </>
    )
}
export default HelloCompo

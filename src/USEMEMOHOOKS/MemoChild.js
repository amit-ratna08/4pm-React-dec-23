import React, { useMemo, useState } from 'react'

const MemoChild = () => {
    const [count,setCount]=useState(0)
    const [item,setItem]=useState(10)

    // function multicount(){
    //     console.log("multicount call")
    //     return count*3
    // }


    const multicountar=useMemo(()=>{
        console.log("multicount call")
        return count*3
    },[count])


  return (
    <div>
      <h1>USEMEMO HOOKS</h1>
      <h2> Count :- {count} </h2>

          <h1> {multicountar}  </h1>

      <h2> ITEM :- {item} </h2>


      <button onClick={()=>setCount(count+1)}>update count</button>

      <button onClick={()=>setItem(item+5)}>update item</button>
    </div>
  )
}

export default MemoChild

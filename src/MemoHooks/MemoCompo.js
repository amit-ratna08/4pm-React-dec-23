import React, { memo } from 'react'

const MemoCompo = (props) => {
    console.log("MEMO HOOKS CALL")
  return (
    <div>
      <h1>MEMO COUNTAR VALUE IS {props.count} </h1>
      <button onClick={props.handle}>increment</button>
    </div>
  )
}

export default memo(MemoCompo)

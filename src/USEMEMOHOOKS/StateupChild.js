import React from 'react'
  
const StateupChild = (props) => {
    let data="kumar"
  return (
    <div>
      {/* <h1> MY NAME IS  :- {props.name} </h1> */}
      <button onClick={()=>props.alert(data)}>update</button>
    </div>
  )
}

export default StateupChild

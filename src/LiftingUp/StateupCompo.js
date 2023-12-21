import React from 'react'

const StateupCompo = (props) => {
    let lname="xyz"
  return (
    <div>
        <button onClick={()=>props.data(lname)}>alert</button>
    </div>
  )
}

export default StateupCompo

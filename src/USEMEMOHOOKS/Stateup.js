import React from 'react'
import StateupChild from './StateupChild'



let data="amit"


function parentalert(da){
    alert(da)
}
const Stateup = () => {
  return (
    <div>
      <h1>Lifting up state</h1>
  <StateupChild alert={parentalert} />
    </div>
  )
}

export default Stateup

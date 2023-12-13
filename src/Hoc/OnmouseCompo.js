import React from 'react'
import IncrementCountarHoc from './IncrementCountarHoc'
const OnmouseCompo = (props) => {
  return (
    <div>
      <h1>ON MOUSE COMPO  : {props.count} </h1>
      <button onMouseOver={props.handle}>On Mouse btn</button>
    </div>
  )
}

export default IncrementCountarHoc(OnmouseCompo)

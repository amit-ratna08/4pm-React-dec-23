import React from 'react'
import IncrementCountarHoc from './IncrementCountarHoc'
const OnClickCompo = (props) => {
  return (
    <div>
      <h1>ON CLICK  COMPO {props.count} </h1>

      <button onClick={props.handle}>onClick btn</button>
    </div>
  )
}

export default IncrementCountarHoc(OnClickCompo)

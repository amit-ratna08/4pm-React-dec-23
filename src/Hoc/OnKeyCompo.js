import React  from 'react'
import IncrementCountarHoc from './IncrementCountarHoc'
const OnKeyCompo = (props) => {
  return (
    <div>
      <h1>ON KEYCOMPO {props.count} </h1>
      <button onKeyDown={props.handle}>keyDOWN btn</button>
    </div>
  )
}

export default IncrementCountarHoc(OnKeyCompo)

import React from 'react'

const LogicalCompo = (props) => {
    let result= props.car
  return (
    <div>
      <h1>CAR IN MY SHOWROOM</h1>

      {

          result.length>5 &&  <h2>I HAVE {result[2]}  CAR </h2>
      }

      
    </div>
  )
}

export default LogicalCompo

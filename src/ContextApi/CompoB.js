import React, { useContext } from 'react'
import { fname,lname } from '../App'
const CompoB = () => {

  let res=useContext(fname)
  let re=useContext(lname)
  return (
    <div>
      <h1>  MY NAME IS {res} and {re} </h1>

    </div>
  )
}

export default CompoB

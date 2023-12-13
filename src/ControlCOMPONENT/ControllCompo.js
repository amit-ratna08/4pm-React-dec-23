import React, { useState } from 'react'

const ControllCompo = () => {
  const [name,setName]=useState()


  function handle(e){
console.log(e.target.value)

setName(e.target.value)

  }
  return (
    <div>
  <form>
      <label>NAME :</label>
       <input type='text' value={name} onChange={handle}  />
  </form>

    </div>
  )
}

export default ControllCompo

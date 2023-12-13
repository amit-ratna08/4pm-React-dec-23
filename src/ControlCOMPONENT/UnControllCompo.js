import React, { useRef } from 'react'

const UnControllCompo = () => {
const inputref=useRef()


    function handlesubmit(e){
        e.preventDefault()
            console.log(inputref.current.value)

            let res=document.getElementById("inputsecond").value

             console.log(res)
    }
  return (
    <div>
      <form onSubmit={handlesubmit}>
          <label>NAME :</label>
          <input type='text' ref={inputref} />
<br />
<br />
          <input type='text' placeholder='Enter a second name' id='inputsecond' />
          <br/>
          <br/>
          <input type="submit"/>
      </form>
    </div>
  )
}

export default UnControllCompo

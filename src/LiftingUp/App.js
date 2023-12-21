import React from 'react'
import StateupCompo from './StateupCompo'

const App = () => {
    let name="rahul"

    function parentdata(da){
        alert("Welcome to my page"+"   "+da)
    }
  return (
    <div>
      <StateupCompo data={parentdata} />
    </div>
  )
}

export default App

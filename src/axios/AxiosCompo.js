import axios from 'axios'
import React, { useEffect, useState } from 'react'

const AxiosCompo = () => {
    const [userdata,setUserdata]=useState([])

useEffect(function(){
  axios.get("https://jsonplaceholder.typicode.com/users")
  .then((response)=>{
    console.log(response)

    setUserdata(response.data)
  })
},[])


  return (
    <div>
      {
        userdata.map((res)=>{
          return(
            <>
            {res.name}<br />
            </>
          )
        })
      }
    </div>
  )
}

export default AxiosCompo

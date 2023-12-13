import axios from 'axios'
import React, { useEffect, useState } from 'react'
import "../App.css"
const AxiosCompo = () => {

    const[userdata,setUserdata]=useState([])

    useEffect(()=>{
       axios.get("https://jsonplaceholder.typicode.com/users")
       .then((response)=>{
        console.log(response)
        setUserdata(response.data)
       })

    },[])
  return (
    <div>
      {
        userdata.map((data)=>{
            return(
                < div className='para'>
                {data.name} <br />
                </div>
            )
        })
      }
    </div>
  )
}

export default AxiosCompo

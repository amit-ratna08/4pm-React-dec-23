import React from 'react'
import { fname,lname } from '../App'

const CompoC = () => {
  return (
    <div>
      <fname.Consumer>
     {
      (res)=>{
        return(
          <>

          <lname.Consumer>
            {
              (result)=>{
                return(
                  <>
                  <h1>MY NAME IS  {res} and last name is   {result}  </h1>
                </>
               )
              }
            }
          </lname.Consumer>
          
          </>
        )
      }
     }

      </fname.Consumer>
    </div>
  )
}

export default CompoC
 
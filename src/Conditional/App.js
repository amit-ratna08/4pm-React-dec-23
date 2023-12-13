import React from "react";
// import CompoConditional from "./Conditional/CompoConditional";
import LogicalCompo  from "./LogicalCompo";

let arr=['AUDI','MARUTI','BMW',"SWIFT"]
const App=()=>{
    return(
        <>
           {/* <CompoConditional value={true} /> */}

           <LogicalCompo car={arr} />
        </>
    )
}
export  default App
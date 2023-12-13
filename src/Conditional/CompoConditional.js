import React from "react";


const Aptron=()=>{
    return(
        <>
        <h1>HELLO APTRON</h1>
        </>
    )
}

function Welcome(){
    return(
        <>
        <h1>WELCOME TO MY INSTITUTE</h1>
        </>
    )
}


const CompoConditional=(props)=>{
     let result= props.value

    // if(result){
    //     return <Aptron />
    // }
    // else{
    //     return <Welcome />
    // }
    return(
        <>
        {
            result ?<Aptron /> : <Welcome />
        }
        </>
    )
}

// export {Aptron,Welcome}
export default CompoConditional
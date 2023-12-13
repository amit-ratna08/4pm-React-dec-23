import React from 'react'
import Heading from './Heading';
// import HelloCompo from './Component/HelloCompo';
  
// import {Hello,HelloCompo } from './Component/HelloCompo';
// import ClassCompo from './Component/ClassCompo';
// let arr=[1,2,3]
// let obj={
//   name:"abcd"
// }

import './App.css'

let arr=["vhgdxshdjsuhdishdknsk","hdhfkhdksiuweiwje","gjfdtyugsjdhwuewhwj"]
function App() {
  return (
    <div className='head'>

     {/* <HelloCompo  /> */}

     {/* <Hello /> */}
     {/* <ClassCompo data={"aptron"} /> */}


<Heading  value={arr[0]} />
<Heading  value={arr[1]} />
<Heading  value={arr[2]} />

    </div>
  );
}

export default App;

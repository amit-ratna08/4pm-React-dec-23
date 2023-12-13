import React, { Component } from 'react'


// let name="rahul"
 class ClassCompo extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         name:"rahul",

      }
    }

    fundata=()=>{
        this.setState({
            name:"AMAN"
        })
    }
    
// updatedata(){
//   // name="amam"

//   // console.log(name)
// }

  render() {
    return (
      <div>
        {/* <h1>HELLO CLASS COMPONENT {this.props.data} </h1> */}

              {/* <h1>{name}</h1> */}
              {/* <button onClick={this.updatedata}>update</button> */}




        {/* <h1>MY NAME  IS = {this.state.name} </h1> */}
        {/* <button onClick={this.fundata}>update name</button> */}

      </div>
    )
  }
}

export default ClassCompo

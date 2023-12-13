import { Component } from 'react';
import NormalCompo from './NormalCompo';
import PureCompo from './PureCompo';
class App extends Component{
    constructor(props){
        super()
        this.state={
            count:1
        }
    }

    handlechange=()=>{
        this.setState({
            count:this.state.count
        })
    }
    render(){
        return(
            <>
            <h1>MY COUNTAR VALUE IS {this.state.count}  </h1>
            <button onClick={this.handlechange}>increment</button>


            <NormalCompo countar={this.state.count} />
            <PureCompo  countar={this.state.count}/>
            </>
        )
    }
}
export default App
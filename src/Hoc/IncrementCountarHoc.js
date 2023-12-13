import React, { Component } from 'react'

const IncrementCountarHoc = (Compo) => {
    class AddCountar extends Component {
        constructor(props) {
            super(props)

            this.state = {
                count: 1
            }
        }
        handlechange=()=>{
            this.setState({
                count:this.state.count+1
            })
        }
        render() {
            return (
                <>
                  <Compo count={this.state.count} handle={this.handlechange} />

                </>
            )
        }

    }
    return AddCountar
}

export default IncrementCountarHoc

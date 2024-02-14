import React, { Component } from 'react'

class Message extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         message:'welcome to visitor'
      }
    }
    changeMessage(){
        this.setState({
            message:'thank you for subscribing'
        })
    }
  render() {
    return (
      <div>
        <h1 align='center' >
            {this.state.message}
        </h1>
        <center>
       <button onClick={()=>this.changeMessage()}>Subscribe</button>
       </center>
      </div>
    )
  }
}

export default Message
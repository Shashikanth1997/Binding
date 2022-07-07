import React, { Component } from 'react'

export class App extends Component { 
  constructor(){
    super()
    this.state = {
      name:"shashi",
    }
  } 
  clickHandler(){ 
    
    this.setState({
      name:"shashi kanth",
    })
    console.log(this)
  }
  render() {
    return (
      <div> 
        <div>{this.state.name}</div>
        <button onClick={this.clickHandler.bind(this)}>click</button>
      </div>
    )
  }
}

export default App
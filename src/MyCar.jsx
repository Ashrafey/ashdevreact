//rcc - to create class based component 

import React, { Component } from 'react'

export default class MyCar extends Component {


constructor(){
    super()
    this.state={
        carName :"benz"
    }
}



  render() {
    return (
      <div style={{minHeight:'50vh'}} className='bg-warning p-5 rounded'>
        <input onChange={e =>this.setState({...this.state, carName:e.target.value})} type="text" className='form-control w-50' placeholder='enter your car name' />
        <h1>MyCar is  <span>{this.state.carName}</span></h1>
      </div>
    )
  }
}

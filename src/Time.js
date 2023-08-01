import React, { Component } from 'react'
import './Time.css'
import plussearch from './plussearch.png'
export default class Time extends Component {
    constructor(props)
    {
        super(props);
        this.state={
            date:new Date()
        };
    }
    componentDidMount(){
      console.log("mounting..")
    setInterval(() =>{this.setState({date:new Date()})},1000);
    }  
    componentDidUpdate()
    {
      if(this.state.date.toLocaleTimeString()==="12:58:00 PM"){
      alert("Take a Break")
      }
    }
  render() {
    return (
      <div className='back'>
        <div className='con'>
          <div style={{display:'inline-flex'}}>
            <h1 >Digital Clock</h1></div>
            <img src={plussearch} style={{width:'20px',height:'30px',marginLeft:'90px',marginTop:'50px'}} alt='hi'/>
            <h2 className='hi'>{this.state.date.toLocaleTimeString()}</h2>   
        </div>
      </div>
    );
  }
}

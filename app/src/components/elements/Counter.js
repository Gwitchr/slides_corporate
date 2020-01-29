import React, {Component} from 'react';
import {Col} from 'reactstrap';

export default class Counter extends Component{
  constructor(props){
    super(props)
    this.state={
      current:0
    }
  }
  componentDidMount=()=>{
    const {current} = this.state
    // let t = 20
    // console.log(t)
    if(current===0){
      this.restart()
    }
  }
  componentDidUpdate=(prevProps)=>{
    const {restart} = this.props
    const {goal,last=5} = this.props
    const {current} = this.state
    if(current===goal){
      clearInterval(this.intervalSlow)
    }
    if(current===(goal-last)){
      clearInterval(this.interval)
      this.intervalSlow = setInterval(()=>{
        this.addCounter(0)
      },400)
    }
    if(!prevProps.restart&&restart){
      this.restart()
    }
  }
  componentWillUnmount=()=>{
    clearInterval(this.interval)
    clearInterval(this.intervalSlow)
  }
  restart=()=>{
    const {timeOut=3000,time=5000,goal,last=5} = this.props
    let t = time/(goal-last)
    this.setState({
      current:0
    })
    clearInterval(this.interval)
    setTimeout(()=>{
      this.interval = setInterval(()=>{
        this.addCounter(last)
      },t)
    },timeOut)
  }
  addCounter=(n)=>{
    const {goal} = this.props
    const {current} = this.state
    if(current!==(goal-n)){
      let next = current
      next = next+1
      this.setState({
        current:next
      })
    }
  }
  render(){
    const {primary,pref='',postf='',className} = this.props
    const {current} = this.state
    return(
    <Col className={`${className} d-flex flex-column justify-content-between`}>
         <h5 className="d-flex flex-column flex-fill justify-content-center">
           {primary}
         </h5>
        <h2 className="secondary text-bold">
            {`${pref} ${current} ${postf}`}
        </h2>
    </Col>
    )
  }
}

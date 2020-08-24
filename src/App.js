/*import React,{Component} from 'react';
export default class App extends Component{
  constructor(props){
    super(props)
    this.state={n:1}
  }
  Add=()=>{
    let n=this.state.n+1;
    this.setState({n})
  }
  Reduce=()=>{
    let n=this.state.n-1;
    console.log(n)
   if(n===0){
     n=1
   }
    this.setState({n})
  }
  render(){
    return (
      <div>
        <button onClick={this.Add}>+</button>
        <b>{this.state.n}</b>
        <button  onClick={this.Reduce} disabled={this.state.n==1}>-</button>
      </div>
    )
  }
}
*/
import React, { Component } from 'react'

export default class App extends Component {
  constructor(props){
    super(props)
    this.state={curItem:"暂无"}
  }
  items=["吃饭","睡觉","蹦迪","打豆豆"]
  change(arg){
    this.setState({
      curItem:arg
    })
    
  }
  showItem=()=>{
    var  arr=[];
    this.items.forEach((item,i) => {
      arr.push(<p  key={i}><button onClick={this.change.bind(this,item)}>{item}</button><br /></p>)
    });
    return arr;
  }
  render() {
    return (
      <div> 
        <h3>今日代办事项：{this.state.curItem}</h3>
         {this.showItem()} 
      </div>
    )
  }
}

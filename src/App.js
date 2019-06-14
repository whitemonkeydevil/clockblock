import React,{Component} from 'react';
import './App.css';

class App extends Component {
  constructor(props){
    super(props);
    this.state={
      date: new Date()
    }
  }

componentDidMount() {
  this.timer = setInterval(()=>{
    this.timer=this.setState(
      {
        date : new Date()
      }
    )
  }
    ,1000)
}

componentWillUnmount() {
clearInterval(this.timer)
} 
  render() {
    return (
    <div>
      <h1>{this.state.date.toLocaleTimeString()}</h1>
       </div>
    )
  }
}


export default App;

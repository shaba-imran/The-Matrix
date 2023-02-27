import { Component } from 'react';
import './Clock.css';

class Clock extends Component {
  constructor(props){
    super(props);
    this.state = {
      now: new Date()
    };
  }
  
  componentDidMount() {
    this.interval = setInterval(this.updateNow.bind(this), 1000);
  }

  componentWillUnmount() {
    clearInterval(this.interval);
  }
  
  updateNow(){
    this.setState(Object.assign({}, this.state, {now: new Date()}));
  }
  
  formatClockNum(clock_num){
    return clock_num.toString().padStart(2, '0');
  }
  
  render(){
    return (
      <div className='f1 pt5 pb3 dark-green clock'>
      	{this.formatClockNum(this.state.now.getHours())}: {this.formatClockNum(this.state.now.getMinutes())}: {this.formatClockNum(this.state.now.getSeconds())}
      </div>
    );
  }
}

export default Clock;
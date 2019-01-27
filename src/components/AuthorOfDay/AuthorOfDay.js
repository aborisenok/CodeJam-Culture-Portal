import React, {Component} from 'react';
import './AuthorOfDay.css';
import data from '../../data/people';

class AuthorOfDay extends Component {
  constructor() {
    super();
    this.state = {
      currentDay: '',
      authorOfDayID: '',
      interval: ''
    };
    this.setCurrentDay = this.setCurrentDay.bind(this);
    this.componentDidMount = this.componentDidMount.bind(this);
  }

  componentWillMount() {
      this.setCurrentDay();
  }

  componentDidMount() {
   const intervalID = setInterval(this.setCurrentDay(), 3600);
   this.setState({
     interval: intervalID
   })
  }

  componentWillUnmount() {
    clearInterval(this.state.interval)
  }

  setCurrentDay() {
    const dayNumber = new Date().getDay();
    this.setState((prevState) => {
      if(prevState.currentDay !== dayNumber) {
        return {
          currentDay: dayNumber,
          authorOfDayID: dayNumber % data.length
        }
      }
    })
  }

  render() {
    return (
      <div className='authorOfDay'>
        <h2>Автор дня</h2>
        <img src={data[this.state.authorOfDayID].avaSrc} alt="author"/>
        <h3>{data[this.state.authorOfDayID].name}</h3>
      </div>
    )
  }
}

export default AuthorOfDay;

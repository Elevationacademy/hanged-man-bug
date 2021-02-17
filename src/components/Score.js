// import './Score.css';

import { Component } from "react";

class Score extends Component{
  render(){
    return (
      <div> {props.value} </div>
    );
  }
}

export default Score;

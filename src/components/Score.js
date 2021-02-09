// import './Score.css';

import { Component } from "react";

class Score extends Component{
  render(){
    return (
      <div> {this.props.value} </div>
    );
  }
}

export default Score;

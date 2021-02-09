// import './Solution.css';

import { Component } from "react";

class Solution extends Component {

  getLetter(char){
    let letter = "_"
    if (this.props.word.includes(char) && this.props.status[char.toLocaleUpperCase()]) {
      letter = char
    } 
    return <span> {letter} </span>;
  }

  getText() {
    return this.props.word.split("").map(char => this.getLetter(char))
}

render(){
  return (
    <div>
      {this.getText()}
      <div>Hint:
          <span>{this.props.hint}</span>
      </div>
    </div>
  );
}
}

export default Solution;

import './Letter.css';
import { Component } from 'react';

class Letter extends Component {

  onLetterClick = () => {
    this.props.updateLetter(this.props.text)
  }

  getClassName = () => {
    return this.props.isAvailable ? "letter" : "letter disabled"
  }

  render() {
    return <span
      className={this.getClassName()}
      onClick={this.onLetterClick()}>
      {this.props.text}
    </span>
  }

}

export default Letter;





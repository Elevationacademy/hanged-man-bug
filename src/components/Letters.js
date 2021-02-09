import { Component } from "react";
import Letter from "./Letters.js";

class Letters extends Component {

  getLetter(letter) {
    let isAvailable = !Boolean(this.props.status[letter])
    return <Letter
      text={letter}
      isAvailable={isAvailable}
      updateLetter={this.props.updateLetter}>
    </Letter>
  }

  render() {
    const lettersAZ = Object.keys(this.props.status)
    return (
      <div>Avialable Letters
        <div>
          {lettersAZ.map(letter => this.getLetter(letter))}
        </div>

      </div>
    );
  }
}

export default Letters;

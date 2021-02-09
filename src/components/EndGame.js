import { Component } from 'react';

class EndGame extends Component {

  getEndGameMessage = () => {
    let message = "Congratulations! You Won!"
    if (!this.props.didWin){
      message = "Game Over. The word was: " + this.props.solution
    }
    return message
  }

  render() {
    return this.props.isGameOver ? <div>
      {this.getEndGameMessage()}
    </div> : null
  }

}

export default EndGame;





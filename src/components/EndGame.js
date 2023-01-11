import React from 'react'

const EndGame = ({didWin, isGameOver, solution}) => {

  const getEndGameMessage = () => {
    let message = "Congratulations! You Won!"
    if (!didWin){
      message = "Game Over. The word was: " + solution
    }
    return message
  }

  return isGameOver ? <div>
    {getEndGameMessage()}
  </div> : null

}

export default EndGame

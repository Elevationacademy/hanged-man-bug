import React from 'react'
import Letter from "./Letter.js";

const Letters = ({ status, updateLetter }) => {

  const getLetter = (letter) => {
    let isAvailable = !Boolean(status.letter)
    return <Letter key={letter} text={letter} isAvailable={isAvailable} updateLetter={updateLetter} />
  }

  const lettersAZ = Object.keys(status)

  return (
    <div> Avialable Letters
      <div>
        {lettersAZ.map(getLetter)}
      </div>
    </div>
  );
}

export default Letters

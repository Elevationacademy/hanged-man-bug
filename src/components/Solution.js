// import './Solution.css';
import React from 'react';

const Solution = ({word, status, hint}) => {

    const getLetter = (char) => {
      let letter = "_"
      if (word.includes(char) && status[char.toLocaleUpperCase()]) {
        letter = char
      } 
      return <span key={char}>{letter}</span>
    }
  
    return (
      <div>
        {[...word].map(getLetter)}
        <div>Hint:
            <span>{hint}</span>
        </div>
      </div>
    );
}

export default Solution

import './Letter.css';
import React, { useCallback } from 'react';

const Letter = ({ text, isAvailable, updateLetter }) => {

  const onLetterClick = useCallback(() => {
    updateLetter(text)
  }, [updateLetter, text])

  const getClassName = () => {
    return isAvailable ? "letter" : "letter disabled"
  }

  return <span className={getClassName()} onClick={onLetterClick}>
    {text}
  </span>
}

export default Letter

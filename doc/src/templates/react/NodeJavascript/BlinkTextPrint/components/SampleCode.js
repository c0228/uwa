import React, { useState, useEffect } from 'react';
import './styles.css';
// 
export const PrintTextWithBlink = ({ text, blink }) =>{
  const words = text.split(' ');
  const [index, setIndex] = useState(0);
  const [currentWord, setCurrentWord] = useState();
  const [blinkCursor, setBlinkCursor] = useState('blink-cursor');

  const addOn = () => {
    if (index <= words.length) {
      setCurrentWord(words.slice(0, index).join(' '));
      setIndex(index + 1);
    } else {
      setBlinkCursor('');
    }
  };
  useEffect(() => {
    setTimeout(() => addOn(), blink);
  }, [index]);

  return (
    <div>
      {currentWord}
      <span className={blinkCursor}></span>
    </div>
  );
};

const SampleCode = () =>{
    return (<>
     <PrintTextWithBlink text="Hello, How are you? I hope you are doing fine." blink={500} />
    </>);
   };
  
export default SampleCode;
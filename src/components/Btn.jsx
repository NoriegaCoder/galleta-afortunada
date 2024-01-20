import React from 'react';
import phrases from "../utils/phrases.json";
import randomindex from "../services/randomindex.js";
import bgArray from '../utils/bgArray.json';

const Btn = ({setQuote, setBgApp}) => {

  
  const handleBtn = () =>{
      const sentence = randomindex(phrases);
        setQuote(sentence);
    }
    

  return (
    <button onClick={handleBtn}>Ver otro</button>
  )
} 

export default Btn
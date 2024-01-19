import React from 'react';
import phrases from "../utils/phrases.json";
import randomindex from "../services/randomindex.js";

const Btn = ({setQuote}) => {

    const sentence = randomindex(phrases);
    
    const handleBtn = () =>{
        setQuote(sentence);
    }
    

  return (
    <button onClick={handleBtn}>Ver otro</button>
  )
} 

export default Btn
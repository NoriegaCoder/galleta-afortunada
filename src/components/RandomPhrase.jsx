import React from 'react';

const RandomPhrase = ({quote}, {imgs}) => {

    const {author, phrase} = quote

  return (
    <div>
        <p>{phrase}</p>
        <p>fuente: {author}</p>
    </div>
  )
}

export default RandomPhrase;
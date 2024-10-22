import React from 'react'

function TernaryOperators() {

    let randomNum = Math.floor(Math.random()* 5 +1);

    let luckyNum = 3;

  return (
    <>
    <h1>Find your Lucky: {randomNum}</h1>

    {randomNum === luckyNum ? 

    <img src='data:image/jpeg;base64,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'/> : <h1>You have a bad luck</h1>
    }
    </>
  )
}

export default TernaryOperators
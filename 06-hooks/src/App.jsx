import React from 'react'
import { useState } from 'react'

const App = () => {

  let color = 'Blue'
  function changeA(){
    console.log(color);
    color = 'red'
    console.log(color)
  }

  return (
    <>
      <h1>My favourate color is {color}</h1>
      <button onClick={changeA}>change value</button>
    </>
  )
}

export default App

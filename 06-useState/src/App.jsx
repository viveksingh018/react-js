import React, { useState } from 'react'

const App = () => {

  const [num, setNum] = useState(2)

  return (
    <div>
      <h1>{num}</h1>
      <button onClick={() => {
        setNum(num + 1)
      }}>increase</button>
      <button onClick={() => {
        setNum(num - 1)
      }
      }>decrease</button>
      <button onClick={() => {
        setNum(num + 5)
      }}>Jump by 5</button>
    </div>
  )
}

export default App

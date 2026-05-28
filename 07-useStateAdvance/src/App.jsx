import React, { use, useState } from 'react'

const App = () => {

  const [num, setNum] = useState({user: 'Vivek', age: 24})

  const btnClicked = () => {
    setNum(prev => ({...prev, user: 'Avantika', age:33}))
  }
  

  return (
    <div>import React, { use, useState } from 'react'

const App = () => {

  const [num, setNum] = useState({user: 'Vivek', age: 24})

  const btnClicked = () => {
    setNum(prev => ({...prev, height: '33cm', user: 'Avantika', age:33}))
  }
  

  return (
    <div>
      <h1>{num.user} {num.age} {num.height}</h1>
      <button onClick={btnClicked}>Click</button>
    </div>
  )
}

export default App

      <h1>{num.user} {num.age} {num.height}</h1>
      <button onClick={btnClicked}>Click</button>
    </div>
  )
}

export default App

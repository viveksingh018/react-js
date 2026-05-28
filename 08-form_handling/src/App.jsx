import React from 'react'

const App = () => {

  const submitHandler = (e) => {
    e.preventDefault()
    console.log("fomr submitted")
  }

  return (
    <div>
      <form onSubmit={(e) => {
        submitHandler(e)
      }}>
        <input type="text" placeholder='Enter Your Nmae' />
        <button>Submit</button>
      </form>
    </div>
  )
}

export default App

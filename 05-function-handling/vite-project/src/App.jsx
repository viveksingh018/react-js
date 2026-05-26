import React from 'react'

const App = () => {
  const userTyping = (val) => {
    console.log(val)
  }

  return (
    <div>
      {/* <input onChange={(elem) => {
        userTyping(elem.target.value)
      }} type="text" placeholder='Enter Name' className='bg-amber-100 m-10 p-5' />

      <div
        onMouseMove={(elem) => {
          console.log(elem.clientX)
        }}
        className="box h-50 w-50 bg-blue-300"
      >

      </div> */}
      <div className='h-full-max w-full bg-amber-500'>page 1</div>
    </div>
  )
}

export default App

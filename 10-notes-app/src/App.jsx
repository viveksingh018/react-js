import React from 'react'
import { useState } from 'react'

const App = () => {

  const [title, setTitle] = useState('')
  const [details, setDetails] = useState('')

  const [task, setTask] = useState([])

  const submitHandler = (e) => {
    e.preventDefault()

    const copyTask = [...task]

    copyTask.push({ title, details })

    setTask(copyTask)
    setTitle('')
    setDetails('')
  }

  const deleteNote = (idx) => {
    const copyTask = [...task]
    copyTask.splice(idx,1)

    setTask(copyTask)
  }

  return (
    <div className='min-h-screen lg:flex bg-black text-white'>

      <form
        onSubmit={(e) => {
          submitHandler(e)
        }}

        className='flex lg:w-1/2 gap-4 flex-col items-start  p-10'>
        <h1 className='text-3xl font-bold'>Add Notes</h1>

        <input
          type="text"
          placeholder='Enter Notes Heading'
          className='px-5 w-full font-medium py-2 outline-none border-2 rounded'
          value={title}
          onChange={(e) => {
            setTitle(e.target.value)
          }}
        />

        <textarea
          type="text"
          placeholder='Write Details'
          className='px-5 h-32 items-start font-medium py-2 w-full outline-none border-2 rounded'
          value={details}
          onChange={(e) => {
            setDetails(e.target.value)
          }}
        />

        <button
          type='submit'
          className='bg-white active:scale-95 rounded-xl w-full outline-none font-medium text-black px-5 py-2'
        >
          Add Notes
        </button>

      </form>

      <div className='lg:w-1/2 lg:border-l-2 p-10'>

        <h1 className='text-4xl font-bold'>Recent notes</h1>

        <div className='flex flex-wrap items-start justify-start gap-5 mt-5 h-[calc(100%-1.25rem)] overflow-auto'>
          {
            task.map(function (elem, idx) {
              return <div key={idx} className="flex justify-between flex-col items-start h-52 w-40 rounded-xl text-black p-4 bg-[url('data:image/png;base64,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')]">
                <div>
                  <h3 className='leading-tight text-xl font-bold mt-2'>{elem.title}</h3>
                  <p className='mt-4 leading-tight font-medium text-gray-500'>{elem.details}</p>
                </div>
                <button
                  onClick={()=>{
                    deleteNote(idx)
                  }}
                  className='w-full font-bold cursor-pointer active:scale-95 bg-red-600 text-white text-xs p-1 rounded'
                >
                  delete
                </button>
              </div>
            })
          }
        </div>
      </div>
    </div>
  )
}

export default App

import React, { useState } from 'react'

const NotesApp = () => {

  const [title, setTitle] = useState('')
  const [details, setDetails] = useState('')
  const [task, setTask] = useState([])

  function formHandler(e) {
    e.preventDefault()

    if (title && details) {//checkin if inputs are not empty
      setTask((prev) => ([...prev, { title: title, details: details }]))

      setTitle('')
      setDetails('')
    } else {
      alert("Please fill both input fields.")
    }
  }

  function deleteNote(id) {
    let copyTask = [...task]
    copyTask.splice(id, 1)

    setTask(copyTask)
  }
  return (
    <div className='h-screen lg:flex bg-black text-white '>
      <form onSubmit={(e) => { formHandler(e) }} className='lg:w-1/2 flex flex-col items-start gap-4 p-10 '>

        <h1 className='text-3xl font-bold'>Add Notes</h1>

        <input
          className=' w-full font-medium border-2  outline-none rounded py-2 px-5'
          type="text"
          placeholder='Enter Notes Heading'
          value={title}
          onChange={(e) => {
            setTitle(e.target.value)
          }} />

        <textarea
          className='border-2 h-32 font-medium w-full outline-none rounded py-2 px-5'
          name=""
          placeholder='Enter your notes here ...'
          id=""
          value={details}
          onChange={(e) => {
            setDetails(e.target.value)
          }}></textarea>

        <button id='add' className='cursor-pointer w-full active:bg-green-300 bg-green-400 text-black font-medium outline-none border-2 rounded py-2 px-5'>
          Add Note
        </button>
      </form>


      <div className=" lg:w-1/2 p-10 lg:border-l-2 bg-black ">
        <h1 className='text-3xl font-bold'>Recent Notes</h1>

        <div className="grid gap-4 mt-5 h-[90%] overflow-auto 
                grid-cols-[repeat(auto-fit,minmax(12rem,1fr))]">
          {
            task.map((elem, idx) => {
              return <div key={idx} className="flex flex-col justify-between items-start relative h-60  px-4 py-2 rounded-2xl text-black bg-white">
                <div>
                  <h3 className='leading-tight text-xl font-bold'>{elem.title}</h3>
                  <p className='mt-2 leading-tight text-xs font-medium text-gray-700'>{elem.details}</p>
                </div>
                <button onClick={() => deleteNote(idx)} className='cursor-pointer w-full bg-red-500 rounded font-bold text-xs py-1 text-white'>Delete</button>
              </div>
            })
          }
        </div>
      </div>
    </div>
  )
}

export default NotesApp







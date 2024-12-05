import React from 'react'

const TaskListNumber = () => {
  return (
    <div className='flex mt-10 justify-between gap-5 screen'>
        <div className="w-[45%] py-9 px-6 bg-blue-400 rounded-xl text-white">
            <h2 className='text-3xl font-semibold'>0</h2>
            <h3 className='text-xl font-medium'>New Task</h3>
        </div>
        <div className="w-[45%] py-7 px-5 bg-green-400 rounded-xl text-white">
            <h2 className='text-3xl font-semibold'>0</h2>
            <h3 className='text-xl font-medium'>New Task</h3>
        </div>
        <div className="w-[45%] py-9 px-6 bg-yellow-400 rounded-xl text-white">
            <h2 className='text-3xl font-semibold'>0</h2>
            <h3 className='text-xl font-medium'>New Task</h3>
        </div>
        <div className="w-[45%] py-9 px-6 bg-orange-600 rounded-xl text-white">
            <h2 className='text-3xl font-semibold'>0</h2>
            <h3 className='text-xl font-medium'>New Task</h3>
        </div>
    </div>
  )
}

export default TaskListNumber
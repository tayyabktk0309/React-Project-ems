import React from 'react'
import Header from '../partials/Header'
import TaskListNumber from '../partials/TaskListNumber'
import Tasklist from '../TaskList/Tasklist'

const EmployeeDashBoard = () => {
  return (
    <div className='bg-[#1c1c1c] h-screen p-10'>
        <Header/>
        <TaskListNumber/>
        <Tasklist/>
    </div>
  )
}

export default EmployeeDashBoard
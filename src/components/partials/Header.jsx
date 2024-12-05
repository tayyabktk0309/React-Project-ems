import React from 'react'

const Header = () => {
  return (
    <div className='flex justify-between p-2'>
        <div className='flex flex-col'>
            <span className='text-3xl text-white font-medium'>Hello!</span> 
        <span className='text-orange-500 text-[37px] pl-16 font-bold'>Tayyab Khattak 👋</span>
        </div>
        <div className='flex items-center justify-center'>
            <button className='py-2 px-5 rounded-full bg-red-600 text-white hover:bg-red-700 duration-300'>LogOut</button>
        </div>
    </div>
  )
}

export default Header
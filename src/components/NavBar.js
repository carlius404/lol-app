import React from 'react'
import Auth from './Auth'

function NavBar() {
  return (
    <div className="flex flex-row items-center justify-between p-1 bg-slate-800">
        <div className='w-12 h-12 bg-indigo-500 rounded-full'></div>
        <Auth></Auth>
    </div>
    
  )
}

export default NavBar
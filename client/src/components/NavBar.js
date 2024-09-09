import React from 'react'
import UserAuth from "./auth/UserAuth"

function NavBar() {
  return (
    <div className="flex flex-row items-center justify-between p-1 bg-slate-800">
        <div className='w-12 h-12 bg-indigo-500 rounded-full'></div>
        <UserAuth></UserAuth>
    </div>
    
  )
}

export default NavBar
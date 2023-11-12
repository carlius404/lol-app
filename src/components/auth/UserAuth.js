import React, { useContext, useState } from 'react'
import SignUp from './SignUp'
import LogIn from './LogIn'
import { AuthContext } from './AuthProvider'

function UserAuth() {
    const [logged,setLogged]=useState(false)
    const [openSignup, setOpenSignup]=useState(false)
    const [openLogin, setOpenLogin]=useState(false)
    const {currentUser,logout}=useContext(AuthContext)
    return (
    <>
    <div>
        {!currentUser && 
        <div className="flex flex-row items-center gap-2">
        <button onClick={()=>setOpenLogin(true)} className="px-2 font-bold rounded-md text-slate-200 hover:text-green-400">Log In</button>
        <button onClick={()=>setOpenSignup(true)} className="px-2 font-bold rounded-md bg-indigo-600 text-slate-200 p-1 hover:bg-indigo-700 hover:shadow-md hover:shadow-black">Sign Up</button>
        </div>
        }
        {currentUser && 
        <div className="flex flex-row items-center gap-2">
            <a className='text-lg font-bold text-slate-200'>{currentUser.email}</a>
            <button onClick={()=>logout()} className="px-2 font-bold border-2 rounded-md border-slate-400 text-slate-200 hover:text-red-400 hover:border-red-400">Log Out</button>
        </div>
        }
    </div>
    {openSignup && <SignUp setOpenSignup={setOpenSignup}></SignUp>}
    {openLogin && <LogIn setOpenLogin={setOpenLogin}></LogIn>}
    </>
    )
}

export default UserAuth
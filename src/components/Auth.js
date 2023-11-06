import React, { useState } from 'react'
import Signup from './Signup'

function Auth() {
    const [logged,setLogged]=useState(false)
    const [openSignup, setOpenSignup]=useState(false)
    return (
    <>
    <div>
        {!logged && <button onClick={()=>setOpenSignup("login")} className="px-2 font-bold border-2 rounded-md border-slate-400 text-slate-200 hover:text-green-300 hover:border-green-300">Log In</button>}
        {logged && 
        <div className="flex flex-row items-center gap-2">
            <a className='text-lg font-bold text-slate-200'>username</a>
            <button onClick={()=>setOpenSignup("signup")} className="px-2 font-bold border-2 rounded-md border-slate-400 text-slate-200 hover:text-red-400 hover:border-red-400">Log Out</button>
        </div>
        }
    </div>
    {openSignup && <Signup value={[openSignup, setOpenSignup]}></Signup>}
    </>
    )
}

export default Auth
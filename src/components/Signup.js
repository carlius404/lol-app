import React from 'react'
import ReactDom from 'react-dom'
function Signup({value}) {
    const [openSignup, setOpenSignup]=value
    const STYLE={
        position:"fixed",
        top:"50%",
        left:"50%",
        transform:"translate(-50%,-50%)",
    }
    const OVERLAY_STYLE={
        position:"fixed",
        top:0,
        left:0,
        right:0,
        bottom:0,
        backgroundColor:"rgba(0,0,0,.7)",
    }
    
    const FormField=({label,type=""})=>{
        return(
            <div className="flex flex-col gap-1">
                <label className="text-xl text-slate-300">{label}</label>
                <input type={type} className="h-10 p-2 border-2 rounded-md bg-slate-700 border-slate-600 w-80 focus:outline-none focus:border-slate-400"></input>
            </div>
        )
    }
    return ReactDom.createPortal(
        <div style={OVERLAY_STYLE}>
            <div className="flex flex-col gap-6 p-3 border-2 rounded-md border-slate-500 bg-slate-800 text-slate-200" style={STYLE}>
                {openSignup=="login" && <a className="text-4xl font-bold">Log In</a>}
                {openSignup=="signup" && <a className="text-4xl font-bold">Sign Up</a>}
                <form className="flex flex-col gap-2 bg-slate-800">
                    <FormField label={"username"}></FormField>
                    <FormField label={"email"}></FormField>
                    <FormField label={"password"} type={"password"}></FormField>
                    <FormField label={"password confirmation"} type={"password"}></FormField>
                    {openSignup=="signup" && <button className="h-10 mt-4 bg-indigo-500 rounded-md hover:bg-indigo-600">Sign Up</button>}
                    {openSignup=="login" && <button className="h-10 mt-4 bg-indigo-500 rounded-md hover:bg-indigo-600">Log In</button>}
                </form>
            </div>
        </div>,
        document.getElementById("portal")
    )
}

export default Signup
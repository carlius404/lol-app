import React, { useContext, useRef, useState } from 'react'
import ReactDom from 'react-dom'
import { AuthContext} from "./AuthProvider"
import { Link, useNavigate } from "react-router-dom"

function LogIn(){
    const [loading, setLoading]=useState(false)
    const [allert, setAllert]=useState({})
    const navigate = useNavigate()
    const {login}=useContext(AuthContext)
    const emailRef=useRef()
    const usernameRef=useRef()
    const pwRef=useRef()
    const confirmPwRef=useRef()
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
    
    
    async function handleSubmit(event){
        event.preventDefault()

        if(pwRef.current.value=="" || usernameRef.current.value=="" || emailRef.current.value==""){
            setAllert({text:"Fill all the fields",type:"bad"})
            return
        }

        
        try {   
            setAllert({text:"",type:""})
            setLoading(true)
            await login(emailRef.current.value, pwRef.current.value)
            navigate("/")
          } catch(error) {
            setAllert({text:error.message.replace("Firebase: ","").split("(")[0],type:"bad"})
          }
        
        setLoading(false)
        
        
    }

    const FormField=({label,reference,type=""})=>{
        return(
            <div className="flex flex-col gap-1">
                <label className="text-xl text-slate-300">{label}</label>
                <input ref={reference} type={type} className="h-10 p-2 border-2 rounded-md bg-slate-700 border-slate-600 w-80 focus:outline-none focus:border-slate-400"></input>
            </div>
        )
    }
    const Allert=()=>{
        return(
            <>
            {allert.type=="bad" && <a className="h-10 px-2 pt-1 text-lg text-red-600 bg-red-700 border-2 border-red-800 rounded-md bg-opacity-30">{allert.text}</a>}
            </>
        )
    }
    return ReactDom.createPortal(
        <div style={OVERLAY_STYLE}>
            <div className="flex flex-col gap-6 p-3 border-2 rounded-md border-slate-500 bg-slate-800 text-slate-200" style={STYLE}>
                <a className="text-4xl font-bold">Log In</a>
                <Allert></Allert>
                <form onSubmit={handleSubmit} className="flex flex-col gap-2 bg-slate-800">
                    <FormField reference={usernameRef} label={"username"}></FormField>
                    <FormField reference={emailRef} label={"email"}></FormField>
                    <FormField reference={pwRef} label={"password"} type={"password"}></FormField>
                    <button disabled={loading}  className="h-10 mt-4 bg-indigo-500 rounded-md hover:bg-indigo-600">Log In</button>
                </form>
                <Link to="/reset-password"  className="text-red-400">Forgot password?</Link>
                <Link to="/signup" className="text-indigo-500">Need an account?</Link>
            </div>
        </div>,
        document.getElementById("portal")
    )
}

export default LogIn
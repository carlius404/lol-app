import React, { useContext, useEffect, useRef, useState } from 'react'
import { AuthContext } from '../contexts/AuthProvider'
import SortRes from '../results/SortRes'

function NewFactor() {
    const [allert,setAllert]=useState({})
    const [formula, setFormula]=useState("")
    const {currentUser,refresh}=useContext(AuthContext)
    const inputRef=useRef()
    //var autoComplete=[
    //    "hp",
    //    "hpperlevel",
    //    "mp",
    //    "mpperlevel",
    //    "movespeed",
    //    "armor",
    //    "armorperlevel",
    //    "spellblock",
    //    "spellblockperlevel",
    //    "attackrange",
    //    "hpregen",
    //    "hpregenperlevel",
    //    "mpregen",
    //    "mpregenperlevel",
    //    "crit",
    //    "critperlevel",
    //    "attackdamage",
    //    "attackdamageperlevel",
    //    "attackspeedperlevel",
    //    "attackspeed"
    //  ]
    //autoComplete=autoComplete.concat(Object.keys(importedFactors))
    //autoComplete=autoComplete.map((factor)=>{
    //    var a={id:factor, display:factor}
    //    return a
    //})
    
    const saveFactor=async ()=>{
        const formula=inputRef.current.value
        var factorName=formula.split("=")[0].replace(" ","")
        const tag= formula.includes(">") || formula.includes("<")
        const  newFactorOpts={
            method:"POST",
            headers: {'Content-Type': 'application/json'},
            body:JSON.stringify({"name":factorName, "formula":formula, "creator":"prova", "tag":tag})}
        
        fetch("http://localhost:5000/api/factor",newFactorOpts).then((res)=>res.json().then((factorId)=>{
            console.log(res)
            const pushFactorOpts={
                method:"PUT"}
            fetch(`http://localhost:5000/api/user/${currentUser.uid}/factor/${factorId}`,pushFactorOpts).then(()=>{refresh(currentUser.uid)})
        }))

        
        
    }
    const Allert=()=>{
        return(
            <>
            {allert.type=="bad" && <a className="h-10 px-2 pt-1 text-lg text-red-600 bg-red-700 border-2 border-red-800 rounded-md bg-opacity-30">{allert.text}</a>}
            </>
        )
    }
    return (
        <div className="flex flex-row">
            <div className="p-2 text-xl rounded-md bg-slate-800 text-slate-400 grow">
                    <div>
                        <input onChange={()=>{setFormula(inputRef.current.value)}} ref={inputRef}  className="rounded-md bg-slate-700 h-[250px] w-full resize-none outline-none p-2">
                        </input>

                        <div className='flex flex-row items-center text-slate-200 '>
                            <button onClick={()=>{saveFactor()}} className="px-3 pb-1 mt-3 border rounded-md hover:border-indigo-500 hover:text-indigo-500">save</button>
                            <Allert></Allert>
                        </div>
                    </div>
                    
            </div>
            {formula && <SortRes formula={formula}></SortRes>}
        </div>
    )
}

export default NewFactor
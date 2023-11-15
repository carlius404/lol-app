import React, { useContext, useEffect, useState } from 'react'
import ReactDom from 'react-dom'
import {MentionsInput,Mention} from "react-mentions"
import {IoCloseSharp} from "react-icons/io5"
import { ImportedFactorsContext } from '../DashBoard'

function NewFactor({setNewFactor}) {
    const [importedFactors,setImportedFactors]=useContext(ImportedFactorsContext)
    const [value,setValue]=useState("")
    var autoComplete=[
        "hp",
        "hpperlevel",
        "mp",
        "mpperlevel",
        "movespeed",
        "armor",
        "armorperlevel",
        "spellblock",
        "spellblockperlevel",
        "attackrange",
        "hpregen",
        "hpregenperlevel",
        "mpregen",
        "mpregenperlevel",
        "crit",
        "critperlevel",
        "attackdamage",
        "attackdamageperlevel",
        "attackspeedperlevel",
        "attackspeed"
      ]
    autoComplete=autoComplete.concat(Object.keys(importedFactors))
    autoComplete=autoComplete.map((factor)=>{
        var a={id:factor, display:factor}
        return a
    })
    
    const saveFactor=async ()=>{
        var factorName=value.split("=")[0].replace(" ","")
        if(value.includes(">") || value.includes("<")){
            setImportedFactors({...importedFactors,tags:{...importedFactors.stats,[factorName]:value}})
        }else{
            setImportedFactors({...importedFactors,stats:{...importedFactors.stats,[factorName]:value}})
        }
        const options={
            method:"POST",
            headers: {'Content-Type': 'application/json',},
            body:JSON.stringify({"name":factorName, "formula":value, "creator":"prova"})}
        const res= await fetch("http://localhost:5000/api/factor",options)
        console.log(res)
        
        
    }
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
    
    return ReactDom.createPortal(
    <div style={OVERLAY_STYLE}>
        <div className="text-xl rounded-md bg-slate-900 text-slate-200" style={STYLE}>

                <div className='flex flex-row items-center justify-end pb-3'>
                    <button onClick={()=>{setNewFactor(false)}} className='h-6 px-3 text-xl hover:bg-red-700 text-slate-300'>
                        <IoCloseSharp></IoCloseSharp>
                    </button>
                </div>
                <div className="px-4">
                    <MentionsInput  value={value} onChange={(e)=>setValue(e.target.value)} className="rounded-md bg-slate-800 h-[250px] w-[500px] resize-none outline-none p-2">
                        <Mention data={autoComplete} trigger="#"></Mention>
                    </MentionsInput>

                    <div className="flex justify-end">
                        <button onClick={()=>{saveFactor()}} className="px-3 pb-1 mt-3 border rounded-md hover:border-indigo-500 hover:text-indigo-500">save</button>
                        <button className="px-3 pb-1 mx-3 mt-3 border rounded-md hover:border-indigo-500 hover:text-indigo-500">preview</button>
                    </div>
                </div>
                
        </div>
    </div>,
    document.getElementById("portal")
    )
}

export default NewFactor
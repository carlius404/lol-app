import React, { createContext, useContext, useEffect, useState } from 'react'
import {evaluate} from "mathjs"

export const ChampsContext=createContext()
function ChampsProvider({children}) {
    const [basicData,setBasicData]=useState()
    useEffect(()=>{
        fetch("https://ddragon.leagueoflegends.com/cdn/13.22.1/data/en_US/champion.json").then((res)=>res.json().then((res)=>{
            setBasicData(res.data)
            
        }))
    },[])

    function evaluateFactor(formula){
        var values={}
        Object.keys(basicData).map((name)=>{
            var stats = Object.fromEntries(Object.entries(basicData[name].stats).map(([key, value]) => [String(key), value]));
            const val=Math.round(evaluate(formula,stats)*100)/100
            values[name]=val

        })
        return values
    }
    const value={basicData,setBasicData,evaluateFactor}
    return (
    <ChampsContext.Provider value={value}>{children}</ChampsContext.Provider>
    )
}

export default ChampsProvider
import React, { useContext } from 'react'
import {evaluate} from "mathjs"
import { ImportedFactorsContext } from './App';

function ChampionCustomStats(basicStats) {
    basicStats = Object.fromEntries(Object.entries(basicStats.basicStats).map(([key, value]) => [String(key), value]));
    const [importedFactors,setImportedFactors]=useContext(ImportedFactorsContext)
    
    const evaluateFact=(formula)=>{
        console.log(formula)
        return Math.round(evaluate(formula,basicStats)*100)/100
    }
    return (
    <div className="grid grid-cols-2 text-slate-200">
        <div className="overflow-x-auto border-slate-200 text-slate-200 no-scrollbar">{Object.keys(importedFactors.tags).map(tag=>{return(<>{ evaluateFact(importedFactors.tags[tag]) && <a className='px-2 mr-2 text-xs border-2 border-slate-200 rounded-xl'>{tag}</a>}</>)})}</div>
        {Object.keys(importedFactors.stats).map(name=>{
            
            return(
            <div className="flex flex-row">
                <a className="font-thin">{name}</a>
                <a>{": "+evaluateFact(importedFactors.stats[name])}</a>
            </div>
            )
        })}
    </div>
  )
}

export default ChampionCustomStats
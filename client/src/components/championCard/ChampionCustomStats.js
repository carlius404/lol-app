import React, { useContext } from 'react'
import {evaluate} from "mathjs"
import { ChampsContext } from '../contexts/ChampsProvider';
import { AuthContext } from '../contexts/AuthProvider';


function ChampionCustomStats({name}) {
    const {basicData,setBasicData}=useContext(ChampsContext)
    const {userData}=useContext(AuthContext)
    var stats=basicData[name].stats
    stats = Object.fromEntries(Object.entries(stats).map(([key, value]) => [String(key), value]));
    const customFactors=userData!=undefined?userData.factors:[]
    console.log(customFactors)
    const evaluateFact=(formula)=>{
        return Math.round(evaluate(formula,stats)*100)/100
    }
    

    return (
    <div className="flex flex-col text-slate-200">
        <div>
        {customFactors.map(factor=>{
            if(factor.tag){
                return(
                    <div className="overflow-x-auto border-slate-200 text-slate-200 no-scrollbar">
                        <>{ evaluateFact(factor.formula) && <a className='px-2 mr-2 text-xs border-2 border-slate-200 rounded-xl'>{factor.name}</a>}</>
                    </div>
    
                )
            }
            
        })}
        </div>
        
        <div className="grid grid-cols-2 text-slate-200">
        {customFactors.map(factor=>{
            if(!factor.tag){
            return(
            <div className="flex flex-row">
                <a className="font-thin">{factor.name}</a>
                <a>{": "+evaluateFact(factor.formula)}</a>
            </div>
            )}
        })}
        </div>
    </div>
  )
}

export default ChampionCustomStats
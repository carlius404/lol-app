import React, { useContext, useEffect, useState } from 'react'
import { ChampsContext } from '../contexts/ChampsProvider'
import ChampProfile from '../draft/ChampProfile'
function SortRes({formula}) {
    const {evaluateFactor}=useContext(ChampsContext)
    const [val,setVal]=useState([])
    useEffect(()=>{
      var dict={}
      try{
        dict=evaluateFactor(formula)
      }catch{}
      
      var elements = Object.keys(dict).map( (key) => {

        return [key, dict[key]]
        
      });
      
      elements.sort(

        (first, second) => { return second[1] - first[1] }
        
        );
      setVal(elements)
      console.log(val)
    },[formula])
    return (
      <div className='flex flex-col pr-12 pl-3 overflow-y-scroll text-slate-200 gap-y-1 max-h-[400px]'>
          {val.map((e)=>{
              return(
                <div className='rounded-full max-w-[30px] flex flex-row'>
                  <ChampProfile name={e[0]}></ChampProfile>
                  <a>{e[1]}</a>
                </div>
              )
          })}
      </div>
    )
}

export default SortRes
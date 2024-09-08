import React, { createContext, useState } from 'react'
import FactorsList from './FactorsList'
import {BiDownArrow,BiRightArrow} from "react-icons/bi"
import {BsPlusSquare} from "react-icons/bs"
import NewFactor from './NewFactor'
import CustomList from './CustomList'

function FactorBuilder() {
  const [showStandard, setShowStandard]=useState(true)
  const [showCustom, setShowCustom]=useState(true)
  const basicStats=
  ["hp",
  "hpperlevel",
  "hpregen",
  "hpregenperlevel",
  "armor",
  "armorperlevel",
  "spellblock",
  "spellblockperlevel",
  "movespeed",
  "attackrange",
  "attackdamage",
  "attackdamageperlevel",
  "attackspeedperlevel",
  "attackspeed",
  "crit",
  "critperlevel",
  "mp",
  "mpperlevel",
  "mpregen",
  "mpregenperlevel"]
  
  return (
      <>
      <div className='flex flex-col h-screen rounded-md bg-slate-800 min-w-[200px]'>
        <div onClick={()=>{setShowStandard(!showStandard)}} className="flex flex-col p-1">
          <div className='flex flex-row items-center justify-between font-bold border-b-2 text-slate-200 hover:text-indigo-500 hover:border-indigo-500'>
            <a>Standard</a>
            {showStandard && <BiRightArrow className="text-md"></BiRightArrow>}
            {!showStandard && <BiDownArrow className="text-md"></BiDownArrow>}
          </div>
          
          {showStandard && <FactorsList values={basicStats}></FactorsList>}
        </div>

        <div onClick={()=>{setShowCustom(!showCustom)}} className="flex flex-col p-1">
          <div className='flex flex-row items-center justify-between font-bold border-b-2 text-slate-200'>
            <div className="flex flex-row items-center gap-3">
              <a>Custom</a>
            </div>
              {showCustom && <BiRightArrow className="text-md"></BiRightArrow>}
              {!showCustom && <BiDownArrow className="text-md"></BiDownArrow>}
          </div>
          
        </div>
        {showCustom && <CustomList></CustomList>}
      </div>
      </>
    
  )
}

export default FactorBuilder
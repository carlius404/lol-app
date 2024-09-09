import React, {useRef } from 'react'
import {IoCloseCircleOutline} from "react-icons/io5"
import {MdOutlineHealthAndSafety} from "react-icons/md"
import {GiPointySword,GiSonicShoes} from "react-icons/gi"
import {BsDropletFill} from "react-icons/bs"

function FactorsList({values}) {
    const FilterStats=({type,borderColor})=>{
        return(
            values.map(factor=>{
                if(factor.includes(type)){
                    return(
                    <div className={`flex flex-row items-center pl-1 my-1 text-xs border-2 rounded-xl w-fit ${borderColor} justify-between`}>
                        <a>{factor}</a>
                        <IoCloseCircleOutline className='ml-2 text-2xl hover:text-red-600 text-slate-200'></IoCloseCircleOutline>
                    </div>)
                }
            })
        )
    }  
    
    return (
    <div className='flex flex-col px-2 m-1 overflow-y-scroll text-slate-200 gap-y-1 max-w-[200px] max-h-[400px] no-scrollbar'>
        <div className='mt-3'>
            <MdOutlineHealthAndSafety className='text-2xl'></MdOutlineHealthAndSafety>
            <FilterStats className type={"hp"} borderColor={"border-green-300"}></FilterStats>
            <FilterStats type={"armor"} borderColor={"border-orange-300"}></FilterStats>
            <FilterStats type={"spellblock"} borderColor={"border-purple-300"}></FilterStats>
        </div>
        <div className='mt-3'>
            <GiPointySword className='text-2xl'></GiPointySword>
            <FilterStats type={"attack"} borderColor={"border-red-400"}></FilterStats>
            <FilterStats type={"crit"} borderColor={"border-yellow-300"}></FilterStats>
        </div>
        <div className='flex flex-row mt-3'>
            <GiSonicShoes className='text-3xl'></GiSonicShoes>
            <BsDropletFill className='text-2xl'></BsDropletFill>
         </div>
            <FilterStats type={"move"} borderColor={"border-indigo-500"}></FilterStats>
            <FilterStats type={"mp"} borderColor={"border-blue-400"}></FilterStats>
        
                
    </div>
  )
}

export default FactorsList
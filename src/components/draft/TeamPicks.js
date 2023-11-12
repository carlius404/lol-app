import React, { createContext, useContext, useState } from 'react'
import ChampProfile from './ChampProfile'
import { ClickedContext } from '../DashBoard';

function TeamPicks({team}) {
    const [picks, setPicks]=useState({top:null, jungle:null, mid:null, adc:null, support:null})
    const [clickedChamp, setClickedChamp]=useContext(ClickedContext)

    let name;

    const assignChamp=(pick)=>{
        if(clickedChamp!=null){
            setPicks({...picks,[`${pick}`]:clickedChamp})
        }
    }
    return (
    <div className="flex flex-col gap-4 p-2">
        {
            Object.keys(picks).map(pick=>{
                name=picks[`${pick}`]
                return(
                    <div className="flex flex-row items-center gap-3 text-sm font-semibold text-slate-300">
                        {name!=null && <div className='rounded-full max-w-[60px]'><ChampProfile onClick={()=>{assignChamp(pick)}} name={name}></ChampProfile></div>}
                        {name==null && <div className='rounded-full max-w-[60px]'><div onClick={()=>{assignChamp(pick)}} className="flex w-[60px] h-[60px] rounded-full bg-slate-700 hover:shadow-md hover:shadow-slate-400"></div></div>}
                        <a>{pick[0].toUpperCase()+pick.substring(1,pick.length)}</a>
                    </div>
                )
            })
        }
    </div>
    )
}

export default TeamPicks
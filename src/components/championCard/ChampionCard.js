import React, { useContext, useState } from 'react'
import ReactDom from 'react-dom'
import ChampionStats from './ChampionStats'
import {BiDownArrow,BiRightArrow} from "react-icons/bi"
import ChampionCustomStats from './ChampionCustomStats'
import { ClickedContext } from '../DashBoard'

function ChampionCard() {
    const [basicStats,setBasicStats]=useState({})
    const [clickedChamp, setClickedChamp]=useContext(ClickedContext)
    const [showStandard, setShowStandard]=useState(true)
    const [showCustom, setShowCustom]=useState(true)
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
        <div className="p-3 pb-12 rounded-xl bg-slate-900" style={STYLE}>
            <div>
                
                <img src={`http://ddragon.leagueoflegends.com/cdn/img/champion/loading/${clickedChamp}_0.jpg`}></img>
                <div className='absolute text-xl font-bold top-5 left-5 text-slate-200'>
                    {clickedChamp}
                </div>
                
                
                <div className="h-[350px] w-[310px] absolute top-[250px] left-3 bg-[#0000008a] px-4 overflow-y-scroll">
                    <div onClick={()=>{setShowStandard(!showStandard)}} className='flex flex-row items-center justify-between font-bold border-b-2 text-slate-200 hover:text-indigo-500 hover:border-indigo-500'>
                        <a>Standard</a>
                        {showStandard && <BiRightArrow className="text-md"></BiRightArrow>}
                        {!showStandard && <BiDownArrow className="text-md"></BiDownArrow>}
                    </div>
                    
                        {showStandard && <ChampionStats setBasicStats={setBasicStats} name={clickedChamp}></ChampionStats>}
                    

                    <div onClick={()=>{setShowCustom(!showCustom)}} className='flex flex-row items-center justify-between font-bold border-b-2 text-slate-200 hover:text-indigo-500 hover:border-indigo-500'>
                        <a>Custom</a>
                        {showCustom && <BiRightArrow className="text-md"></BiRightArrow>}
                        {!showCustom && <BiDownArrow className="text-md"></BiDownArrow>}
                    </div>
                    {showCustom && Object.keys(basicStats).length>3 && <ChampionCustomStats basicStats={basicStats} name={clickedChamp} ></ChampionCustomStats>}
                    
                </div>
                
                
            </div>
        </div>
    </div>,
    document.getElementById("portal")
    )
}

export default ChampionCard
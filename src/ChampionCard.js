import React, { useContext } from 'react'
import ReactDom from 'react-dom'
import { ClickedContext } from './App'
import ChampionStats from './ChampionStats'
function ChampionCard({setOpenCard}) {
    const [clickedChamp, setClickedChamp]=useContext(ClickedContext)

    const STYLE={
        position:"fixed",
        top:"50%",
        left:"50%",
        transform:"translate(-50%,-50%)",
        backgroundColor:"#FFF",
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
    <div onClick={()=>{setOpenCard(false)}} style={OVERLAY_STYLE}>
        <div style={STYLE}>
            <div className='bg-black border-4 border-black'>
                
                <img src={`http://ddragon.leagueoflegends.com/cdn/img/champion/loading/${clickedChamp}_0.jpg`}></img>
                <div className='absolute text-xl font-bold top-5 left-5 text-slate-200'>
                    {clickedChamp}
                </div>
                <div className="min-h-[320px] min-w-[315px] absolute top-[250px] left-0 bg-[#0000008a] px-4">
                    <ChampionStats name={clickedChamp}></ChampionStats>
                </div>
                
            </div>
        </div>
    </div>,
    document.getElementById("portal")
    )
}

export default ChampionCard
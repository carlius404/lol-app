import React, { useEffect, useState, useContext, useRef } from 'react'
import ChampProfile from './ChampProfile'
import {ClickedContext} from '../App'
import ChampionCard from './ChampionCard'
function ChampionList() {
    const [champions, setChampions]=useState([])
    const [clickedChamp, setClickedChamp]=useContext(ClickedContext)
    const [openCard,setOpenCard]=useState(false)
    
    const changeChamp=(event,name)=>{
        setOpenCard(false)
        if(clickedChamp==name){
        setClickedChamp(null)
        }else{
        setClickedChamp(name)
        }
        

        if (event.detail==2){
            console.log("secondo")
            setOpenCard(true)
            setClickedChamp(name)
        }
      }
      
    useEffect(()=>{
        fetch("http://ddragon.leagueoflegends.com/cdn/13.21.1/data/en_US/champion.json").then(res=>res.json().then(res=>{
            setChampions(Object.keys(res.data))
        }))
    },[])
    
    return (
        <div className="grid h-[380px] grid-cols-6 gap-4 overflow-y-scroll rounded-xl">
        {champions.map(name=>{
            return(
            <>
                {clickedChamp!=name && <div onClick={(event)=>{changeChamp(event,name)}} className='rounded-full hover:shadow-md hover:shadow-slate-500 max-w-[60px]'><ChampProfile name={name}></ChampProfile></div>}
                {clickedChamp==name && <div onClick={(event)=>{changeChamp(event,name)}} className='border-2 rounded-full hover:shadow-md hover:shadow-slate-500 border-slate-300 max-w-[60px]'><ChampProfile name={name}></ChampProfile></div>}
            </>
            )
        })}
        {openCard && <ChampionCard setOpenCard={setOpenCard}></ChampionCard>}
        </div>
    )
}

export default ChampionList
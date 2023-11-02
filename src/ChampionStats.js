import React, { useEffect, useState } from 'react'
import {MdOutlineHealthAndSafety} from "react-icons/md"
import {GiPointySword,GiSonicShoes} from "react-icons/gi"
import {BsDropletFill} from "react-icons/bs"

function ChampionStats({name}) {
    const [stats,setStats]=useState({})
    useEffect(()=>{
    fetch(`http://ddragon.leagueoflegends.com/cdn/13.21.1/data/en_US/champion/${name}.json`).then(res=>res.json().then(res=>{
        setStats(res.data[name].stats)
    }))
    },[])  

    const isIn=(s,lis)=>{
        return lis.map(l=>{
            console.log(s,l)
            if(s.includes(l)){
                console.log(true)
                return true
            }
        })

    }
    const FilterStats=({type,textColor})=>{
        return(
            Object.keys(stats).map(s=>{
                if(s.includes(type)){
                    return(<div>
                                <a className={`font-thin ${textColor}`}>{s+": "}</a>
                                <a>{stats[s]}</a>
                            </div>)
                }
            })
        )
    }  
    
    return (  
    <div className="grid grid-cols-2">
        <div className='flex-col pt-2 text-sm text-slate-200'>
            <MdOutlineHealthAndSafety className='text-2xl'></MdOutlineHealthAndSafety>
            <FilterStats type={"hp"} textColor={"text-green-300"}></FilterStats>
            <FilterStats type={"armor"} textColor={"text-orange-300"}></FilterStats>
            <FilterStats type={"spellblock"} textColor={"text-purple-300"}></FilterStats>
            
            <GiSonicShoes className='text-3xl'></GiSonicShoes>
                <FilterStats type={"move"} textColor={"text-indigo-500"}></FilterStats>
        </div>

        <div className='flex-col pt-2 text-sm text-slate-200'>
            <GiPointySword className='text-2xl'></GiPointySword>
            <FilterStats type={"attack"} textColor={"text-red-400"}></FilterStats>
            <FilterStats type={"crit"} textColor={"text-yellow-300"}></FilterStats>

            <BsDropletFill className='text-2xl'></BsDropletFill>
            <FilterStats type={"mp"} textColor={"text-blue-400"}></FilterStats>
        </div>

        


    </div>
    )
}

export default ChampionStats
import React from 'react'
function ChampProfile({name}) {
  
  return (
    <img  className="rounded-full" src={`https://ddragon.leagueoflegends.com/cdn/13.21.1/img/champion/${name}.png`}></img>
        
  )
}

export default ChampProfile
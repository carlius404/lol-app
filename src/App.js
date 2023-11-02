import ChampionList from "./ChampionList";
import FactorBuilder from "./FactorBuilder";
import TeamPicks from "./TeamPicks";
import React, { createContext, useState } from 'react'

export const ClickedContext=createContext()
function App() {
  const [clickedChamp, setClickedChamp]=useState(null)
  return (
    <ClickedContext.Provider value={[clickedChamp, setClickedChamp]}>
      <div className="flex flex-row bg-slate-900">
        <FactorBuilder></FactorBuilder>
        <div className="flex flex-row m-1 rounded-md bg-slate-800 h-min">
          <TeamPicks></TeamPicks>
          <ChampionList></ChampionList>
          <TeamPicks></TeamPicks>
        </div>
        
      </div>
    </ClickedContext.Provider>
    
  );
}

export default App;

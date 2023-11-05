import ChampionList from "./ChampionList";
import FactorBuilder from "./FactorBuilder";
import TeamPicks from "./TeamPicks";
import React, { createContext, useState } from 'react'
import {evaluate} from "mathjs"
export const ImportedFactorsContext=createContext()
export const ClickedContext=createContext()

function App() {
  const [clickedChamp, setClickedChamp]=useState(null)
  const [importedFactors,setImportedFactors]=useState({stats:{},tags:{}})
  return (
    <ClickedContext.Provider value={[clickedChamp, setClickedChamp]}>
    <ImportedFactorsContext.Provider value={[importedFactors,setImportedFactors]}>
      <div className="flex flex-row bg-slate-900">
        <FactorBuilder></FactorBuilder>
        <div className="flex flex-row m-3 rounded-md bg-slate-800 h-min">
          <TeamPicks></TeamPicks>
          <ChampionList></ChampionList>
          <TeamPicks></TeamPicks>
        </div>
        
      </div>
    </ImportedFactorsContext.Provider>
    </ClickedContext.Provider>
    
  );
}

export default App;

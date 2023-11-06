import ChampionList from "./components/ChampionList";
import FactorBuilder from "./components/FactorBuilder";
import TeamPicks from "./components/TeamPicks";
import React, { createContext, useState } from 'react'
import NavBar from "./components/NavBar";
export const ImportedFactorsContext=createContext()
export const ClickedContext=createContext()

function App() {
  const [clickedChamp, setClickedChamp]=useState(null)
  const [importedFactors,setImportedFactors]=useState({stats:{},tags:{}})
  return (
    <ClickedContext.Provider value={[clickedChamp, setClickedChamp]}>
    <ImportedFactorsContext.Provider value={[importedFactors,setImportedFactors]}>
      <NavBar></NavBar>
      <div className="flex flex-row gap-2 py-2 bg-slate-900">
        <FactorBuilder></FactorBuilder>
        <div className="flex flex-row rounded-md bg-slate-800 h-min">
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

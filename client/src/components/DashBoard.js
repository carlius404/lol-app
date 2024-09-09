import ChampionList from "./draft/ChampionList";
import FactorBuilder from "./factorBuilder/FactorBuilder";
import TeamPicks from "./draft/TeamPicks";
import React, { createContext, useState } from 'react'
import NavBar from "./NavBar";
import NewFactor from "./factorBuilder/NewFactor";
import ChampsProvider from "./contexts/ChampsProvider";
export const ClickedContext=createContext()

function DashBoard() {
  console.log("dashboard")
const [clickedChamp, setClickedChamp]=useState(null)
  return (
    <ChampsProvider>
      <ClickedContext.Provider value={[clickedChamp, setClickedChamp]}>
          <NavBar></NavBar>
          <div className="flex flex-row gap-2 py-2 bg-slate-900">
            <FactorBuilder></FactorBuilder>
            <div className="flex flex-col gap-2">
              <div className="flex flex-row rounded-md bg-slate-800 h-min">
                <TeamPicks></TeamPicks>
                <ChampionList></ChampionList>
                <TeamPicks></TeamPicks>
              </div>
              <NewFactor></NewFactor>
            </div>
            
          </div>
      </ClickedContext.Provider>
    </ChampsProvider>
  )
}

export default DashBoard
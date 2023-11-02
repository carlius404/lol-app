import React, { createContext, useState } from 'react'
import FactorsList from './FactorsList'


export const ImportedFactorsContext=createContext()
function FactorBuilder() {
  const [importedFactors,setImportedFactors]=useState(
  ["hp",
  "hpperlevel",
  "hpregen",
  "hpregenperlevel",
  "armor",
  "armorperlevel",
  "spellblock",
  "spellblockperlevel",
  "movespeed",
  "attackrange",
  "attackdamage",
  "attackdamageperlevel",
  "attackspeedperlevel",
  "attackspeed",
  "crit",
  "critperlevel",
  "mp",
  "mpperlevel",
  "mpregen",
  "mpregenperlevel"])
  return (
    <ImportedFactorsContext.Provider value={[importedFactors,setImportedFactors]}>
          <FactorsList></FactorsList>
    </ImportedFactorsContext.Provider>
  )
}

export default FactorBuilder
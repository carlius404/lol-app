import React, { useContext, useEffect } from 'react'
import { AuthContext, AuthProvider } from '../contexts/AuthProvider'
import {IoCloseCircleOutline} from "react-icons/io5"
function CustomList() {
  const {userData,refresh,currentUser}=useContext(AuthContext)
  console.log("userData",userData)
  const deleteFactor=(id)=>{
    fetch(`http://localhost:5000/api/user/${currentUser.uid}/factor/${id}`,{method:"DELETE"}).then(()=>{refresh(currentUser.uid)})
  }
  return(
    <div className="flex flex-col px-2 m-1 overflow-y-scroll text-slate-200 gap-y-1 max-w-[200px] max-h-[400px]">
      {userData && userData!=undefined?userData.factors.map((factor)=>{
        return(
          <div className={"flex flex-row items-center pl-1 my-1 text-xs border-2 rounded-xl border-indigo-400 w-fit justify-between"}>
              <a className="text-sm text-slate-200">{factor.name}</a>
              <IoCloseCircleOutline onClick={()=>deleteFactor(factor._id)} className='ml-2 text-2xl hover:text-red-600 text-slate-200'></IoCloseCircleOutline>
          </div>
        )
      }):null}
    </div>
  )
}

export default CustomList
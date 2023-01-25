import React, { useContext } from 'react'
import { GameContext } from '../../Context/GameContext'
import Oicon from '../icons/Oicon'
import Xicon from '../icons/Xicon'


const Start = () => {
  const{activeUser,setActiveUser,changePlayMode,} = useContext(GameContext)
  return (
    <div className="start">
     <div className="start_header">
      <Xicon color="blue" size="lg"/>
      <Oicon color="yellow"/>
     </div>
     <div className="card shadow-gray">
      <h1 className="text-lg">choose your mark</h1>
      <div className="start_players">
        <span className={activeUser==="x" ?"start_players--active": ""} onClick={() => setActiveUser("x")}>
          <Xicon color={activeUser==="x" ?"dark" :"light"} />
        </span>
        <span className={activeUser==="o" ?"start_players--active": ""} onClick={() => setActiveUser("o")}>
          <Oicon color={activeUser==="o" ?"dark" :"light"}/>
        </span>
      </div>
      <p className="text-light">notice : x goes first</p>
     </div> 
     <div className="start_btn">
      <button className="btn btn-yellow" onClick={() => changePlayMode('cpu')} >newgame (vs cpu)</button>
      <button className="btn btn-blue" onClick={() => changePlayMode('player')}>newgame (vs player)</button>
     </div>
     <div>
     <h3 className="text-gray copyright">By <a  href="https://www.instagram.com/_hkay06/"> HKAY</a> </h3>
     </div> 
     </div>
    
  )
}

export default Start
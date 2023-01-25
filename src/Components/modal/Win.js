import React, { useContext } from 'react'
import { GameContext } from '../../Context/GameContext'
import Xicon from '../icons/Xicon'
import Oicon from '../icons/Oicon'

const Win = () => {
  const{winner , handleReset ,handleNextRound} = useContext(GameContext)
  return (
    <div className="score">
      {winner && winner !== 'no' ? (
        <>
       <p>you win!</p>
       <h3 className={`score_title ${winner ==="o" ? 'text-yellow' : 'text-blue'}`}>
        
        {winner === "x" ?<Xicon /> : <Oicon /> }
        take the round 
        </h3>
        </>
      ) : (
      
        <h3 className='score_title text-yellow'>
        Draw !! 
        </h3> 
        
      )}
      
       <div className='score_btn'>
        <button className='btn btn-sm' onClick={handleReset}>quit</button>
        <button className='btn btn-sm btn-yellow'onClick={handleNextRound}>next round</button>
       </div> 
    </div>
  )
}

export default Win
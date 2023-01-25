import React, { useContext } from 'react'
import { GameContext } from '../../Context/GameContext'
import { ModalContext } from '../../Context/ModalContext'
import Oicon from '../icons/Oicon'
import Redroicon from '../icons/Redroicon'
import Xicon from '../icons/Xicon'
import BoardCard from './BoardCard'

const Board = () => {
  const {squares, xnext , ties , winner , winnerLine ,playMode , activeUser}= useContext(GameContext)

  const {showModal, setModaleMode} =useContext(ModalContext)
  const resetGame = () => {
    showModal()
    setModaleMode("start")
  }

  const checkUser = (user) => {
    if(playMode === 'cpu') {
      if (user == activeUser) {
        return "(you)"
        
      } else {
        return "(cpu)"
      }

    }
  }

  return (
    <div className="borad">
      <div className="board__header">
        <div>
          <Xicon size="lg" />
          <Oicon />
        </div>
        <div className="board__turn">
          {!xnext ? <Xicon color="light" size="sm"/> : <Oicon color="light" size="sm"/> }
           turn
        </div>
        <div>
          <button className="btn btn-sm board__restart" onClick={resetGame}>
            <Redroicon />
          </button>
        
        </div>
      </div>
      <div className="board__body">
        {squares.map((sq,ix) => (
          <BoardCard key={ix} index ={ix} user={sq} active={winner && winnerLine && winnerLine.includes(ix)} />
        ))}

      </div>
      <div className="board__footer">

        <div className="card bg-blue">
          <p className="text-blight">x{checkUser('x')}</p>
          <strong className="text-2xl">{ties.x}</strong>
        </div>

        <div className="card bg-light">
          <p className="text-blight">ties</p>
          <strong className="text-2xl">{ties.x + ties.o}</strong>
        </div> 
         
        <div className="card bg-yellow">
          <p className="text-blight">o{checkUser('o')}</p>
          <strong className="text-2xl">{ties.o}</strong>
        </div>

      </div>
    </div>
  )
}

export default Board
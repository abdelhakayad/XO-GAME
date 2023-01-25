import React, { useContext } from 'react'
import { GameContext } from '../../Context/GameContext'
import { ModalContext } from '../../Context/ModalContext'

const Restart = () => {

  const {handleReset}= useContext(GameContext)

  const {hideModal} =useContext(ModalContext)


  return (
    <div className='restart'>
       <h3 className='restart_title'>
         restart game? 
        </h3>
       <div className='restart_btn'>
        <button className='btn btn-sm' onClick={hideModal}>no , resume</button>
        <button className='btn btn-sm btn-yellow' onClick={handleReset}>yes , restart</button>
       </div> 
    </div>
  )
}

export default Restart
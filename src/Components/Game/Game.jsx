import React from 'react'
import './Game.css'
import X from '../Image/X'
import O from '../Image/O'
const Game = (props) => {
  const handleReturn = () => {
    props.setFound(false)
    props.setCells(Array(props.rows * props.columns).fill(null))
    props.setNext(false)
    props.setValue(0)

  }
  const handleRestart = () => {
    props.setCells(Array(props.rows * props.columns).fill(null))
    props.setValue(0)
  }
  return (
    <div className='Game'>
      {props.value !== 0 && (
        <div className='Win'>player {props.value} win</div>
      )}
      <div className='X' onClick={handleReturn}>
        <p style={{ fontSize: '32px' }}>X</p>
      </div>
      <div className='Set'>
        {props.cells.map((value, index) => (
          <div
            key={index}
            className="cell"
            onClick={() => props.handleClick(index)}
          >
            {value === "X" ? <X /> : value === "O" ? <O /> : null}

          </div>
        ))}
      </div>
      <div className='Restart'>
          <button onClick={handleRestart}>Restart</button>
      </div>
    </div>
  )
}

export default Game

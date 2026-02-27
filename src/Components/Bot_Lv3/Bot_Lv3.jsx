import React, { useEffect, useState } from 'react'
import './Bot_Lv3.css'
import { Game as WasmGame } from "../../RustNewbie/hello-wasm/pkg/hello_wasm.js";
const Bot_Lv3 = (props) => {
  const [wasmGame] = useState(() => new WasmGame());
  const [, setTick] = useState(0)   // dùng để force re-render
  const SIZE = 15;
  const handleReturn = () => {
    props.setOpen(0)
  }
  const handleRestart = () => {
    wasmGame.reset()
    setTick(t => t + 1)  // ép render lại
  }
  const handleClick = (x, y) => {
    const success = wasmGame.play(x, y)
    if (success) {
      setTick(t => t + 1)
    }
    setTimeout(() => {
      const move = wasmGame.bot_lvl3_move()

      if (move) {
        setTick(t => t + 1)
      }
    }, 500)
  }
  const renderBoard = () => {
    // if (!wasmGame.current) return null

    const cells = []

    for (let i = 0; i < SIZE; i++) {
      for (let j = 0; j < SIZE; j++) {
        const value = wasmGame.get_cell(i, j)
        cells.push(
          <div
            key={`${i}-${j}`}
            className="cell"
            onClick={() => handleClick(i, j)}
          >
            {value === "X" ? "X" : value === "O" ? "O" : ""}
          </div>
        )
      }
    }

    return cells
  }
  const winner = wasmGame.winner

  return (
    <div className='Bot_Lv3'>

      {winner !== '.' && (
        <div className='Win'>Player {winner} win</div>
      )}

      <div className='X' onClick={handleReturn}>
        <p style={{ fontSize: '32px' }}>X</p>
      </div>

      <div className='Set'>
        {renderBoard()}
      </div>

      <div className='Restart'>
        <button onClick={handleRestart}>Restart</button>
      </div>

    </div>
  )
}

export default Bot_Lv3

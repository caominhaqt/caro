  import React, { useState } from 'react'
  import './Game.css'
  import { Game as WasmGame } from "../../RustNewbie/hello-wasm/pkg/hello_wasm.js";
  const SIZE = 15; // hoặc đúng bằng SIZE trong Rust

  const Game = (props) => {

    const [wasmGame] = useState(() => new WasmGame());
    const [, setTick] = useState(0)   // dùng để force re-render
    // const [ready, setReady] = useState(false)
    // useEffect(() => {
    //   async function load() {
    //     await init()
    //     wasmGame.current = new WasmGame()
    //     setReady(true)
    //   }
    //   load()
    // }, [])

    const handleReturn = () => {
      props.setFound(0)
    }

    const handleRestart = () => {
      // if (wasmGame.current) {
        wasmGame.reset()
        setTick(t => t + 1)  // ép render lại
      // }
    }

    const handleClick = (x, y) => {
      // if (!wasmGame.current) return

      const success = wasmGame.play(x, y)

      if (success) {
        setTick(t => t + 1)
      }
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

    // if (!ready) return <div>Loading...</div>

    const winner = wasmGame.winner

    return (
      <div className='Game'>
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
          <button onClick={handleRestart}>
            <p>Restart</p>
          </button>
        </div>

      </div>
    )
  }

  export default Game
import React from 'react'
import { useState } from 'react';
import './Home.css'
import Game from '../Game/Game'

const Home = () => {
  const [found, setFound] = useState(false);
  const handleOpen = () => {
    setFound(!found)
  }
  const rows = 15;
  const columns = 20;
  const [cells, setCells] = useState(Array(rows * columns).fill(null))
  const [next, setNext] = useState(false)
  const [value, setValue] = useState(0)

  const direction = [
    { x: 0, y: 1 },
    { x: 1, y: 0 },
    { x: 1, y: -1 },
    { x: -1, y: 1 }
  ];

  const checkWin = (cells, index, rows, columns) => {

    const player = cells[index];
    if (!player) return false;

    for (let dir of direction) {
      const dx = dir.x;
      const dy = dir.y;
      const row = Math.floor(index / columns);
      const column = index % columns
      let total = 1;
      total = total + checkDirection(cells, row, column, dx, dy, player, rows, columns);

      total = total + checkDirection(cells, row, column, - dx, - dy, player, rows, columns);

      if (total >= 5) return player;

    }

    return false;

  }
  const checkDirection = (cells, row, column, dx, dy, player, rows, columns) => {
    let count = 0;

    for (let i = 1; i < 5; i++) {
      const newRow = row + dy * i;
      const newCol = column + dx * i;

      if (
        newRow < 0 || newRow >= rows || newCol < 0 || newCol >= columns
      ) break;

      const index = newRow * columns + newCol;
      if (cells[index] === player) {
        count = count + 1;
      }
      else {
        break;
      }
    }


    return count;

  }
  const handleClick = (index) => {
    
    const newCells = [...cells]

    if (value !== 0) return;
    if (newCells[index] !== null) return;
    newCells[index] = next ? "O" : "X"
    setCells(newCells)

    const winner = checkWin(newCells, index, rows, columns);

    if (winner) {
      setValue(winner === "X" ? 1 : 2);
    }

    setNext(!next)
  }

  return (
    <div className='Home'>
      {found ? (
        <Game
          setFound={setFound}
          handleClick={handleClick}
          setCells={setCells}
          cells={cells}
          rows={rows}
          columns={columns}
          setNext={setNext}
          setValue={setValue}
          value={value}
        />
      ) : (
        <>
          <div className='Title' style={{ fontSize: '32px' }}>Tic-Tac-Toe</div>

          <div className='PlayBot'>
            Chơi với máy
          </div>

          <div className='PvP' onClick={handleOpen}>
            Chơi với người
          </div>
        </>
      )}

    </div>
  )
}

export default Home

import React from 'react'
import { useState } from 'react';
import './Home.css'
import Game from '../Game/Game'
import Bot_UI from '../Bot_UI/Bot_UI';
const Home = () => {

  const [found, setFound] = useState(0);
  const handleOpen = () => {
    setFound(1)
  }

  const handleOpenBot = () => {
    setFound(2)
  }
  if (found === 1) return <Game setFound={setFound} />
  if (found === 2) return <Bot_UI setFound={setFound} />
  return (
    <div className='Home'>
      <>
        <div className='Title' style={{ fontSize: '32px', color: 'white' }}>
          Tic-Tac-Toe
        </div>

        <div className='PlayBot' onClick={handleOpenBot}>
          <p style={{ fontSize: '32px', color: 'white' }}>
            Chơi với máy
          </p>
        </div>
        <div className='PvP' onClick={handleOpen}>
          <p style={{ fontSize: '32px', color: 'white' }}>
            PvP
          </p>
        </div>
      </>

    </div>
  )
}

export default Home

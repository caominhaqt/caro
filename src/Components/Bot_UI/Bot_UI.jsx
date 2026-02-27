import React, {useState} from 'react'
import './Bot_UI.css'
import Bot_Lv1 from '../Bot_Lv1/Bot_Lv1'
import Bot_Lv2 from '../Bot_Lv2/Bot_Lv2'
import Bot_Lv3 from '../Bot_Lv3/Bot_Lv3'
const Bot_UI = (props) => {
  const [open, setOpen] = useState(0);
  const handleOpenBot_Lv1 = () =>{
    setOpen(1)
  }
  const handleOpenBot_Lv2 = () => {
    setOpen(2)
  }
  const handleOpenBot_Lv3 = () => {
    setOpen(3)
  }
  const handleReturn = () => {
    props.setFound(0)
  }
  if (open === 1) return <Bot_Lv1 setOpen = {setOpen} />
  if (open === 2) return <Bot_Lv2 setOpen = {setOpen} />
  if (open === 3) return <Bot_Lv3 setOpen = {setOpen} />
  return (
    <div className='Bot_UI'>
      <div className='Return' onClick={handleReturn}>
        <p style={{ fontSize: '24px', color: 'white' }}>X</p>
      </div>
      <p style={{ fontSize: '32px', color: 'white', userSelect: 'none'}}>Select Level</p>
      <div className='Lv1' onClick={handleOpenBot_Lv1}>
        <p style={{ fontSize: '32px', color: 'white' }}>Lv1</p>
      </div>
      <div className='Lv2' onClick={handleOpenBot_Lv2}>
        <p style={{ fontSize: '32px', color: 'white' }}>Lv2</p>
      </div>
      <div className='Lv3' onClick={handleOpenBot_Lv3}>
        <p style={{ fontSize: '32px', color: 'white' }}>Lv3</p>
      </div>
    </div>
  )
}

export default Bot_UI

import { useState } from 'react'
import './menu.scss'

function Menu() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div className='menu-container'>
        <div className='menu-position-container'>
        <div className='menu-logo'>
          <a href='#'>REACT.AUTO</a>
        </div>
        <div className='menu-link'>
          <a href='#'>Главная</a>
        </div>
        <div className='menu-link'>
          <a href='#'>Объявления</a>
        </div>
        <div className='menu-link'>
          <a href='#'>Поиск</a>
        </div>
        <div className='menu-link'>
          <a href='#'>Кабинет</a>
        </div>
      </div>
    </div>
    </>
  )
}

export default Menu

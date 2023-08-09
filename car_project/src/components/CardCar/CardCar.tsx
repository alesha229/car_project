import { useState } from 'react'
import './CardCar.scss'
import MainButton from '../MainButton/MainButton'

function CardCar() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div className='CardCar'>
        <div className='CarImg'></div>
        <div className='CarOptions'>
          <div className='CarFirstRow'><div className='CarName'>Lada Vesta</div>
            
            <div className='SecondOptions'>1.6л/106 л.с/Бензин<br />Механика<br />Универсал</div>
            <div className='Price'>1 129 000 ₽</div>
            <MainButton onClick={() => console.log("You clicked on the pink circle!")} label='Купить' arrow={false} btnStyle='SmallButton' link='any' />
          </div>
          <div className='CarSecondRow'><div className='FirstOptions'>2019 <br />100900 км</div>
            <div className="CarButtonStore">
              <div className='CarLike'></div>
              <div className='CarCompare'></div>
              <div className='CarWrite'></div>
              <div className='CarHide'></div>
            </div>
          </div>
        </div>
      </div>

    </>
  )
}

export default CardCar

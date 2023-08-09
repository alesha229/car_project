import { useState } from 'react'
import './MainFind.scss'
import CardCar from '../CardCar/CardCar'

function MainFind() {
  const [count, setCount] = useState(0)

  return (
    <div className='MainFind'>
     <h2>Актуальные авто в продаже</h2>
     <CardCar/>
     <CardCar/>
     <CardCar/>
     <CardCar/>
     <CardCar/>
     <CardCar/>
     <CardCar/>
     <CardCar/>
    </div>
  )
}

export default MainFind

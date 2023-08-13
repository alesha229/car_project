import { FC, ReactNode, useState } from 'react'
import './MainFind.scss'
import CardCar from '../CardCar/CardCar'
import { useDispatch, useSelector } from 'react-redux'
import { RootState } from '../../store'
function MainFind() {
  const Cars = useSelector((state: RootState) => state.counter.cars)
  const dispatch = useDispatch()
  const car = Cars.map((car)=>
  <CardCar key={car.id} CarOptions={car}/>
  )
 

  return (
    <div className='MainFind'>
     <h2>Актуальные авто в продаже</h2>
     {car}
    </div>
  )
}

export default MainFind

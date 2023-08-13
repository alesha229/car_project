import { FC, useEffect } from 'react'
import './MainFind.scss'
import { useDispatch } from 'react-redux'
import { AppDispatch, useAppSelector } from '../../store'
import { fetchAllCars } from '../../store/slices/CarCardSlice'
import CardCar from '../CardCar/CardCar'

const MainFind: FC = () => {
	const dispatch = useDispatch<AppDispatch>()
	const { cars } = useAppSelector(state => state.cars)

	useEffect(() => {
		dispatch(fetchAllCars())
	}, [])

	console.log('cars', cars)

	return (
		<div className='MainFind'>
			<h2>Актуальные авто в продаже</h2>
			{cars.map(car => (
				<CardCar key={car.id} carItem={car} />
			))}
		</div>
	)
}

export default MainFind

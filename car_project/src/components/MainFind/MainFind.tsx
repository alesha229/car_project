import { FC, useEffect } from 'react'
import './MainFind.scss'
import { useDispatch } from 'react-redux'
import { useAppSelector } from '../../store'
import { fetchAllCars } from '../../store/slices/CarCardSlice'

const MainFind: FC = () => {
	const dispatch = useDispatch()
	const cars = useAppSelector(state => state.cars.cars)

	fetchAllCars()
	//   useEffect(() => {
	// }, [])

	console.log('cars', cars)

	return (
		<div className='MainFind'>
			<h2>Актуальные авто в продаже</h2>
			{/* {car} */}
		</div>
	)
}

export default MainFind

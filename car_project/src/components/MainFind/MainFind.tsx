import { FC, useEffect } from 'react'
import './MainFind.scss'
import { useDispatch } from 'react-redux'
import { AppDispatch, useAppSelector } from '../../store/store'
import { setResults } from '../../store/slices/сarResSlice'
import CardCar from '../CardCar/CardCar'

const MainFind: FC = () => {
	const dispatch = useDispatch<AppDispatch>()
	const { cars, status } = useAppSelector(state => state.cars)
	const { results } = useAppSelector(state => state.result)

	useEffect(() => {
		if (cars.length > 0) {
			dispatch(setResults(cars))
		}
	}, [cars])

	return (
		<div className='MainFind'>
			<h2>Актуальные авто в продаже</h2>
			{status === 'loading' ? (
				<div>Loading...</div>
			) : (
				results.map(car => (
					<CardCar key={car.id} carItem={car} />
				))
			)}
		</div>
	)
}

export default MainFind

import { FC, useEffect } from 'react'
import CustomSelect from '../CustomSelect/CustomSelect'
import './SearchForm.scss'
import { AppDispatch, useAppSelector } from '../../store'
import { fetchSelect } from '../../store/slices/CarCardSlice'
import { useDispatch } from 'react-redux'

const SearchForm: FC = () => {
	const { selects } = useAppSelector(state => state.cars)
	const dispatch = useDispatch<AppDispatch>()

	let options = []

	useEffect(() => {
		dispatch(fetchSelect())
	}, [])

	const selects = selects.map(item => options.push(item))

	return (
		<div className='form'>
			<CustomSelect placeholder='' options={options} />
		</div>
	)
}

export default SearchForm

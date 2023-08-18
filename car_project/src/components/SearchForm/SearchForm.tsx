import { FC, useEffect } from 'react'
import CustomSelect from '../CustomSelect/CustomSelect'
import './SearchForm.scss'
import { AppDispatch, useAppSelector } from '../../store'
import { fetchSelect } from '../../store/slices/CarCardSlice'
import { useDispatch } from 'react-redux'

const SearchForm: FC = () => {
	const { selects } = useAppSelector(state => state.cars)
	const dispatch = useDispatch<AppDispatch>()

	let options:any = []
	useEffect(() => {
		dispatch(fetchSelect())
	}, [])

	selects.map(item => {
		options.push({ value: Object.keys(item)[0], label: Object.keys(item)[0] })
	})

	return (
		<div className='form'>
			<CustomSelect placeholder='' options={options} />
		</div>
	)
}

export default SearchForm

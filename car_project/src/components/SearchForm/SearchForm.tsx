import { FC, useEffect, useState } from 'react'
import CustomSelect from '../CustomSelect/CustomSelect'
import './SearchForm.scss'
import { AppDispatch, useAppSelector } from '../../store/store'
import { fetchSelect } from '../../store/slices/сarSlice'
import { useDispatch } from 'react-redux'

interface IOption {
	value: string
	label: string
}

const SearchForm: FC = () => {
	const dispatch = useDispatch<AppDispatch>()
	const selects = useAppSelector(state => state.cars.selects)

	let options = []

	useEffect(() => {
		dispatch(fetchSelect())
	}, [])

	const selects = selects.map(item => options.push(item))

	return (
		<div className='form'>
			<CustomSelect
				placeholder='Select Brand'
				options={brandOptions}
				selectedOption={selectedBrand}
				onOptionChange={setSelectedBrand}
			/>
		</div>
	)
}

export default SearchForm

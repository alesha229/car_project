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
	const [selectedBrand, setSelectedBrand] = useState<string>('')
	const selects = useAppSelector(state => state.cars.selects)
	const dispatch = useDispatch<AppDispatch>()

	useEffect(() => {
		dispatch(fetchSelect())
	}, [])

	const brandOptions: IOption[] = selects.flatMap(brandData =>
		Object.keys(brandData).map((brand: string) => ({
			value: brand,
			label: brand,
		})),
	)

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

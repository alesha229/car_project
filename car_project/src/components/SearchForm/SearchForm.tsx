import { FC, useEffect, useState } from 'react'
import CustomSelect from '../CustomSelect/CustomSelect'
import './SearchForm.scss'
import { AppDispatch, useAppSelector } from '../../store/store'
import { fetchSelect } from '../../store/slices/сarSlice'
import { useDispatch } from 'react-redux'
import { resolvePath } from '../../utils/resolvePath'

interface IOption {
	value: string
	label: string
}

const SearchForm: FC = () => {
	const [selectedBrand, setSelectedBrand] = useState<string>('')
	const [selectedModel, setSelectedModel] = useState<string>('')
	const [modelOptions, setModelOptions] = useState<IOption[]>([
		{
			"value": "none",
			"label": "none"
		}
	])
	const selects = useAppSelector(state => state.cars.selects)
	const dispatch = useDispatch<AppDispatch>()

	useEffect(() => {
		dispatch(fetchSelect())
	}, [])
	useEffect(() => {
		if (selectedBrand != '') {
			setModelOptions(
				Object.keys(resolvePath(selectedBrand, selects)).map((brand: string) => ({
					value: brand,
					label: brand,
				}),))
		}
		setSelectedModel("")
	}, [selectedBrand])
	const brandOptions: IOption[] = Object.keys(selects).map((brand: string) => ({
		value: brand,
		label: brand,
	}),)


	return (
		<div className='form'>
			<CustomSelect
				placeholder='Марка авто'
				options={brandOptions}
				selectedOption={selectedBrand}
				onOptionChange={setSelectedBrand}
			/>
			<CustomSelect
				placeholder='Модель'
				options={modelOptions}
				selectedOption={selectedModel}
				onOptionChange={setSelectedModel}
				isDisabled={(selectedBrand == '') ? true : false}
			/>

		</div>
	)
}

export default SearchForm

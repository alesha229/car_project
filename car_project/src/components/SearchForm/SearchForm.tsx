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
	const [selectedModel, setSelectedModel] = useState<any>('')
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
	function resolvePath(path: string | string[], obj: any, separator = '.') { const properties = Array.isArray(path) ? path : path.split(separator); return properties.reduce((prev, curr) => prev && prev[curr], obj); }
	useEffect(() => {
		if(selectedBrand!=''){
		setModelOptions(
		Object.keys(resolvePath(selectedBrand, selects)).map((brand: string) => ({
			value: brand,
			label: brand,
		}),))
		}
		setSelectedModel("")
		console.log(selectedModel)
	}, [selectedBrand])
	const brandOptions: IOption[] = Object.keys(selects).map((brand: string) => ({
		value: brand,
		label: brand,
	}),)
	console.log(selects)
	



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
				isDisabled={(selectedBrand == '') ? true:false}
			/>
		</div>
	)
}

export default SearchForm

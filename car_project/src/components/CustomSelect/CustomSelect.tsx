import { FC } from 'react'
import Select from 'react-select'

// const options = [
// 	{ value: 'lada', label: 'Lada (ВАЗ)' },
// 	{ value: 'BMW', label: 'Strawberry' },
// ]

interface ICustomSelect {
	value: string
	label: string
}

interface ICustomSelectProps {
	options: ICustomSelect
	selectedOption: string
	onOptionChange: (option: string) => void
}

const CustomSelect: FC<ICustomSelectProps> = ({
	options,
	selectedOption,
	onOptionChange,
}) => {
	return (
		<Select
			classNamePrefix='select'
			placeholder='Поиск по...'
			// theme={theme => ({
			// 	...theme,
			// 	borderRadius: 12,
			// })}
			value={options.find(option => option.value === selectedOption)}
			onChange={option => onOptionChange(option?.value || '')}
			options={optionsArray}
		/>
	)
}

export default CustomSelect

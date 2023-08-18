import { FC } from 'react'
import Select from 'react-select'

interface ICustomSelect {
	value: string
	label: string
}

interface ICustomSelectProps {
	options: ICustomSelect[]
	selectedOption: string
	onOptionChange: (option: string) => void
	placeholder: string
}

const CustomSelect: FC<ICustomSelectProps> = ({
	options,
	placeholder,
	selectedOption,
	onOptionChange,
}) => {
	return (
		<Select
			classNamePrefix='select'
			placeholder={placeholder}
			theme={theme => ({
				...theme,
			})}
			value={options.find(option => option.value === selectedOption)}
			onChange={selected => onOptionChange?.(selected?.value || '')}
			options={options}
		/>
	)
}

export default CustomSelect

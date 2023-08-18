import { FC } from 'react'
import Select from 'react-select'

interface ICustomSelect {
	value: string
	label: string
}

interface ICustomSelectProps {
	options: ICustomSelect[]
	selectedOption?: string
	onOptionChange?: (option: string) => void
	placeholder: string
}

const CustomSelect: FC<ICustomSelectProps> = ({
	options,
	selectedOption,
	onOptionChange,
	placeholder,
}) => {
	return (
		<Select
			classNamePrefix='select'
			placeholder={placeholder}
			theme={theme => ({
				...theme,
				colors: '#111',
			})}
			// value={selectedOption}
			// onChange={onOptionChange}
			options={options}
		/>
	)
}

export default CustomSelect

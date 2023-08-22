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
				// Настройте стили, используя классы с префиксом "classNamePrefix"
				styles: {
					control: (provided, state) => ({
						...provided,
						// Вы можете добавить пользовательские стили здесь для области управления (ввода)
					}),
					menu: (provided, state) => ({
						...provided,
						// Вы можете добавить пользовательские стили здесь для выпадающего меню
					}),
					option: (provided, state) => ({
						...provided,
						// Вы можете добавить пользовательские стили здесь для отдельных вариантов
					}),
					// Вы можете настраивать другие стили по мере необходимости
				},
			})}
			value={options.find(option => option.value === selectedOption)}
			onChange={selected => onOptionChange?.(selected?.value || '')}
			options={options}
		/>
	)
}

export default CustomSelect

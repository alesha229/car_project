import { FC, useState, useRef, useEffect } from "react";
import "./CustomSelect.scss";

interface CustomSelectProps {
  options: string[];
  value?: string;
  onChange: (value: string) => void;
  placeholder: string;
  disabled?: boolean;
  className?: string;
}

const CustomSelect: FC<CustomSelectProps> = ({
  options,
  value,
  onChange,
  placeholder,
  disabled = false,
  className = "",
}) => {
<<<<<<< HEAD
  const [isOpen, setIsOpen] = useState(false);
  const selectRef = useRef<HTMLDivElement>(null);
=======
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
			value={(selectedOption =='') ? null:options.find(option => option.value === selectedOption)}
			onChange={selected => onOptionChange?.(selected?.value || '')}
			options={options}
			isDisabled={isDisabled}
		/>
	)
}

export default CustomSelect

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
			value={options.find(option => option.value === selectedOption)}
			onChange={selected => onOptionChange?.(selected?.value || '')}
			options={options}
			isDisabled={isDisabled}
		/>
	)
}
>>>>>>> parent of b008c1d (hamburger menu)

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (selectRef.current && !selectRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const handleSelect = (option: string) => {
    onChange(option);
    setIsOpen(false);
  };

  return (
    <div
      ref={selectRef}
      className={`custom-select ${className} ${disabled ? "disabled" : ""}`}
    >
      <div
        className={`custom-select__header ${isOpen ? "open" : ""}`}
        onClick={() => !disabled && setIsOpen(!isOpen)}
      >
        <span className={`custom-select__value ${!value ? "placeholder" : ""}`}>
          {value || placeholder}
        </span>
        <span className={`custom-select__arrow ${isOpen ? "open" : ""}`}>▼</span>
      </div>
      {isOpen && !disabled && (
        <ul className="custom-select__options">
          {options.map((option, index) => (
            <li
              key={`${option}-${index}`}
              className={`custom-select__option ${
                option === value ? "selected" : ""
              }`}
              onClick={() => handleSelect(option)}
            >
              {option}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default CustomSelect;

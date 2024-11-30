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
  const [isOpen, setIsOpen] = useState(false);
  const selectRef = useRef<HTMLDivElement>(null);

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

import { FC } from "react";
import Select from "react-select";
// import { useState } from "react";
// function useForceUpdate() {
//   const [value, setValue] = useState(0); // integer state
//   return () => setValue((value) => value + 1); // update state to force render
//   // A function that increment 👆🏻 the previous state like here
//   // is better than directly setting `setValue(value + 1)`
// }
interface ICustomSelect {
  value: string;
  label: string;
}

interface ICustomSelectProps {
  options: ICustomSelect[];
  selectedOption: string;
  onOptionChange: (option: string) => void;
  placeholder: string;
  isDisabled?: boolean;
}
// function onChange() {}
const CustomSelect: FC<ICustomSelectProps> = ({
  options,
  placeholder,
  selectedOption,
  onOptionChange,
  isDisabled,
}) => {
  return (
    <Select
      classNamePrefix="select"
      placeholder={placeholder}
      theme={(theme) => ({
        ...theme,
        // Настройте стили, используя классы с префиксом "classNamePrefix"
        styles: {
          control: (provided: any, _state: any) => ({
            ...provided,
            // Вы можете добавить пользовательские стили здесь для области управления (ввода)
          }),
          menu: (provided: any, _state: any) => ({
            ...provided,
            // Вы можете добавить пользовательские стили здесь для выпадающего меню
          }),
          option: (provided: any, _state: any) => ({
            ...provided,
            // Вы можете добавить пользовательские стили здесь для отдельных вариантов
          }),
          // Вы можете настраивать другие стили по мере необходимости
        },
      })}
      value={
        selectedOption == ""
          ? null
          : options.find((option) => option.value === selectedOption)
      }
      onChange={(selected) => onOptionChange?.(selected?.value || "")}
      options={options}
      isDisabled={isDisabled}
    />
  );
};

export default CustomSelect;

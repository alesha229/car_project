import { FC, useEffect, useState } from "react";
import CustomSelect from "../CustomSelect/CustomSelect";
import "./SearchForm.scss";
import { AppDispatch, useAppSelector } from "../../store/store";
import { fetchSelect, fetchSelectCars } from "../../store/slices/сarSlice";
import { useDispatch } from "react-redux";
import { resolvePath } from "../../utils/resolvePath";
import MainButton from "../MainButton/MainButton";
import SearchResult from "../SearchResult/SearchResult";

interface IOption {
  value: string;
  label: string;
}

const SearchForm: FC = () => {
  const [selectedBrand, setSelectedBrand] = useState<string>("");
  const [selectedModel, setSelectedModel] = useState<string>("");
  const [selectedCars, setSelectedCars] = useState<string>("");
  const [modelOptions, setModelOptions] = useState<IOption[]>([
    {
      value: "none",
      label: "none",
    },
  ]);
  const selects = useAppSelector((state) => state.cars.selects);
  const results = useAppSelector((state) => state.cars.selects);
  const dispatch = useDispatch<AppDispatch>();
  const states = {
    brand: selectedBrand,
    model: selectedModel,
    // options: modelOptions
  };
  useEffect(() => {
    dispatch(fetchSelect());
  }, []);
  useEffect(() => {
    if (selectedBrand != "") {
      setModelOptions(
        Object.keys(resolvePath(selectedBrand, selects)).map(
          (brand: string) => ({
            value: brand,
            label: brand,
          })
        )
      );
    }
    setSelectedModel("");
  }, [selectedBrand]);
  const brandOptions: IOption[] = Object.keys(selects).map((brand: string) => ({
    value: brand,
    label: brand,
  }));

  function findCar() {
    console.log(states);
    dispatch(fetchSelectCars(states));
  }
  return (
    <div className="form">
      <CustomSelect
        placeholder="Марка авто"
        options={brandOptions}
        selectedOption={selectedBrand}
        onOptionChange={setSelectedBrand}
      />
      <CustomSelect
        placeholder="Модель"
        options={modelOptions}
        selectedOption={selectedModel}
        onOptionChange={setSelectedModel}
        isDisabled={selectedBrand == "" ? true : false}
      />
      <MainButton
        onClick={() => findCar()}
        label="Поиск"
        arrow={false}
        btnStyle="SmallButton"
        link="any"
      />
    </div>
  );
};

export default SearchForm;

import { FC, useEffect, useState } from "react";
import watch from "redux-watch";
import CustomSelect from "../CustomSelect/CustomSelect";
import "./SearchForm.scss";
import { AppDispatch, store, useAppSelector } from "../../store/store";
import { fetchSelect } from "../../store/slices/сarSlice";
import { fetchSelectCars } from "../../store/slices/сarResSlice";
import { useDispatch } from "react-redux";
import { resolvePath } from "../../utils/resolvePath";
import MainButton from "../MainButton/MainButton";
import SearchResult from "../SearchResult/SearchResult";
import { ICar } from "../../types";
import { connect } from "react-redux";
interface IOption {
  value: string;
  label: string;
}
const mapStateToProps = (store: { result: { results: any } }) => ({
  results: store.result.results,
});
const SearchForm: FC = ({ results }: any) => {
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
  const selected = useAppSelector((state) => state.result.results);
  const dispatch = useDispatch<AppDispatch>();
  const states = {
    brand: selectedBrand,
    model: selectedModel,
    // options: modelOptions
  };

  // unsubscribe();
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
    dispatch(fetchSelectCars(states));
  }
  useEffect(() => {
    if (results.length > 0 && results != undefined) {
    }
  }, [results]);
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
      {}
      <SearchResult results={results} />
    </div>
  );
};

export default connect(mapStateToProps)(SearchForm);

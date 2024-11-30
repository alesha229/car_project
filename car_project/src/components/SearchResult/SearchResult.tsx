import { FC } from "react";
import CardCar from "../CardCar/CardCar";
import { ICar } from "../../types";
// import CustomSelect from "../CustomSelect/CustomSelect";
// import "./SearchResult.scss";
// import { AppDispatch, useAppSelector } from "../../store/store";
// import { fetchSelect } from "../../store/slices/сarSlice";
// import { useDispatch } from "react-redux";
// import { resolvePath } from "../../utils/resolvePath";
// import MainButton from "../MainButton/MainButton";
// import CardCar from "../CardCar/CardCar";

// interface IOption {
//   value: string;
//   label: string;
// }
interface SearchResultProps {
  results: ICar[];
}
const SearchResult: FC<SearchResultProps> = ({ results }: SearchResultProps) => {
  return (
    <div>
      {results.map((car: ICar) => (
        <CardCar key={car.id} carItem={car} />
      ))}
    </div>
  );
};

export default SearchResult;

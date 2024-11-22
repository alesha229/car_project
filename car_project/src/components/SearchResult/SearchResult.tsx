import { FC, useEffect, useState } from "react";
import CustomSelect from "../CustomSelect/CustomSelect";
import "./SearchResult.scss";
import { AppDispatch, useAppSelector } from "../../store/store";
import { fetchSelect } from "../../store/slices/сarSlice";
import { useDispatch } from "react-redux";
import { resolvePath } from "../../utils/resolvePath";
import MainButton from "../MainButton/MainButton";
import CardCar from "../CardCar/CardCar";

interface IOption {
  value: string;
  label: string;
}

const SearchResult: FC = () => {
  return <div></div>;
};

export default SearchResult;

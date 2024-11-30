import { ICar, ISelectOption } from "../../types";
import { Selects } from "../../types/select.types";

export interface ICarState {
  cars: ICar[];
  status: "loading" | "success" | "error";
}

export interface ICarResultState {
  results: ICar[];
  status: string;
}

export interface ISelectState {
  selects: Selects;
  status: "loading" | "success" | "error";
  selectedBrand: string;
  selectedModel: string;
  selectedYear: string;
  selectedBody: string;
  selectedTransmission: string;
  selectedDrive: string;
  selectedEngine: string;
  priceFrom: string;
  priceTo: string;
  mileageFrom: string;
  mileageTo: string;
  selectedVolume: string;
}

export interface IRootState {
  cars: ICarState;
  result: ICarResultState;
  select: ISelectState;
}

import { ICar, ISelectOption } from "../../types";
import { Selects } from "../../types/select.types";

export interface ICarState {
  cars: ICar[];
  status: "waiting" | "loading" | "success" | "error";
}

export interface ICarResultState {
  results: ICar[];
  currentCar: ICar | null;
  status: "waiting" | "loading" | "success" | "error";
}

export interface ISelectState {
  selects: Selects;
  status: "waiting" | "loading" | "success" | "error";
  selectedBrand: string;
  selectedModel: string;
  selectedYear: string;
  selectedBody: string;
  selectedTransmission: string;
  selectedDrive: string;
  selectedEngine: string;
  selectedVolume: string;
  priceFrom: string;
  priceTo: string;
  mileageFrom: string;
  mileageTo: string;
}

export interface IRootState {
  cars: ICarState;
  result: ICarResultState;
  select: ISelectState;
}

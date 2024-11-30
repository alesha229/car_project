export interface ISelectOption {
  name: string;
  models: string[];
}

export interface Selects {
  brands: ISelectOption[];
  years: string[];
  bodyTypes: string[];
  transmissions: string[];
  driveTypes: string[];
  engineTypes: string[];
  volumes: string[];
  prices: string[];
  mileages: string[];
}

export interface Car {
  id: number;
  brand: string;
  model: string;
  year: string;
  bodyType: string;
  transmission: string;
  driveType: string;
  engineType: string;
  volume: string;
  price: string;
  mileage: string;
  image: string;
}

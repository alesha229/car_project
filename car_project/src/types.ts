export interface ICar {
  img: any;
  mileage: number;
  carType: string;
  transmissionType: string;
  engineType: string;
  power: string;
  liters: string;
  id: number;
  brand: string;
  model: string;
  price: number;
  year: number;
}

export interface ISelectOption {
  [key: string]: string | ISelectOption;
}

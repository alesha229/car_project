export interface ICar {
  id: number;
  brand: string;
  model: string;
  price: number;
  year: number;
}

export interface ISelectOption {
  [key: string]: string | ISelectOption;
}

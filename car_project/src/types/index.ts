// Car interfaces
export interface ICar {
  id: number;
  brand: string;
  model: string;
  year: number;
  mileage: number;
  liters: string;
  power: string;
  engineType: string;
  transmissionType: string;
  carType: string;
  price: number;
  img: string;
  condition: 'new' | 'used';
  isLiked?: boolean;
  isCompare?: boolean;
  isDescription?: boolean;
  isHide?: boolean;
}

// Select interfaces
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

// Button interfaces
export interface IMainButtonProps {
  action?: (parameters: string) => void;
  label: string;
  arrow: boolean;
  btnStyle: string;
  link: string;
}

// Car filters
export interface ICarFilters {
  brand?: string;
  model?: string;
  year?: number;
  priceMin?: number;
  priceMax?: number;
  mileageMin?: number;
  mileageMax?: number;
  engineType?: string;
  transmissionType?: string;
  carType?: string;
}

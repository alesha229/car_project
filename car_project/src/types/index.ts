export interface ICar {
	id: number
	name: string
	year: number
	mileage: number
	liters: number
	power: number
	engineType: string
	transmissionType: string
	carType: string
	price: string
	img: string
	isLiked: boolean
	isCompare: boolean
	isDescription: boolean
	isHide: boolean
}

export interface ISelectOption {
  [brand: string]: {
    [model: string]: {
      years: string[];
      body: string[];
      transmission: string[];
      engine: string[];
      drive: string[];
      volume: string[];
    };
  };
}
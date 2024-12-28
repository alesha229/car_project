<<<<<<< HEAD
<<<<<<< HEAD
=======
=======
<<<<<<< HEAD
>>>>>>> 642d4c4 (Revert "hamburger menu")
import { FC, useEffect, useState, ChangeEvent } from "react";
import CustomSelect from "../CustomSelect/CustomSelect";
import "./SearchForm.scss";
import { useAppDispatch, useAppSelector } from "../../store/store";
import { fetchSelectCars, SearchStates } from "../../store/slices/сarResSlice";
import { fetchSelect, setSelectedBrand, setSelectedModel, setSelectedYear, setSelectedBody, setSelectedTransmission, setSelectedDrive, setSelectedEngine, setPriceFrom, setPriceTo, setMileageFrom, setMileageTo, setSelectedVolume } from "../../store/slices/selectSlice";
import { ISelectOption, Selects } from "../../types";
import MainButton from "../MainButton/MainButton";
import SearchResult from "../SearchResult/SearchResult";
import { ICar } from "../../types";
import favoriteFind from "./img/favoriteFind.png";
import Loader from "../Loader/Loader";
=======
<<<<<<< HEAD
=======
>>>>>>> d2b70c6 (Revert "hamburger menu")
>>>>>>> 642d4c4 (Revert "hamburger menu")
import { FC, useEffect, useState } from 'react'
import CustomSelect from '../CustomSelect/CustomSelect'
import './SearchForm.scss'
import { AppDispatch, useAppSelector } from '../../store/store'
import { fetchSelect } from '../../store/slices/сarSlice'
import { useDispatch } from 'react-redux'
<<<<<<< HEAD
>>>>>>> parent of b008c1d (hamburger menu)
=======
<<<<<<< HEAD
import { resolvePath } from '../../utils/resolvePath'
=======
>>>>>>> parent of b008c1d (hamburger menu)
>>>>>>> d2b70c6 (Revert "hamburger menu")
>>>>>>> 642d4c4 (Revert "hamburger menu")

interface SearchFormProps {
  results?: ICar[];
}

<<<<<<< HEAD
<<<<<<< HEAD
const SearchForm: FC<SearchFormProps> = ({ results = [] }) => {
  const dispatch = useAppDispatch();
  const {
    selects,
    selectedBrand,
    selectedModel,
    selectedYear,
    selectedBody,
    selectedTransmission,
    selectedDrive,
    selectedEngine,
    selectedVolume,
    priceFrom,
    priceTo,
    mileageFrom,
    mileageTo,
  } = useAppSelector((state) => state.select);
  const { results: searchResults, status } = useAppSelector((state) => state.result);

  useEffect(() => {
    dispatch(fetchSelect());
  }, [dispatch]);
=======
=======
>>>>>>> 642d4c4 (Revert "hamburger menu")
const SearchForm: FC = () => {
	const [selectedBrand, setSelectedBrand] = useState<string>('')
	const [selectedModel, setSelectedModel] = useState<any>('')
	const [modelOptions, setModelOptions] = useState<IOption[]>([
			{
				"value": "none",
				"label": "none"
			}
		])
	const selects = useAppSelector(state => state.cars.selects)
	const dispatch = useDispatch<AppDispatch>()
	
	useEffect(() => {
		dispatch(fetchSelect())
	}, [])
	function resolvePath(path: string | string[], obj: any, separator = '.') { const properties = Array.isArray(path) ? path : path.split(separator); return properties.reduce((prev, curr) => prev && prev[curr], obj); }
	useEffect(() => {
		if(selectedBrand!=''){
		setModelOptions(
		Object.keys(resolvePath(selectedBrand, selects)).map((brand: string) => ({
			value: brand,
			label: brand,
		}),))
		}
		setSelectedModel("")
<<<<<<< HEAD
		console.log(selectedModel)
=======
=======
<<<<<<< HEAD
const SearchForm: FC<SearchFormProps> = ({ results = [] }) => {
  const dispatch = useAppDispatch();
  const {
    selects,
    selectedBrand,
    selectedModel,
    selectedYear,
    selectedBody,
    selectedTransmission,
    selectedDrive,
    selectedEngine,
    selectedVolume,
    priceFrom,
    priceTo,
    mileageFrom,
    mileageTo,
  } = useAppSelector((state) => state.select);
  const { results: searchResults, status } = useAppSelector((state) => state.result);

  useEffect(() => {
    dispatch(fetchSelect());
  }, [dispatch]);
=======
const SearchForm: FC = () => {
	const [selectedBrand, setSelectedBrand] = useState<string>('')
	const [selectedModel, setSelectedModel] = useState<any>('')
	const [modelOptions, setModelOptions] = useState<IOption[]>([
			{
				"value": "none",
				"label": "none"
			}
		])
	const selects = useAppSelector(state => state.cars.selects)
	const dispatch = useDispatch<AppDispatch>()
	
	useEffect(() => {
		dispatch(fetchSelect())
	}, [])
	function resolvePath(path: string | string[], obj: any, separator = '.') { const properties = Array.isArray(path) ? path : path.split(separator); return properties.reduce((prev, curr) => prev && prev[curr], obj); }
	useEffect(() => {
		if(selectedBrand!=''){
		setModelOptions(
		Object.keys(resolvePath(selectedBrand, selects)).map((brand: string) => ({
			value: brand,
			label: brand,
		}),))
		}
		setSelectedModel("")
		console.log(selectedModel)
>>>>>>> d2b70c6 (Revert "hamburger menu")
>>>>>>> 642d4c4 (Revert "hamburger menu")
	}, [selectedBrand])
	const brandOptions: IOption[] = Object.keys(selects).map((brand: string) => ({
		value: brand,
		label: brand,
	}),)
<<<<<<< HEAD
	console.log(selects)
	
=======
<<<<<<< HEAD
=======
	console.log(selects)
	

>>>>>>> parent of b008c1d (hamburger menu)
>>>>>>> d2b70c6 (Revert "hamburger menu")
>>>>>>> 642d4c4 (Revert "hamburger menu")

>>>>>>> parent of b008c1d (hamburger menu)

<<<<<<< HEAD
  const getFilteredModels = () => {
    if (!selectedBrand || !selects) return [];
    const brand = selects.brands.find((b: ISelectOption) => b.name === selectedBrand);
    return brand?.models ?? [];
  };

<<<<<<< HEAD
  const handleBrandChange = (value: string): void => {
    dispatch(setSelectedBrand(value));
    dispatch(setSelectedModel("")); // Reset model when brand changes
  };

  const handleModelChange = (value: string): void => {
    dispatch(setSelectedModel(value));
  };
=======
=======
<<<<<<< HEAD
>>>>>>> 642d4c4 (Revert "hamburger menu")
	return (
		<div className='form'>
			<CustomSelect
				placeholder='Марка авто'
				options={brandOptions}
				selectedOption={selectedBrand}
				onOptionChange={setSelectedBrand}
			/>
			<CustomSelect
				placeholder='Модель'
				options={modelOptions}
				selectedOption={selectedModel}
				onOptionChange={setSelectedModel}
				isDisabled={(selectedBrand == '') ? true:false}
			/>
		</div>
	)
}
<<<<<<< HEAD
>>>>>>> parent of b008c1d (hamburger menu)
=======
=======
<<<<<<< HEAD
  const handleBrandChange = (value: string): void => {
    dispatch(setSelectedBrand(value));
    dispatch(setSelectedModel("")); // Reset model when brand changes
  };

  const handleModelChange = (value: string): void => {
    dispatch(setSelectedModel(value));
  };
=======
	return (
		<div className='form'>
			<CustomSelect
				placeholder='Марка авто'
				options={brandOptions}
				selectedOption={selectedBrand}
				onOptionChange={setSelectedBrand}
			/>
			<CustomSelect
				placeholder='Модель'
				options={modelOptions}
				selectedOption={selectedModel}
				onOptionChange={setSelectedModel}
				isDisabled={(selectedBrand == '') ? true:false}
			/>
		</div>
	)
}
>>>>>>> parent of b008c1d (hamburger menu)
>>>>>>> d2b70c6 (Revert "hamburger menu")
>>>>>>> 642d4c4 (Revert "hamburger menu")

  const handleYearChange = (value: string): void => {
    dispatch(setSelectedYear(value));
  };

  const handleBodyChange = (value: string): void => {
    dispatch(setSelectedBody(value));
  };

  const handleTransmissionChange = (value: string): void => {
    dispatch(setSelectedTransmission(value));
  };

  const handleDriveChange = (value: string): void => {
    dispatch(setSelectedDrive(value));
  };

  const handleEngineChange = (value: string): void => {
    dispatch(setSelectedEngine(value));
  };

  const handleVolumeChange = (value: string): void => {
    dispatch(setSelectedVolume(value));
  };

  const handlePriceFromChange = (value: string): void => {
    dispatch(setPriceFrom(value));
  };

  const handlePriceToChange = (value: string): void => {
    dispatch(setPriceTo(value));
  };

  const handleMileageFromChange = (value: string): void => {
    dispatch(setMileageFrom(value));
  };

  const handleMileageToChange = (value: string): void => {
    dispatch(setMileageTo(value));
  };

  const [activeTab, setActiveTab] = useState('all');

  const handleTabClick = (tab: string) => {
    const buttons = document.querySelectorAll('.search-tabs__item');
    const indicator = document.querySelector('.search-tabs__indicator');
    const activeButton = Array.from(buttons).find(button => 
      button.textContent?.trim() === (tab === 'all' ? 'Все' : tab === 'new' ? 'Новые' : 'С пробегом')
    );

    if (activeButton && indicator) {
      const buttonRect = activeButton.getBoundingClientRect();
      const tabsRect = activeButton.parentElement?.getBoundingClientRect();
      
      if (tabsRect) {
        const left = buttonRect.left - tabsRect.left;
        (indicator as HTMLElement).style.left = `${left}px`;
        (indicator as HTMLElement).style.width = `${buttonRect.width}px`;
      }
    }
    
    setActiveTab(tab);
  };

  useEffect(() => {
    // Установка начальной позиции индикатора
    handleTabClick('all');
  }, []);

  function findCar(e: React.FormEvent) {
    e.preventDefault();
    
    const searchParams: SearchStates = {
      brand: selectedBrand,
      model: selectedModel,
      year: selectedYear,
      bodyType: selectedBody,
      transmission: selectedTransmission,
      driveType: selectedDrive,
      engineType: selectedEngine,
      volume: selectedVolume,
      priceFrom: priceFrom,
      priceTo: priceTo,
      mileageFrom: mileageFrom,
      mileageTo: mileageTo,
      condition: activeTab === 'new' ? 'new' : activeTab === 'used' ? 'used' : activeTab === 'all' ? 'all' : undefined 
    };

    try {
      dispatch(fetchSelectCars(searchParams));
    } catch (error) {
      console.error('Error during search:', error);
      // Здесь можно добавить отображение ошибки пользователю
    }
  }

  return (
    <div className="search-container">
      <div className="search-header">
        <div className="search-tabs">
          <button 
            className={`search-tabs__item ${activeTab === 'all' ? 'search-tabs__item--active' : ''}`}
            onClick={() => handleTabClick('all')}
          >
            Все
          </button>
          <button 
            className={`search-tabs__item ${activeTab === 'new' ? 'search-tabs__item--active' : ''}`}
            onClick={() => handleTabClick('new')}
          >
            Новые
          </button>
          <button 
            className={`search-tabs__item ${activeTab === 'used' ? 'search-tabs__item--active' : ''}`}
            onClick={() => handleTabClick('used')}
          >
            С пробегом
          </button>
          <div className="search-tabs__indicator"></div>
        </div>
        <button className="search-save">
          <img src={favoriteFind} alt="Save search" />
          Сохранить поиск
        </button>
      </div>
      <form className="search-form" onSubmit={findCar}>
        <div className="search-form__main">
          <div className="search-form__row">
            <CustomSelect
              options={selects?.brands?.map(brand => brand.name) ?? []}
              value={selectedBrand}
              onChange={handleBrandChange}
              placeholder="Марка"
            />
            <CustomSelect
              options={getFilteredModels()}
              value={selectedModel}
              onChange={handleModelChange}
              placeholder="Модель"
              disabled={!selectedBrand}
            />
            <CustomSelect
              options={selects?.years ?? []}
              value={selectedYear}
              onChange={handleYearChange}
              placeholder="Год выпуска"
            />
          </div>
          <div className="search-form__row">
            <CustomSelect
              options={selects?.bodyTypes ?? []}
              value={selectedBody}
              onChange={handleBodyChange}
              placeholder="Кузов"
            />
            <CustomSelect
              options={selects?.transmissions ?? []}
              value={selectedTransmission}
              onChange={handleTransmissionChange}
              placeholder="Коробка передач"
            />
            <CustomSelect
              options={selects?.driveTypes ?? []}
              value={selectedDrive}
              onChange={handleDriveChange}
              placeholder="Привод"
            />
          </div>
        </div>
        <div className="search-form__additional">
          <div className="search-form__row">
            <CustomSelect
              options={selects?.engineTypes ?? []}
              value={selectedEngine}
              onChange={handleEngineChange}
              placeholder="Двигатель"
            />
            <CustomSelect
              options={selects?.volumes ?? []}
              value={selectedVolume}
              onChange={handleVolumeChange}
              placeholder="Объем"
            />
          </div>
          <div className="search-form__row">
            <div className="search-form__price">
              <CustomSelect
                options={selects?.prices ?? []}
                value={priceFrom}
                onChange={handlePriceFromChange}
                placeholder="Цена от"
              />
              <CustomSelect
                options={selects?.prices ?? []}
                value={priceTo}
                onChange={handlePriceToChange}
                placeholder="до"
              />
            </div>
            <div className="search-form__mileage">
              <CustomSelect
                options={selects?.mileages ?? []}
                value={mileageFrom}
                onChange={handleMileageFromChange}
                placeholder="Пробег от"
              />
              <CustomSelect
                options={selects?.mileages ?? []}
                value={mileageTo}
                onChange={handleMileageToChange}
                placeholder="до"
              />
            </div>
          </div>
        </div>
        <button type="submit" className="search-form__submit">
          Показать предложения
        </button>
      </form>
      {status === 'loading' && searchResults.length === 0 ? (
        <Loader />
      ) : (
        <SearchResult results={searchResults} />
      )}
    </div>
  );
};

export default SearchForm;

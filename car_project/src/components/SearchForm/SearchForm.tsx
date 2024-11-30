import { FC, useEffect, useState, ChangeEvent } from "react";
import CustomSelect from "../CustomSelect/CustomSelect";
import "./SearchForm.scss";
import { useAppDispatch, useAppSelector } from "../../store/store";
import { fetchSelectCars, SearchStates } from "../../store/slices/сarResSlice";
import { fetchSelect, setSelectedBrand, setSelectedModel, setSelectedYear, setSelectedBody, setSelectedTransmission, setSelectedDrive, setSelectedEngine, setPriceFrom, setPriceTo, setMileageFrom, setMileageTo, setSelectedVolume } from "../../store/slices/selectSlice";
import { ISelectOption, Selects } from "../../types/select.types";
import MainButton from "../MainButton/MainButton";
import SearchResult from "../SearchResult/SearchResult";
import { ICar } from "../../types";
import favoriteFind from "./img/favoriteFind.png";

interface SearchFormProps {
  results?: ICar[];
}

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

  useEffect(() => {
    dispatch(fetchSelect());
  }, [dispatch]);

  const getFilteredModels = () => {
    if (!selectedBrand || !selects) return [];
    const brand = selects.brands.find((b: ISelectOption) => b.name === selectedBrand);
    return brand?.models ?? [];
  };

  const handleBrandChange = (value: string): void => {
    dispatch(setSelectedBrand(value));
    dispatch(setSelectedModel("")); // Reset model when brand changes
  };

  const handleModelChange = (value: string): void => {
    dispatch(setSelectedModel(value));
  };

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

  function findCar() {
    dispatch(fetchSelectCars({ brand: selectedBrand, model: selectedModel } as SearchStates));
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
      <form className="search-form">
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
        <button type="submit" className="search-form__submit" onClick={findCar}>
          Показать предложения
        </button>
      </form>
      <SearchResult results={results} />
    </div>
  );
};

export default SearchForm;

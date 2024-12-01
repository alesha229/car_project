import { FC, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useAppDispatch, useAppSelector } from '../../store/store';
import { fetchCarById } from '../../store/slices/сarResSlice';
import './CarDetails.scss';
import MainButton from '../MainButton/MainButton';
import Loader from '../Loader/Loader';

const CarDetails: FC = () => {
  const { id } = useParams();
  const dispatch = useAppDispatch();
  const { currentCar, status } = useAppSelector((state) => state.result);

  useEffect(() => {
    if (id) {
      dispatch(fetchCarById(id));
    }
  }, [dispatch, id]);

  if (status === 'loading') {
    return <Loader />;
  }

  if (!currentCar) {
    return <div className="car-details__not-found">Автомобиль не найден</div>;
  }

  return (
    <div className="car-details">
      <div className="car-details__header">
        <h1>{currentCar.brand} {currentCar.model}</h1>
        <div className="car-details__price">{currentCar.price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, " ")} ₽</div>
      </div>

      <div className="car-details__content">
        <div className="car-details__main">
          <div className="car-details__image-section">
            <div 
              className="car-details__image" 
              style={{ backgroundImage: `url(${currentCar.img})` }}
            />
            <div className="car-details__actions">
             
              <div className="car-details__buttons">
                <button className="action-button like">
                  <span className="icon" />
                  <span>В избранное</span>
                </button>
                <button className="action-button compare">
                  <span className="icon" />
                  <span>Сравнить</span>
                </button>
                <button className="action-button share">
                  <span className="icon" />
                  <span>Поделиться</span>
                </button>
                <MainButton
                label="Купить"
                arrow={true}
                btnStyle="MainButton"
                link={`/order/${currentCar.id}`}
              />
              </div>
            </div>
          </div>

          <div className="car-details__sections">
            <div className="car-details__section">
              <h2>Описание</h2>
              <div className="car-details__description">
                <p>
                  <strong>{currentCar.brand} {currentCar.model}</strong> {currentCar.year} года выпуска в отличном состоянии. 
                  Автомобиль {currentCar.condition === 'new' ? 'новый' : 'с пробегом'}, 
                  {currentCar.condition === 'new' 
                    ? ' приобретен у официального дилера.' 
                    : <> пробег всего <strong>{currentCar.mileage.toString().replace(/\B(?=(\d{3})+(?!\d))/g, " ")}</strong> км.</>}
                </p>
                <div className="car-details__description-points">
                  <h3>Преимущества автомобиля</h3>
                  <ul>
                    <li>Мощный <strong>{currentCar.engineType}</strong> двигатель {currentCar.liters}л (<strong>{currentCar.power} л.с.</strong>)</li>
                    <li>Современная <strong>{currentCar.transmissionType}</strong> коробка передач</li>
                    <li>Комфортный <strong>{currentCar.carType.toLowerCase()}</strong> для любых поездок</li>
                    {currentCar.condition === 'new' && <li>Полная <strong>заводская гарантия</strong> от производителя</li>}
                    {currentCar.condition === 'used' && <li>Полная <strong>история обслуживания</strong> у официального дилера</li>}
                  </ul>
                </div>
              </div>
            </div>

            <div className="car-details__section">
              <h2>Комплектация</h2>
              <div className="car-details__features">
                <div className="features-group">
                  <h3>Безопасность</h3>
                  <ul>
                    <li>Антиблокировочная система (ABS)</li>
                    <li>Система стабилизации (ESP)</li>
                    <li>Подушки безопасности</li>
                    <li>Система контроля давления в шинах</li>
                    <li>Датчики парковки</li>
                  </ul>
                </div>
                <div className="features-group">
                  <h3>Комфорт</h3>
                  <ul>
                    <li>Климат-контроль</li>
                    <li>Подогрев сидений</li>
                    <li>Электропривод зеркал</li>
                    <li>Мультимедийная система</li>
                    <li>Bluetooth</li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="car-details__section">
              <h2>Условия покупки</h2>
              <div className="car-details__terms">
                <div className="terms-item">
                  <h3>Кредит</h3>
                  <p>Первоначальный взнос от 10%</p>
                  <p>Ставка от 6.9% годовых</p>
                  <p>Срок до 7 лет</p>
                </div>
                <div className="terms-item">
                  <h3>Trade-in</h3>
                  <p>Принимаем ваш автомобиль в зачет</p>
                  <p>Оценка за 30 минут</p>
                  <p>Специальные условия обмена</p>
                </div>
                <div className="terms-item">
                  <h3>Гарантия</h3>
                  <p>{currentCar.condition === 'new' ? 'Заводская гарантия 3 года' : 'Гарантия 1 год'}</p>
                  <p>Полная юридическая проверка</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="car-details__sidebar">
          <div className="car-details__info">
            <div className="car-details__section">
              <h2>Характеристики</h2>
              <div className="car-details__specs">
                <div className="spec-item">
                  <span className="label">Состояние</span>
                  <span className="value">{currentCar.condition === 'new' ? 'Новый' : 'С пробегом'}</span>
                </div>
                <div className="spec-item">
                  <span className="label">Год выпуска</span>
                  <span className="value">{currentCar.year}</span>
                </div>
                <div className="spec-item">
                  <span className="label">Пробег</span>
                  <span className="value">{currentCar.mileage.toString().replace(/\B(?=(\d{3})+(?!\d))/g, " ")} км</span>
                </div>
                <div className="spec-item">
                  <span className="label">Двигатель</span>
                  <span className="value">{currentCar.engineType}, {currentCar.liters}л</span>
                </div>
                <div className="spec-item">
                  <span className="label">Мощность</span>
                  <span className="value">{currentCar.power} л.с.</span>
                </div>
                <div className="spec-item">
                  <span className="label">Коробка</span>
                  <span className="value">{currentCar.transmissionType}</span>
                </div>
                <div className="spec-item">
                  <span className="label">Тип кузова</span>
                  <span className="value">{currentCar.carType}</span>
                </div>
              </div>
            </div>

            <div className="car-details__section">
              <h2>Контакты</h2>
              <div className="car-details__contacts">
                <div className="contact-item">
                  <span className="label">Телефон</span>
                  <a href="tel:+78005553535" className="value">8 (800) 555-35-35</a>
                </div>
                <div className="contact-item">
                  <span className="label">Email</span>
                  <a href="mailto:info@autodrive.ru" className="value">info@autodrive.ru</a>
                </div>
                <div className="contact-item">
                  <span className="label">Адрес</span>
                  <span className="value">г. Москва, ул. Автомобильная, 1</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CarDetails;

import './CardCar.scss'
import MainButton from '../MainButton/MainButton'

function CardCar(CarOptions: any) {
	const car = CarOptions.CarOptions

	const carImg: React.CSSProperties = {
		backgroundImage: `url(${Car.img})`,
	}

	return (
		<>
			<div className='CardCar'>
				<div className='CarImg' style={carImg}></div>
				<div className='CarOptions'>
					<div className='CarFirstRow'>
						<div className='CarName'>{car.name}</div>

						<div className='SecondOptions'>
							{car.liters}/{car.Power} л.с/{car.engineType}
							<br />
							{car.transmissionType}
							<br />
							{car.carType}
						</div>
						<div className='Price'>{car.price} ₽</div>
						<MainButton
							onClick={() => console.log('1')}
							label='Купить'
							arrow={false}
							btnStyle='SmallButton'
							link='any'
						/>
					</div>
					<div className='CarSecondRow'>
						<div className='FirstOptions'>
							{car.year} <br />
							{car.mileage} км
						</div>
						<div className='CarButtonStore'>
							<div className='CarLike'></div>
							<div className='CarCompare'></div>
							<div className='CarWrite'></div>
							<div className='CarHide'></div>
						</div>
					</div>
				</div>
			</div>
		</>
	)
}

export default CardCar

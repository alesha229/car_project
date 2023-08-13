import './CardCar.scss'
import MainButton from '../MainButton/MainButton'

function CardCar(CarOptions: any) {
	const Car = CarOptions.CarOptions
	const carImg: React.CSSProperties = {
		backgroundImage: `url(${Car.img})`,
	}
	return (
		<>
			<div className='CardCar'>
				<div className='CarImg' style={carImg}></div>
				<div className='CarOptions'>
					<div className='CarFirstRow'>
						<div className='CarName'>{Car.name}</div>

						<div className='SecondOptions'>
							{Car.liters}/{Car.Power} л.с/{Car.engineType}
							<br />
							{Car.transmissionType}
							<br />
							{Car.carType}
						</div>
						<div className='Price'>{Car.price} ₽</div>
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
							{Car.year} <br />
							{Car.mileage} км
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

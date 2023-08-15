import Menu from './components/Menu/Menu'
import MainSection from './components/MainSection/MainSection'
import './App.scss'
import { Routes, Route } from 'react-router-dom'

// json-server -w src/data/db.json

function App() {
	return (
		<>
			<Menu />
			<Routes>
				<Route path='/' element={<MainSection />} />
				<Route path='/search-car' element={<Menu />} />
			</Routes>
		</>
	)
}

export default App

import Menu from './components/Menu/Menu.tsx'
import MainSection from './components/MainSection/MainSection.tsx'
import './App.scss'
import { Routes, Route } from 'react-router-dom'

// json-server -w src/data/db.json

function App() {
	return (
		<>
			<Menu />
			<Routes>
				<Route path='/' element={<MainSection />} />
				<Route path='/search-car' element={<MainSection />} />
			</Routes>
		</>
	)
}

export default App

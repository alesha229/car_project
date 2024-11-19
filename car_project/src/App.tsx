import Menu from './components/Menu/Menu'
import MainSection from './components/MainSection/MainSection'
import './App.scss'
import { Routes, Route } from 'react-router-dom'
import SearchForm from './components/SearchForm/SearchForm'

// json-server -w src/data/db.json

function App() {
	return (
		<>
			<Menu />
			<Routes>
				<Route path='/' element={<MainSection />} />
				<Route path='/search-car' element={<SearchForm />} />
			</Routes>
		</>
	)
}

export default App

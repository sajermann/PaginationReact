import { useState } from 'react';
import './App.css';
import Pagination1 from './Components/Pagination1';
import Pagination2 from './Components/Pagination2';
import { ContextProvider } from './Context';
// Ajustar depois
function App() {
	const [currentPage, setCurrentPage] = useState(1);
	const [darkMode, setDarkMode] = useState(true);

	function handlePage(data: number) {
		setCurrentPage(data);
	}

	return (
		<ContextProvider darkMode={darkMode} setDarkMode={setDarkMode}>
			<div className="App">
				<Pagination1
					totalPages={1}
					siblingCount={2}
					currentPage={currentPage}
					onChange={handlePage}
				/>
				<Pagination2
					totalPages={6}
					siblingCount={2}
					currentPage={currentPage}
					onChange={handlePage}
				/>
			</div>
		</ContextProvider>
	);
}

export default App;

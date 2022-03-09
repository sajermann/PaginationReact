import { useState } from 'react'
import './App.css'
import Pagination1 from './Components/Pagination1'
import Pagination2 from './Components/Pagination2'

function App() {
  const [currentPage, setCurrentPage] = useState(1)

  function handlePage(data:number){
    setCurrentPage(data)
  }

  return (
    <div className="App">
      <Pagination1 totalPages={6} siblingCount={2} currentPage={currentPage} onChange={handlePage} />
      <Pagination2 totalPages={6} siblingCount={2} currentPage={currentPage} onChange={handlePage} />
    </div>
  )
}

export default App

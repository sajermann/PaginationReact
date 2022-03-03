import { useState } from 'react'
import './App.css'
import Pagination from './Components/Pagination'

function App() {
  const [currentPage, setCurrentPage] = useState(6)

  function handlePage(data:number){
    setCurrentPage(data)
  }

  return (
    <div className="App">
      <Pagination totalPages={60} siblingCount={2} currentPage={currentPage} onChange={handlePage} />
    </div>
  )
}

export default App

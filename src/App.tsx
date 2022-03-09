import { useState } from 'react'
import './App.css'
import Pagination from './Components/Pagination'

function App() {
  const [currentPage, setCurrentPage] = useState(1)

  function handlePage(data:number){
    setCurrentPage(data)
  }

  return (
    <div className="App">
      <Pagination totalPage={6} siblingCount={2} currentPage={currentPage} onChange={handlePage} />
    </div>
  )
}

export default App

// import { useState } from 'react'
import './App.css'
import Sidebar from './mainsection/sidebar'
import MainSection from './mainsection/mainSection'
import { BrowserRouter, Routes, Route, Outlet } from 'react-router-dom'
import MainPage from './mainPage'
import Purchase from './mainsection/pages/purchase'
import Production from './mainsection/pages/production'
import Stock from './mainsection/pages/stock'
import { Products } from './mainsection/products/products'

function App() {
  // const [count, setCount] = useState(0)

  return (
    <BrowserRouter>
        <Routes>
          <Route path='/' element={<Sidebar />}>
             <Route index element={<MainPage />} />
             <Route path='stock' element={<Stock />} />
             <Route path='products' element={<Products />} />
             <Route path='production' element={<Production />} />
             <Route path='purchase' element={<Purchase />} />
          </Route>
        </Routes>
    </BrowserRouter>

  )
}

export default App

// <div className="w-[200px] px-3 py-6 border-e border-gray-300  "> 
// <Sidebar />
// </div>
// <div className='flex-1'>
// <MainSection />
// </div>
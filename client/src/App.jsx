import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Route, Routes } from 'react-router-dom'
import ClientLayout from './layouts/client'
import Home from './pages/client/home'
import Wishlist from './pages/client/wishlist'
import Basket from './pages/client/basket'
import AdminLayout from './layouts/admin'
import AdminHome from './pages/admin/home'
import NotFound from './pages/notfound'
import ProductDetail from './pages/client/productdetail'
import 'bootstrap/dist/css/bootstrap.min.css';
import AddDelete from './pages/admin/adddelete'

function App() {

  return (
    <>
      <Routes>
        <Route path='/' element={<ClientLayout />}>
          <Route index element={<Home />} />
          <Route path='/wishlist' element={<Wishlist />} />
          <Route path='/:id' element={<ProductDetail />} />
          <Route path='/basket' element={<Basket />} />
        </Route>
        <Route path='/admin' element={<AdminLayout />}>
          <Route index element={<AdminHome />} />
          <Route path='/admin/add-delete' element={<AddDelete />} />

        </Route>

        <Route path='*' element={<NotFound />} />
      </Routes>
    </>
  )
}

export default App

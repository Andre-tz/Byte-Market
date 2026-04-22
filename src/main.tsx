import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import "./i18n/index.ts"
import Home from './components/pages/Home.tsx'
import Catalog from './components/pages/Catalog.tsx'
import Cart from './components/pages/Cart.tsx'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import CartProvider from './providers/CartProvider.tsx'
import Laptops from './components/pages/Laptops.tsx'
import Components from './components/pages/Components.tsx'
import Peripherals from './components/pages/Peripherals.tsx'
import Offers from './components/pages/Offers.tsx'
import SearchPage from './components/pages/SearchPage.tsx'

createRoot(document.getElementById('root')!).render(
    <CartProvider>
        <BrowserRouter>
            <Routes>
                <Route path='/' element= {<App />}>
                    <Route index element={<Home/>} />
                    <Route path='catalog' element={<Catalog/>} />
                    <Route path='laptops' element={<Laptops/>} />
                    <Route path='components' element={<Components/>} />
                    <Route path='peripherals' element={<Peripherals/>} />
                    <Route path='offers' element={<Offers/>} />
                    <Route path='search' element={<SearchPage/>} />
                    <Route path='cart' element={<Cart/>} />
                </Route>
            </Routes>
        </BrowserRouter>        
    </CartProvider>
)

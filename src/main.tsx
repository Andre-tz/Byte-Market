import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import "./i18n/index.ts"
import Home from './components/pages/Home.tsx'
import Catalog from './components/pages/Catalog.tsx'
import Cart from './components/pages/Cart.tsx'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import CartProvider from './providers/CartProvider.tsx'

createRoot(document.getElementById('root')!).render(
    <CartProvider>
        <BrowserRouter>
            <Routes>
                <Route path='/' element= {<App />}>
                    <Route index element={<Home/>} />
                    <Route path='catalog' element={<Catalog/>} />
                    <Route path='cart' element={<Cart/>} />
                </Route>
            </Routes>
        </BrowserRouter>        
    </CartProvider>
)

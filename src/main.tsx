import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import "./i18n/index.ts"
import Home from './components/pages/Home.tsx'
import Catalog from './components/pages/Catalog.tsx'
import { BrowserRouter, Route, Routes } from 'react-router-dom'

createRoot(document.getElementById('root')!).render(
    <BrowserRouter>
        <Routes>
            <Route path='/' element= {<App />}>
                <Route index element={<Home/>} />
                <Route path='catalog' element={<Catalog/>} />
            </Route>
        </Routes>
    </BrowserRouter>
)

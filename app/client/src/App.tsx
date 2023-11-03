import React from 'react'
import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import SelectWash from './pages/SelectWash'
import Layout from './pages/Layout'

function App() {
    return (
        <div className="App">
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<Layout />}>
                        <Route index element={<SelectWash />} />
                    </Route>
                </Routes>
            </BrowserRouter>
        </div>
    )
}

export default App

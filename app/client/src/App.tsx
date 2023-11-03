import React, { useEffect } from 'react'
import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import SelectWash from './pages/SelectWash'
import Layout from './pages/Layout'

function App() {
    useEffect(() => {
        function handleResize() {
            const viewportWidth = window.innerWidth
            const viewportHeight = window.innerHeight
            const scaleX = viewportWidth / 1024 // 1024 is the base width set in the CSS
            const scaleY = viewportHeight / 600 // 600 is the base height set in the CSS
            const scale = Math.min(scaleX, scaleY)
            console.log(viewportWidth)
            console.log(scaleX)
            console.log(scaleY)
            const container = document.querySelector('.App') as HTMLElement

            container!.style.transform = `scale(${scale})`
        }

        handleResize()
        window.addEventListener('resize', handleResize)

        return () => {
            window.removeEventListener('resize', handleResize)
        }
    }, [])
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

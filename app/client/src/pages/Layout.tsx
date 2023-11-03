import React from 'react'
import { Outlet } from 'react-router-dom'

const Layout: React.FC = () => (
    <div id="layout">
        <Outlet />
    </div>
)

export default Layout

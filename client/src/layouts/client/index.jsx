import React from 'react'
import ClientHeader from './header'
import ClientFooter from './footer'
import { Outlet } from 'react-router-dom'

const ClientLayout = () => {
    return (
        <>
            <ClientHeader />
            <Outlet />
            <ClientFooter />
        </>
    )
}

export default ClientLayout
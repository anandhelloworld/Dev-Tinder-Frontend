import React from 'react'
import { Navbar } from './Navbar'
import { Outlet } from 'react-router'
import { Footer } from './Footer'

export const Body = () => {
    return (
        <div className=''>
            <Navbar />
            <div  className='flex justify-center items-center'>
                <Outlet />
            </div>
            <Footer />
        </div>
    )
}

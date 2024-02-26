import React from 'react'
import Header from './Home/Header'
import { Outlet } from "react-router-dom";
import Footer from './Home/Footer';

const Layout = () => {
  return (
    <>
    <Header />
    <Outlet />
    <Footer />
    </>
  )
}

export default Layout

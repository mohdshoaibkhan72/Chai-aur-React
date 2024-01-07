import { Outlet } from "react-router-dom";
import Header from "./components/Header/Header"
import Footer from "./components/footer/Footer"
import React from "react";
function Layout() {
    return <>

        <Header></Header>
        <Outlet />
        <Footer />

    </>
}
export default Layout;
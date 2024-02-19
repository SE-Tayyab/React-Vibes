import { Outlet } from "react-router";
import React from "react";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

function Layout() {
    return (
        <>
            <Navbar />
            <Outlet />
            <Footer />
        </>
    )
}

export default Layout
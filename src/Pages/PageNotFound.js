import NotFound from '../components/NotFound';
import Navbar from '../components/Navbar';
import Sidebar from '../components/Sidebar';
import Footer from '../components/Footer/Footer';
import React from 'react'
import { AppProvider } from "../components/Context";
import '../index.css';
import 'bootstrap/dist/css/bootstrap.min.css';


export default function PageNotFound() {
    return (
        <AppProvider>
            <Navbar />
            <Sidebar />
            <NotFound />
            <Footer />
        </AppProvider>
    )
}

import App from '../App';
import Navbar from '../components/Navbar';
import Sidebar from '../components/Sidebar';
import { AppProvider } from "../components/Context";
import Footer from '../components/Footer/Footer';
import React from 'react'

function LandingPage() {
    return (
        <AppProvider>
            <Navbar />
            <Sidebar />
            <App />
            <Footer />
        </AppProvider>
    )
}

export default LandingPage;




import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import './App.css';
import App from './App';
import Navbar from './components/Navbar';
import Sidebar from './components/Sidebar';
import { AppProvider } from "./components/context";
import Footer from './components/Footer/Footer';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <AppProvider>
      <Navbar />
      <Sidebar />
      <App />
      <Footer />
    </AppProvider>
  </React.StrictMode>
);
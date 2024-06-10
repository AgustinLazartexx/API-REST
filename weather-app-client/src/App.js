import React from 'react';
import Header from './componentes/Header';
import Navbar from './componentes/Navbar';
import WeatherContent from './componentes/WeatherContent';
import Footer from './componentes/Footer';
import './App.css';
function App() {
    return (
        <div>
            <Header />
            <Navbar />
            <div style={mainContentStyle}>
                <WeatherContent />
            </div>
            <Footer />
        </div>
    );
}

const mainContentStyle = {
    minHeight: '80vh',
    padding: '20px'
};

export default App;

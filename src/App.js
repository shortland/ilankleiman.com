import React from 'react';
import 'cirrus-ui/dist/cirrus-core.css';
import '@fortawesome/fontawesome-free/css/all.min.css';
import './App.css';
import Homepage from './Components/Homepage';
import NavBar from './Components/NavBar';
import Footer from './Components/Footer';

function App() {
    return (
        <div className="App">
            <NavBar />
            <Homepage />
            <Footer />
        </div>
    );
}

export default App;

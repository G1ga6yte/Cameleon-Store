import React from 'react';
import './App.scss';
import Navbar from "./pages/navbar/navbar";
// import i18n from 'i18next';
import {Images} from "./assets/images/images.js";
import {Route, Routes} from "react-router";
import Home from "./pages/home/home.jsx";
function App() {


    return (
        <div
            style={{backgroundImage: `url("${Images.backgroundImg3}")`}}
            className='App'
        >

            <Navbar/>

            <Routes>
                <Route path='/' element={<Home/>} />
            </Routes>
        </div>
    );
}

export default App;
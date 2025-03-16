import React, {useEffect, useState} from 'react';
import './App.scss';
import Navbar from "./pages/navbar/navbar";
// import i18n from 'i18next';
import {Images} from "./assets/images/images.js";
import {Route, Routes} from "react-router";
import Home from "./pages/home/home.jsx";
import ProductTypes from "./pages/productTypes/productTypes.jsx";
import {useTranslation} from "react-i18next";

function App() {
    const {t} = useTranslation()
    const [activeBackground,setActiveBackground] = useState(null);
    const backgrounds = [
        Images.backgroundImg1,
        Images.backgroundImg2,
        Images.backgroundImg3,
        Images.backgroundImg4,
    ]
    useEffect(() => {
        const randomNumber = Math.floor(Math.random() * 4);
        setActiveBackground(backgrounds[randomNumber]);
    }, [])

    return (
        <div
            style={{backgroundImage: `url("${activeBackground}")`}}
            className='App'
        >

            <Navbar/>

            <Routes>
                <Route path='/' element={<Home/>} />
                <Route path='/products' element={<ProductTypes/>}/>
            </Routes>
        </div>
    );
}

export default App;
import React, {useEffect, useState} from 'react';
import './App.scss';
import Navbar from "./pages/navbar/navbar";
import {Images} from "./assets/images/images.js";
import {Route, Routes} from "react-router";
import Home from "./pages/home/home.jsx";
import ProductTypes from "./pages/productTypes/productTypes.jsx";
import {useTranslation} from "react-i18next";
import ProductTypesMain from "./pages/productTypes/productTypesMain.jsx";
import Partners from "./pages/partners/partners.jsx";
import Store from './pages/store/store.jsx';
import Statistics from "./pages/statistics/statistics.jsx";
import Main from "./pages/statistics/main/main.jsx";
import {StatisticsProvider} from "./pages/statistics/statisticsContext.jsx";

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
                <Route path='/products' element={<ProductTypesMain/>}/>
                <Route path='/partners' element={<Partners/>}/>
                <Route path='/store' element={<Store/>} />
                <Route path="/statistics" element={
                    <StatisticsProvider>
                        <Statistics/>
                    </StatisticsProvider>}>

                    <Route path="/statistics/" element={<Main/>}/>
                </Route>
            </Routes>
        </div>
    );
}

export default App;
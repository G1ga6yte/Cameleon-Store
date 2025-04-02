import React from 'react';
import './HomeBox2.scss';
import { GrAnalytics } from "react-icons/gr";
import {IoIosArrowDown} from "react-icons/io";
import {useTranslation} from "react-i18next";
import HomeNav2 from "./homeNav2/homeNav2.jsx";
import HomeBoxMain2 from "./homeBoxMain2/homeBoxMain2.jsx";



function HomeBox2() {
    const {t, i18n} = useTranslation()



    return (
        <div className='HomeBox2Container homeBox G-box-shadow'>
            <HomeNav2/>
            <HomeBoxMain2/>
        </div>
    );
}

export default HomeBox2;
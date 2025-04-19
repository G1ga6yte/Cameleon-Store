import React, {useEffect} from 'react';
import './Statistics.scss';
import {useStatisticsContext} from "./statisticsContext.jsx";
import {Link, Outlet} from "react-router";
import {useCartContext} from "../../CartContext.jsx";
import { IoIosArrowRoundBack } from "react-icons/io";

function Statistics() {
    const {setActiveNav} = useCartContext()
    const {activeRoute, setActiveRoute} = useStatisticsContext()
    useEffect(() => {
        setActiveNav("statistics")
    }, []);

    return (
        <div className='StatisticsContainer G-box-shadow'>
                <div className="headLine">
                    <Link to={"/statistics"} className="backLink">
                        {activeRoute !== "Statistics" && <IoIosArrowRoundBack className="icon"/>}
                        {activeRoute}
                    </Link>
                </div>
                <Outlet/>
        </div>
    );
}

export default Statistics;
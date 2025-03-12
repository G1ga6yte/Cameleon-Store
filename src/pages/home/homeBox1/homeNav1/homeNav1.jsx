import React from 'react';
import {TbBrandGoogleAnalytics} from "react-icons/tb";
import {IoIosArrowDown} from "react-icons/io";
import {useTranslation} from "react-i18next";

function HomeNav1({
    setActiveSelect, activeSelect, selectedDate, dates, handleSetDateType
                 }) {
    const {t} = useTranslation()


    return (
        <div className="homeNav">
            <div className="leftSide">
                <TbBrandGoogleAnalytics className="navIcon"/>
                <p className="header">{t("home.header1")}</p>
            </div>

            <div className="rightSide">
                <p className="period">10 Apr, 2025 - 20 Apr, 2025</p>
                <div className="miniSelectCont">
                    <button className="selectBtn" onClick={()=>setActiveSelect(prev=>!prev)}>
                        {dates[selectedDate]}
                        <IoIosArrowDown className={`btnIcon ${activeSelect && "activeBtnIcon"}`}/>
                    </button>

                    {activeSelect &&
                        <div className="select">
                            {dates.map((date, index) => (
                                <button
                                    key={index}
                                    onClick={() => handleSetDateType(date, index)}
                                    className="selectItem"
                                >{date}</button>
                            ))}
                        </div>
                    }
                </div>
            </div>

        </div>
    );
}

export default HomeNav1;
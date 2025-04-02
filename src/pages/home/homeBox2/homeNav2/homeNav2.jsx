import React from 'react';
import './HomeNav2.scss';
import {GrAnalytics} from "react-icons/gr";
import {IoIosArrowDown} from "react-icons/io";
import {useTranslation} from "react-i18next";

function HomeNav2() {
    const {t} = useTranslation()

    const [activeSelect, setActiveSelect] = React.useState(false);

    // saving the index of active date - to handle translations
    const [selectedDate, setSelectedDate] = React.useState(1);
    const dates = [
        `${t("g.date0")}`,
        `${t("g.date1")}`,
        `${t("g.date2")}`,
        `${t("g.date3")}`
    ]


    const handleSetDateType = (date, index) => {
        setActiveSelect(false);
        setSelectedDate(index)
    }


    return (
        <div className="homeNav">

            <div className="leftSide">
                <GrAnalytics className="navIcon"/>
                <p className="header">{t("home.header2")}</p>
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

export default HomeNav2;
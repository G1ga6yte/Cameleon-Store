import React from 'react';
import './HomeBox1.scss';
import { TbBrandGoogleAnalytics } from "react-icons/tb";
import {useTranslation} from "react-i18next";
import { IoIosArrowDown } from "react-icons/io";
import HomeNav from "./homeNav/homeNav.jsx";

function HomeBox1() {
    const {t, i18n} = useTranslation()

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
        <div className='HomeBox1Container homeBox G-box-shadow'>
            <HomeNav
                setActiveSelect={setActiveSelect}
                activeSelect={activeSelect}
                selectedDate={selectedDate}
                setSelectedDate={setSelectedDate}
                dates={dates}
                handleSetDateType={handleSetDateType}
            />

        </div>
    );
}

export default HomeBox1;
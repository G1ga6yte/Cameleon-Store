import React from 'react';
import './HomeBox1.scss';
import {useTranslation} from "react-i18next";
import HomeNav1 from "./homeNav1/homeNav1.jsx";
import HomeBoxMain1 from "./homeBoxMain1/homeBoxMain1.jsx";

function HomeBox1() {
    const {t} = useTranslation()

    const [activeSelect, setActiveSelect] = React.useState(false);

    // saving the index of active date - to handle translations
    const [selectedDate, setSelectedDate] = React.useState(1);
    const dates = [
        `${t("g.date0")}`,
        `${t("g.date1")}`,
        `${t("g.date2")}`,
        `${t("g.date3")}`,
        `${t("g.date4")}`

    ]


    const handleSetDateType = (date, index) => {
        setActiveSelect(false);
        setSelectedDate(index)
    }

    return (
        <div className='HomeBox1Container homeBox G-box-shadow'>
            <HomeNav1
                setActiveSelect={setActiveSelect}
                activeSelect={activeSelect}
                selectedDate={selectedDate}
                setSelectedDate={setSelectedDate}
                dates={dates}
                handleSetDateType={handleSetDateType}
            />

            <HomeBoxMain1
                selectedDate={selectedDate}
            />

        </div>
    );
}

export default HomeBox1;
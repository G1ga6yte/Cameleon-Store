import React, { useState } from "react";
import "./mainFilterBlock.scss";
import { useTranslation } from "react-i18next";

import { Calendar } from 'primereact/calendar';

// Set dayjs to use British (UK) locale globally

function MainFilterBlock() {
    const { t } = useTranslation();
    const monthAgo = new Date(); // Get today's date
    monthAgo.setMonth(monthAgo.getMonth() - 1);
    const [selectedDate1, setSelectedDate1] = useState(monthAgo); // Initial date, can be changed
    const [selectedDate2, setSelectedDate2] = useState(new Date()); // Initial date, can be changed

    const handleDateChange1 = (date) => {
        setSelectedDate1(date); // Update selected date
    };

    const handleDateChange2 = (date) => {
        setSelectedDate2(date); // Update selected date
    };


    return (
        <div className="mainFilterBlock">
            <div className="headLine">
                <p className="header">{t("partners.header2")}</p>
                <div className="calendarCont p-calendar-w-btn">
                    <Calendar
                        className="p-calendar"
                        dateFormat="dd/mm/yy"
                        showIcon
                        value={selectedDate1}
                        onChange={(e) => handleDateChange1(e.value)}
                    />

                    <Calendar
                        className="p-calendar"
                        dateFormat="dd/mm/yy"
                        showIcon
                        value={selectedDate2}
                        onChange={(e) => handleDateChange1(e.value)}
                    />
                </div>
            </div>
        </div>
    );
}

export default MainFilterBlock;

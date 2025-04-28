import React, {useState} from "react";
import "./mainFilterBlock.scss";
import { useTranslation } from "react-i18next";
import { Calendar } from "primereact/calendar";
import PayDialog from "./payDialog/payDialog.jsx";


function MainFilterBlock({setNewOrderDialog}) {
    const { t } = useTranslation();
    const monthAgo = new Date(); // Get today's date
    monthAgo.setMonth(monthAgo.getMonth() - 1);
    const [selectedDate1, setSelectedDate1] = useState(monthAgo); // Initial date, can be changed
    const [selectedDate2, setSelectedDate2] = useState(new Date()); // Initial date, can be changed

    const [payDialog, setPayDialog] = useState(false)

    const handleDateChange1 = (date) => {
        setSelectedDate1(date); // Update selected date
    };

    const handleDateChange2 = (date) => {
        setSelectedDate2(date); // Update selected date
    };



    return (
        <div className="mainFilterBlock">

            {payDialog &&
                <PayDialog
                   setPayDialog={setPayDialog}
                />
            }

            <div className="headLine">
                <p className="header">{t("partners.header2")}</p>
                <div className="calendarCont p-calendar-w-btn">

                    <span className="header2">
                        {t('partners.placeholder1')}:
                    </span>
                    <Calendar
                        className="p-calendar"
                        dateFormat="dd/mm/yy"
                        showIcon
                        value={selectedDate1}
                        onChange={(e) => handleDateChange1(e.value)}
                    />
                    <span className="header2">
                        {t('partners.placeholder2')}:
                    </span>
                    <Calendar
                        className="p-calendar"
                        dateFormat="dd/mm/yy"
                        showIcon
                        value={selectedDate2}
                        onChange={(e) => handleDateChange2(e.value)} // fixed the onChange handler to handle the correct date
                    />
                </div>
            </div>

            <div className="secondLine">
                <p className="infoLine">
                    <span className="miniHeader">{t("partners.prg1")}:</span>
                    <span >120000.00</span>
                </p>

                <p className="infoLine">
                    <span className="miniHeader">{t("partners.prg2")}:</span>
                    <span >100000.00</span>
                </p>

                <p className="infoLine">
                    <span className="miniHeader">{t("partners.prg3")}:</span>
                    <span >20000.00</span>
                </p>

                <button onClick={()=>setNewOrderDialog(true)} className="newOrderBtn">
                    {t("partners.btn2")}
                </button>



            </div>

            <div className="thirdLine">
                <p className="infoLine">
                    <span className="miniHeader">{t("partners.prg4")}:</span>
                    <span >60000.00</span>
                    <button onClick={()=>setPayDialog(true)} className="debtBtn">{t("partners.btn1")}</button>
                </p>
            </div>
        </div>
    );
}

export default MainFilterBlock;

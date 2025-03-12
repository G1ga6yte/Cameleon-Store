import React, {useEffect, useState} from 'react';
import './HomeBoxMain1.scss';
import {useTranslation} from "react-i18next";
import { IoMdArrowDown } from "react-icons/io";

function HomeBoxMain1({selectedDate}) {
    const {t} = useTranslation()

    const [max, setMax] = useState(100)
    const [count, setCount] = useState(225);
    const [percentage, setPercentage] = useState(45);
    const [states, setStates] = useState([]);

    useEffect(() => {
        // calculation and requests

        setStates([
            {id: 1, count: 80},
            {id: 2, count: 100},
            {id: 3, count: 50},
            {id: 4, count: 35},
            {id: 5, count: 20},
            {id: 6, count: 75},
            {id: 7, count: 90}
        ])
        setMax(100)
    }, [selectedDate]);

    const weekDays = [
        `${t("g.weekS1")}`,
        `${t("g.weekS2")}`,
        `${t("g.weekS3")}`,
        `${t("g.weekS4")}`,
        `${t("g.weekS5")}`,
        `${t("g.weekS6")}`,
        `${t("g.weekS7")}`
    ]


    return (
        <div className='HomeBoxMain1Container'>
            <div className="leftSide">
                <p className="miniPrg">{t("home.miniPrg")}</p>
                <p className="count">{count}</p>

                <div className={`percentageBlock ${percentage <= 0 && "negativeBlock"}`}>
                    <p className="percentage">{percentage}% </p>
                    <IoMdArrowDown className="arrowIcon"/>
                </div>

            </div>

            <div className="statisticCont">
                {selectedDate === 0 &&
                    <div className="statisticBlock">

                    </div>
                }

                {selectedDate === 1 &&
                    <div className="statisticBlock">
                        <div className="values">
                            <p className="value">{max}</p>
                            <p className="value">{max*0.8}</p>
                            <p className="value">{max*0.6}</p>
                            <p className="value">{max*0.4}</p>
                            <p className="value">{max*0.2}</p>
                            <p className="value">0</p>
                        </div>

                        <div className="states">
                            <div className="linesCont">
                                <div className="line"></div>
                                <div className="line"></div>
                                <div className="line"></div>
                                <div className="line"></div>
                                <div className="line"></div>
                                <div className="line"></div>
                            </div>

                            <div className="stateLinesBlock">
                                <div className="daysCont">
                                    {weekDays.map((day, index) => (
                                        <span className="day" key={index}>{day}</span>
                                    ))}
                                </div>

                                <div className="statesCont">
                                    {states.map((state, index) => {
                                        let lineHeight =(state.count/max)*100;
                                        return (
                                            <div key={index}
                                                 className="stateLine weekDay"
                                                 style={{height: `${states.length && lineHeight}%`}}
                                            ></div>
                                        )
                                    }
                                    )}
                                </div>

                            </div>
                        </div>

                    </div>
                }

                {selectedDate === 2 &&
                    <div className="statisticBlock">

                    </div>
                }

                {selectedDate === 3 &&
                    <div className="statisticBlock">

                    </div>
                }
            </div>
        </div>
    );
}

export default HomeBoxMain1;
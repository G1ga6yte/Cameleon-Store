import React from 'react';
import './HomeBoxMain2.scss';
import { PieChart } from '@mui/x-charts/PieChart';
import {useTranslation} from "react-i18next";
import {IoMdArrowDown} from "react-icons/io";

function HomeBoxMain2() {
    const {t} = useTranslation();
    const [skipAnimation, setSkipAnimation] = React.useState(false);
    const percentage = 36
    const desktopOS = [
        {
            label: 'Грунты',
            value: 72.72,
        },
        {
            label: 'Бесцветные лаки',
            value: 16.38,
        },
        {
            label: 'Разбавители и очистители',
            value: 3.83,
        },
        {
            label: 'Акриловые краски',
            value: 2.42,
        },
        {
            label: 'Базовые лаки 1К',
            value: 4.65,
        },
    ];

    const normalize = (v) => Number.parseFloat(((v)).toFixed(2));

    const mobileAndDesktopOS = [
        ...desktopOS.map((v) => ({
            ...v,
            label: v.label === 'Other' ? 'Other (Desktop)' : v.label,
            value: normalize(v.value),
        })),
    ];

    const valueFormatter = (item) => `${item.value}%`;


    return (
        <div className='HomeBoxMain2Container'>

            <div className="totalSum">
                <p className="header">{t("home.header4")}: </p>
                <p className="sumPrg">550650.00 <span>AMD</span></p>
            </div>
            <div className={`percentageBlock ${percentage <= 0 && "negativeBlock"}`}>
                <p className="percentage">{percentage}% </p>
                <IoMdArrowDown className="arrowIcon"/>
            </div>

            <PieChart
                className="circle"
                heightUnit="100%"
                colors={["#8300ff", "#8e19fc","#9f38ff","#ab53fc", "#b76efa"  ]}
                series={[
                    {
                        data: desktopOS,
                        highlightScope: { fade: 'global', highlight: 'item' },
                        faded: { innerRadius: 30, additionalRadius: -30, color: 'gray' },
                        valueFormatter,
                    },
                ]}
                width={800}
                height={280}
            />
        </div>
    );
}

export default HomeBoxMain2;
import React from "react";
import "./filterCont.scss";
import { useTranslation } from "react-i18next";

function FilterCont (){
    const {t} = useTranslation()
    return(
        <div className="filterContainer">
            <p className="header">{t("store.header1")}</p>
        </div>
    )
}


export default FilterCont
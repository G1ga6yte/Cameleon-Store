import React from "react";
import "./mainFilterBlock.scss"
import {useTranslation} from "react-i18next";

function MainFilterBlock (){
    const {t} = useTranslation()


    return(
        <div className="mainFilterBlock">
            <p className="header">{t("partners.header2")}</p>
        </div>
    )
}


export default MainFilterBlock
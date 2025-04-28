import React from "react";
import "./payDialog.scss"
import { MdOutlinePayments } from "react-icons/md";
import {IoClose} from "react-icons/io5";
import {useTranslation} from "react-i18next";

function PayDialog({setPayDialog}){
    const {t} = useTranslation()


    return(
        <div className="G-modal-menu PayDialogCont">
            <div onClick={()=>setPayDialog(false)} className="backgroundBlock"></div>

            <div className="modalCont G-box-shadow">
                <button onClick={() => setPayDialog(false)} className="closeBtn">
                    <IoClose className="icon"  />
                </button>
                <div className="iconBlock">
                    <MdOutlinePayments className="icon"/>

                </div>

                <p className="header">{t("products.header3")}</p>

                <p className="prg">{t("products.prg5")} <span>(123456.00)</span>?</p>


                <div className="buttonsCont">
                    <button onClick={() => setPayDialog(false)} className="cancelBtn">{t("products.btn6")}</button>
                    <button onClick={()=>{}} className="deleteBtn">{t("products.btn15")}</button>
                </div>
            </div>
        </div>
    )
}

export default PayDialog
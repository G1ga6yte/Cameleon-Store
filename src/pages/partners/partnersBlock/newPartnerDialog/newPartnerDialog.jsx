import React from 'react';
import './NewPartnerDialog.scss';
import { FaUserPlus } from "react-icons/fa6";
import {IoClose} from "react-icons/io5";
import {useTranslation} from "react-i18next";

function NewPartnerDialog({setNewPartnerDialog}) {
    const {t} = useTranslation();

    return (
        <div className='NewPartnerDialogContainer G-modal-menu'>
            <div onClick={()=>setNewPartnerDialog(false)} className="backgroundBlock"></div>

            <div className="dialogCont modalCont G-box-shadow">
                <button onClick={() => setNewPartnerDialog(false)} className="closeBtn">
                    <IoClose className="icon"  />
                </button>

                <div className="iconBlock">
                    <FaUserPlus className="icon"/>
                </div>

                <p className="header">{t("store.header2")}</p>

                <p className="prg">
                    {t("store.prg1")}
                </p>

                <input type="text" placeholder={t("store.placeholder2")} className="modalInput"/>

                <div className="buttonsCont">
                    <button onClick={()=>setNewPartnerDialog(false)} className="cancelBtn">{t("store.btn3")}</button>
                    <button className="renameBtn">{t("store.btn4")}</button>
                </div>
            </div>
        </div>
    );
}

export default NewPartnerDialog;
import React from 'react';
import './DeletePartnerDialog.scss';
import { IoWarningOutline } from "react-icons/io5";
import {IoClose} from "react-icons/io5";
import {useTranslation} from "react-i18next";

function DeletePartnerDialog({actionPartner, setDeletePartnerDialog}) {
    const {t} = useTranslation();

    return (
        <div className='DeletePartnersDialogCont G-modal-menu'>
            <div onClick={()=>setDeletePartnerDialog(false)} className="backgroundBlock"></div>

            <div className="dialogCont modalCont G-box-shadow">
                <button onClick={() => setDeletePartnerDialog(false)} className="closeBtn">
                    <IoClose className="icon"  />
                </button>

                <div className="iconBlock">
                    <IoWarningOutline className="icon"/>
                </div>

                <p className="header">{t("store.header5")}</p>

                <p className="prg">
                    {t("store.prg6")} <span>({actionPartner.name})</span>?
                </p>

                <div className="buttonsCont">
                    <button onClick={()=>setDeletePartnerDialog(false)} className="cancelBtn">{t("store.btn3")}</button>
                    <button className="renameBtn">{t("store.btn5")}</button>
                </div>
            </div>
        </div>
    );
}

export default DeletePartnerDialog;
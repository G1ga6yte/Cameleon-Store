import React from 'react';
import './EditPartnerDialog.scss';
import { BiSolidEditAlt } from "react-icons/bi";
import {IoClose} from "react-icons/io5";
import {useTranslation} from "react-i18next";

function EditPartnerDialog({actionPartner, setEditPartnerDialog}) {
    const {t} = useTranslation();

    return (
        <div className='EditPartnersDialogCont G-modal-menu'>
            <div onClick={()=>setEditPartnerDialog(false)} className="backgroundBlock"></div>

            <div className="dialogCont modalCont G-box-shadow">
                <button onClick={() => setEditPartnerDialog(false)} className="closeBtn">
                    <IoClose className="icon"  />
                </button>

                <div className="iconBlock">
                    <BiSolidEditAlt className="icon"/>
                </div>

                <p className="header">{t("store.header4")}</p>

                <p className="prg">
                    {t("store.prg5")}
                </p>

                <input defaultValue={actionPartner.name} type="text" placeholder={t("store.placeholder2")} className="modalInput"/>

                <div className="buttonsCont">
                    <button onClick={()=>setEditPartnerDialog(false)} className="cancelBtn">{t("store.btn3")}</button>
                    <button className="renameBtn">{t("store.btn7")}</button>
                </div>
            </div>
        </div>
    );
}

export default EditPartnerDialog;
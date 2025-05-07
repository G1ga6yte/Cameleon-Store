import React from 'react';
import { IoWarningOutline } from "react-icons/io5";
import {useTranslation} from "react-i18next";
import { IoClose } from "react-icons/io5";

function DeleteModal({actionItem, setDeleteModal}) {
    const {t} = useTranslation()

    return (
        <div className='G-modal-menu'>
            <div onClick={()=>{
                setDeleteModal(false);
            }} className="backgroundBlock"></div>

            <div className="modalCont G-box-shadow">
                <button onClick={() => setDeleteModal(false)} className="closeBtn">
                    <IoClose className="icon"  />
                </button>
                <div className="iconBlock">
                    <IoWarningOutline className="icon"/>

                </div>

                <p className="header">{t("products.header3")}</p>

                <p className="prg">{t("products.prg1")} <span>({actionItem.name})</span>?</p>


                <div className="buttonsCont">
                    <button onClick={() => setDeleteModal(false)} className="cancelBtn">{t("products.btn6")}</button>
                    <button className="deleteBtn">{t("products.btn7")}</button>
                </div>
            </div>
        </div>
    );
}


export default DeleteModal;
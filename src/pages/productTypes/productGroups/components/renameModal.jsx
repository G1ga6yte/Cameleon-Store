import React, {useEffect, useState} from 'react';
import {IoClose} from "react-icons/io5";
import {useTranslation} from "react-i18next";
import DeleteGroup from "../functions/deleteGroup.js";
import RenameGroup from "../functions/renameGroup.js";

function RenameModal({actionGroup, renameModal, setRenameModal}) {
    const {t} = useTranslation()

    const [inputValue1, setInputValue1] = useState('');
    useEffect(() => {
        setInputValue1(actionGroup.name);
    }, []);

    return (
        <div className='G-modal-menu'>
            <div onClick={() => {
                setRenameModal(false);
            }} className="backgroundBlock"></div>

            <div className="modalCont G-box-shadow">
                <button onClick={() => setRenameModal(false)} className="closeBtn">
                    <IoClose className="icon"/>
                </button>

                <p className="header">{t("products.header4")}</p>

                <p className="prg">{t("products.prg2")}</p>


                <form className="formCont" onSubmit={(e) => RenameGroup(e, actionGroup, inputValue1, setRenameModal)}>
                    <input type="text"
                           className="modalInput "
                           value={inputValue1}
                           onChange={(e) => setInputValue1(e.target.value)}
                    />
                    <div className="buttonsCont">
                        <button type={"button"} onClick={() => setRenameModal(false)}
                                className="cancelBtn">{t("products.btn6")}</button>
                        <button className="renameBtn" type="submit">{t("products.btn8")}</button>
                    </div>
                </form>
            </div>

        </div>
    );
}

export default RenameModal;
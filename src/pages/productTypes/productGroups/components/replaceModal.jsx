import React, {useState} from 'react';
import DeleteGroup from "../functions/deleteGroup.js";
import {useTranslation} from "react-i18next";
import ReplaceGroup from "../functions/replaceGroup.js";
import {IoClose} from "react-icons/io5";

function ReplaceModal({actionGroup, replaceModal, setReplaceModal, groupsList}) {
    const {t} = useTranslation()
    const [activeGroup, setActiveGroup] = useState(null);

    return (
        <div className='G-modal-menu'>
            <div onClick={() => {
                setReplaceModal(false);
            }} className="backgroundBlock"></div>


            <div className="modalCont G-box-shadow">
                <button onClick={() => setReplaceModal(false)} className="closeBtn">
                    <IoClose className="icon"/>
                </button>

                <p className="prg">{t("products.prg3")}</p>

                <div className="groupsContainer">
                    {groupsList.map((group, index) => {
                        if (group.id !== actionGroup.id) return (
                            <button onClick={()=>setActiveGroup(group.id)} className={`groupBtn ${activeGroup === group.id && "activeGroup"}`} key={index}>{group.name}</button>
                        )
                    })}
                </div>

                <div className="buttonsCont">
                    <button onClick={() => setReplaceModal(false)} className="cancelBtn">{t("products.btn6")}</button>
                    <button onClick={()=> ReplaceGroup(actionGroup, activeGroup, setReplaceModal)} disabled={activeGroup === null} className="replaceBtn">{t("products.btn9")}</button>
                </div>

            </div>
        </div>
    );
}

export default ReplaceModal;
import React, {useEffect, useState} from 'react';
import {useTranslation} from "react-i18next";
import {IoClose} from "react-icons/io5";
import {TestProductGroups} from "../../../../../TestData/testProductGroups.js";

function ReplaceModal({actionItem, setReplaceModal}) {
    const {t} = useTranslation()
    const [activeGroup, setActiveGroup] = useState(null);
    const [groupsList, setGroupsList] = useState([])

    useEffect(() => {
        setGroupsList(TestProductGroups)
    }, []);

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
                       return (<button onClick={()=>setActiveGroup(group.id)} className={`groupBtn ${activeGroup === group.id && "activeGroup"}`} key={index}>{group.name}</button>)
                    })}
                </div>

                <div className="buttonsCont">
                    <button onClick={() => setReplaceModal(false)} className="cancelBtn">{t("products.btn6")}</button>
                    <button disabled={activeGroup === null} className="replaceBtn">{t("products.btn9")}</button>
                </div>

            </div>
        </div>
    );
}

export default ReplaceModal;
import React, {useEffect, useRef, useState} from 'react';
import {RiDeleteBack2Fill} from "react-icons/ri";
import {MdDriveFileRenameOutline} from "react-icons/md";
import {HiDuplicate} from "react-icons/hi";
import {TbReplaceFilled} from "react-icons/tb";
import {useTranslation} from "react-i18next";
import DeleteModal from "./contextDialogs/deleteModal.jsx";
import ReplaceModal from "./contextDialogs/replaceModal.jsx";


function ContextMenuItems ({menuOpen, setMenuOpen, menuPosition, actionItem}) {
    const {t} = useTranslation()

    ///////////////// Context Menu /////////////////////
    const menuRef = useRef(null);

    useEffect(() => {
        const handleClickOutside = (event) => {
            if (menuRef.current && !menuRef.current.contains(event.target)) {
                setMenuOpen(false)
            }
        };
        document.addEventListener("mousedown", handleClickOutside);
        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, []);

    const [deleteModal, setDeleteModal] = useState(false)
    const [editModal, setEditModal] = useState(false)
    const [duplicateModal, setDuplicateModal] = useState(false)
    const [replaceModal, setReplaceModal] = useState(false)



    return menuOpen && (<div  ref={menuRef}
                              style={{
                                  position: "fixed",
                                  top: `${menuPosition.y}px`,
                                  left: `${menuPosition.x}px`,
                              }}
                              className="G-context-menu G-box-shadow"
    >

        {deleteModal &&
            <DeleteModal actionItem={actionItem} setDeleteModal={setDeleteModal}/>
        }

        {replaceModal &&
            <ReplaceModal
                actionItem={actionItem}
                setReplaceModal={setReplaceModal}
            />
        }


        <button onClick={()=>setDeleteModal(true)} className="context-button"><RiDeleteBack2Fill className="icon" fill="red"/>{t("products.btn10")}</button>
        <button onClick={()=>setEditModal(true)} className="context-button"><MdDriveFileRenameOutline className="icon" fill="#25cc00"/>{t("products.btn11")}</button>
        <button onClick={()=>setDuplicateModal(true)} className="context-button"><HiDuplicate className="icon" fill="#0096cc"/>{t("products.btn12")}</button>
        <button onClick={()=>setReplaceModal(true)} className="context-button"><TbReplaceFilled className="icon" fill="#0096cc"/>{t("products.btn13")}</button>
    </div>)
}

export default ContextMenuItems;
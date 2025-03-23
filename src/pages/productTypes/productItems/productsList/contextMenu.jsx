import React, {useEffect, useRef} from 'react';
import {RiDeleteBack2Fill} from "react-icons/ri";
import {MdDriveFileRenameOutline} from "react-icons/md";
import {HiDuplicate} from "react-icons/hi";
import {TbReplaceFilled} from "react-icons/tb";
import {useTranslation} from "react-i18next";
import DeleteModal from "../../productGroups/components/deleteModal.jsx";

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


    return menuOpen && (<div ref={menuRef}
                              style={{
                                  position: "fixed",
                                  top: `${menuPosition.y}px`,
                                  left: `${menuPosition.x}px`,
                              }}
                              className="G-context-menu G-box-shadow"
    >

        <button className="context-button"><RiDeleteBack2Fill className="icon" fill="red"/>{t("products.btn10")}</button>
        <button className="context-button"><MdDriveFileRenameOutline className="icon" fill="#25cc00"/>{t("products.btn11")}</button>
        <button className="context-button"><HiDuplicate className="icon" fill="#0096cc"/>{t("products.btn12")}</button>
        <button className="context-button"><TbReplaceFilled className="icon" fill="#0096cc"/>{t("products.btn13")}</button>
    </div>)
}

export default ContextMenuItems;
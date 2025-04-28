import React, {useEffect, useRef, useState} from "react";
import "./partnersBlock.scss"
import {FaFolderPlus} from "react-icons/fa6";
import {MdDriveFileRenameOutline, MdFolderCopy} from "react-icons/md";
import {IoIosArrowForward} from "react-icons/io";
import {useTranslation} from "react-i18next";
import { HiOutlinePlusSm } from "react-icons/hi";
import NewPartnerDialog from "./newPartnerDialog/newPartnerDialog.jsx";
import {RiDeleteBack2Fill} from "react-icons/ri";
import {TbReplaceFilled} from "react-icons/tb";
import {TestProductGroups} from "../../../TestData/testProductGroups.js";
import EditPartnerDialog from "./editPartnerDialog/editPartnerDialog.jsx";
import DeletePartnerDialog from "./deletePartnerDialog/deletePartnerDialog.jsx";

function PartnersBlock (){
    const {t} = useTranslation()
    const usersList = [
        {
            id: 1,
            name: "Valod",
        },
        {
            id: 2,
            name: "Hakob",
        },
        {
            id: 3,
            name: "Xcho",
        },
        {
            id: 4,
            name: "Karen",
        },
        {
            id: 5,
            name: "Vzgo",
        },
    ]
    const [activePartner, setActivePartner] = useState(null)
    const [newPartnerDialog, setNewPartnerDialog] = useState(false)
    const [editPartnerDialog, setEditPartnerDialog] = useState(false)
    const [deletePartnerDialog, setDeletePartnerDialog] = useState(false)
    useEffect(() => {
        setActivePartner(usersList[0].id)
    }, []);

    ///////////////// Context Menu //////////////////
    const [menuPosition, setMenuPosition] = useState({x: 0, y: 0});
    const [menuOpen, setMenuOpen] = useState(false);
    const menuRef = useRef(null);
    const [actionPartner, setActionPartner] = useState(null);

    const handleContextMenu = (event, partner) => {
        event.preventDefault(); // Prevent the default browser menu
        let windowsHeight = window.innerHeight;
        let windowsWidth = window.innerWidth;
        setMenuPosition({x: event.clientX + 150 > windowsWidth ? event.clientX-150 : event.clientX, y: event.clientY+100 > windowsHeight ? event.clientY-100 : event.clientY});
        setMenuOpen(true);
        setActionPartner(partner)
    };

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

    return(
        <div className="partnersBlock G-box-shadow">

            {newPartnerDialog &&
                <NewPartnerDialog
                    setNewPartnerDialog={setNewPartnerDialog}
                />
            }

            {editPartnerDialog &&
                <EditPartnerDialog
                    actionPartner={actionPartner}
                    setEditPartnerDialog={setEditPartnerDialog}
                />
            }

            {deletePartnerDialog &&
                <DeletePartnerDialog
                    actionPartner={actionPartner}
                    setDeletePartnerDialog={setDeletePartnerDialog}
                />
            }

            {menuOpen && (<div ref={menuRef}
                               style={{
                                   position: "fixed",
                                   top: `${menuPosition.y}px`,
                                   left: `${menuPosition.x}px`,
                               }}
                               className="G-context-menu G-box-shadow"
            >
                <button onClick={()=>setDeletePartnerDialog(true)} className="context-button"><RiDeleteBack2Fill className="icon" fill="red"/>{t("store.btn5")}</button>
                <button onClick={()=>setEditPartnerDialog(true)} className="context-button"><MdDriveFileRenameOutline className="icon" fill="#25cc00"/>{t("store.btn6")}</button>

            </div>)}

            <div className="headerCont">
                <p className="header">{t("partners.header1")}</p>

                <div className="createBlock">
                    <button onClick={()=>setNewPartnerDialog(true)} className="addBtn">
                        <HiOutlinePlusSm className="icon"/>
                    </button>
                </div>
            </div>

            <div className="groupsCont">
                <div className="groups">
                    {usersList.map((user, index) => {
                        return (
                            <div onContextMenu={(e)=>{
                                handleContextMenu(e, user)
                            }} key={index} className="group">
                                <button onContextMenu={(e) => handleContextMenu(e, user)} onClick={() => {
                                    setActivePartner(user.id)
                                }} className={`groupButton ${activePartner === user.id && "activeGroup"}`}>
                                    <p className="groupName">{user.name}</p>
                                    <IoIosArrowForward
                                        className={`groupArrow  ${activePartner === user.id && "activeArrow"}`}/>
                                </button>

                            </div>
                        )
                    })}

                </div>
            </div>

        </div>
    )
}

export default PartnersBlock
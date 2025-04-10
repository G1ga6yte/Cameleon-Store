import React, {useEffect, useRef, useState} from "react";
import "./ProductGroups.scss"
import {useTranslation} from "react-i18next";
import {IoIosArrowForward} from "react-icons/io";
import {FaFolderPlus} from "react-icons/fa6";
import {MdFolderCopy} from "react-icons/md";
import { RiDeleteBack2Fill } from "react-icons/ri";
import { MdDriveFileRenameOutline } from "react-icons/md";
import { TbReplaceFilled } from "react-icons/tb";
import DeleteModal from "./components/deleteModal.jsx";
import RenameModal from "./components/renameModal.jsx";
import ReplaceModal from "./components/replaceModal.jsx";
import {TestProductGroups} from "../../../TestData/testProductGroups.js";

function ProductGroups() {
    const {t} = useTranslation()
    const [activeGroup, setActiveGroup] = useState(9999)
    const [openGroup, setOpenGroup] = useState(null)

    const [deleteModal, setDeleteModal] = useState(false)
    const [renameModal, setRenameModal] = useState(false)
    const [replaceModal, setReplaceModal] = useState(false)

    const [groups, setGroups] = useState([])

    const [menuPosition, setMenuPosition] = useState({x: 0, y: 0});
    const [menuOpen, setMenuOpen] = useState(false);
    const menuRef = useRef(null);
    const [actionGroup, setActionGroup] = useState(null);

    const handleContextMenu = (event, group) => {
        event.preventDefault(); // Prevent the default browser menu
        let windowsHeight = window.innerHeight;
        let windowsWidth = window.innerWidth;
        setMenuPosition({x: event.clientX + 150 > windowsWidth ? event.clientX-150 : event.clientX, y: event.clientY+100 > windowsHeight ? event.clientY-100 : event.clientY});
        setMenuOpen(true);
        setActionGroup(group)
    };
    const closeMenu = () => setMenuOpen(false);

    useEffect(() => {
        setGroups(TestProductGroups)

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

    return (
        <div className="ProductGroupsContainer G-box-shadow">

            {menuOpen && (<div ref={menuRef}
                               style={{
                                   position: "fixed",
                                   top: `${menuPosition.y}px`,
                                   left: `${menuPosition.x}px`,
                               }}
                               className="G-context-menu G-box-shadow"
                               onClose={closeMenu}
            >
                <button onClick={()=>setDeleteModal(true)} className="context-button"><RiDeleteBack2Fill className="icon" fill="red"/>{t("products.btn2")}</button>
                <button onClick={()=>setRenameModal(true)} className="context-button"><MdDriveFileRenameOutline className="icon" fill="#25cc00"/>{t("products.btn3")}</button>
                <button onClick={()=>setReplaceModal(true)} className="context-button"><TbReplaceFilled className="icon" fill="#0096cc"/>{t("products.btn4")}</button>

            </div>)}

            {deleteModal && <DeleteModal
                actionGroup={actionGroup}
                setDeleteModal={setDeleteModal}
                deleteModal={deleteModal}
            />}

            {renameModal && <RenameModal
                actionGroup={actionGroup}
                setRenameModal={setRenameModal}
                renameModal={renameModal}
            />}

            {replaceModal && <ReplaceModal
                actionGroup={actionGroup}
                setReplaceModal={setReplaceModal}
                replaceModal={replaceModal}
                groupsList={groups}
            />}



            <div className="headerCont">
                <p className="header">{t("products.header1")}</p>

                <div className="createBlock">
                    <input placeholder={t("products.placeholder1")} type="text" className="groupInput "/>
                    <button className="addNewBtn">
                        <FaFolderPlus className="folderIcon"/>
                    </button>
                    <button className="addNewBtn">
                        <MdFolderCopy className="folderIcon"/>
                    </button>
                </div>
            </div>

            <div className="groupsCont">
                <div className="groups">
                    <div className="group">
                        <button onClick={() => {
                            setActiveGroup(9999)
                            setOpenGroup(null)
                        }} className={`groupButton ${activeGroup === 9999 && "activeGroup"}`}>
                            <p className="groupName">{t("products.btn1")}</p>
                            <IoIosArrowForward className={`groupArrow ${activeGroup === 9999 && "activeArrow"}`}/>
                        </button>
                    </div>
                    {groups.map((group, index) => {
                        return (
                            <div key={index} className="group">
                                <button onContextMenu={(e) => handleContextMenu(e, group)} onClick={() => {
                                    if (group.inGroups) {
                                        if (openGroup === group.id) {
                                            setOpenGroup(null)
                                        } else {
                                            setOpenGroup(group.id)
                                        }
                                        setActiveGroup(group.id)
                                    } else {
                                        setOpenGroup(null)
                                        setActiveGroup(group.id)
                                    }
                                }} className={`groupButton ${activeGroup === group.id && "activeGroup"}`}>
                                    <p className="groupName">{group.name}</p>
                                    <IoIosArrowForward
                                        className={`groupArrow ${openGroup === group.id && "openArrow"} ${activeGroup === group.id && "activeArrow"}`}/>
                                </button>

                                {group.id === openGroup &&
                                    <div className="groupMenu">
                                        {group.inGroups.map((el, index) => {
                                            return (
                                                <button onContextMenu={(e) => handleContextMenu(e, el.id)}
                                                        onClick={() => {
                                                            setActiveGroup(el.id)
                                                        }} key={index}
                                                        className={`groupMenuButton ${activeGroup === el.id && "activeMenuGroup"}`}>
                                                    <p className="groupMenuName">{el.name}</p>
                                                    <IoIosArrowForward
                                                        className={`groupMenuArrow ${activeGroup === el.id && "activeMenuArrow"}`}/>
                                                </button>
                                            )
                                        })}

                                    </div>
                                }
                            </div>
                        )
                    })}

                </div>
            </div>

        </div>
    )
}

export default ProductGroups
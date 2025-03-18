import React, {useEffect, useRef, useState} from "react";
import "./ProductGroups.scss"
import {useTranslation} from "react-i18next";
import {IoIosArrowForward} from "react-icons/io";
import {FaFolderPlus} from "react-icons/fa6";
import {MdFolderCopy} from "react-icons/md";
import { RiDeleteBack2Fill } from "react-icons/ri";
import { MdDriveFileRenameOutline } from "react-icons/md";
import { TbReplaceFilled } from "react-icons/tb";

function ProductGroups() {
    const {t} = useTranslation()
    const [activeGroup, setActiveGroup] = useState(9999)
    const [openGroup, setOpenGroup] = useState(null)

    const groups = [
        {
            name: "Group 1",
            id: 46452543,
            inGroups: [
                {
                    name: "Group 11",
                    id: 435637468
                },
                {
                    name: "Group 12",
                    id: 897967
                },
                {
                    name: "Group 13",
                    id: 4356435
                },
            ]
        },
        {
            name: "Group 2",
            id: 4746743645
        },
        {
            name: "Group 3",
            id: 346546
        },
        {
            name: "Group 4",
            id: 8687945
        },
        {
            name: "Group 5",
            id: 345677
        },
        {
            name: "Group 6",
            id: 645787
        },
        {
            name: "Group 7",
            id: 4545,
            inGroups: [
                {
                    name: "Group 71",
                    id: 45953653
                },
                {
                    name: "Group 72",
                    id: 756435
                },
                {
                    name: "Group 73",
                    id: 2848724
                },
            ]
        },
        {
            name: "Group 8",
            id: 4746743
        },
        {
            name: "Group 9",
            id: 34654643
        },
        {
            name: "Group 10",
            id: 86872945
        },
        {
            name: "Group 11",
            id: 3452677
        },
        {
            name: "Group 12",
            id: 6453787
        },
        {
            name: "Group 13",
            id: 47463743
        },
        {
            name: "Group 14",
            id: 3463546
        },
        {
            name: "Group 15",
            id: 86837945
        },
        {
            name: "Group 16",
            id: 3453677
        },
        {
            name: "Group 17",
            id: 6435787
        },
    ]

    const [menuPosition, setMenuPosition] = useState({x: 0, y: 0});
    const [menuOpen, setMenuOpen] = useState(false);
    const menuRef = useRef(null);
    const [actionID, setActionID] = useState(null);

    const handleContextMenu = (event, id) => {
        event.preventDefault(); // Prevent the default browser menu
        let windowsHeight = window.innerHeight;
        let windowsWidth = window.innerWidth;
        setMenuPosition({x: event.clientX + 100 > windowsWidth ? event.clientX-100 : event.clientX, y: event.clientY+100 > windowsHeight ? event.clientY-100 : event.clientY});
        setMenuOpen(true);
        setActionID(id)
    };
    const closeMenu = () => setMenuOpen(false);

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

    return (
        <div className="ProductGroupsContainer G-box-shadow">

            {menuOpen && (<div ref={menuRef}
                               style={{
                                   position: "absolute",
                                   top: `${menuPosition.y}px`,
                                   left: `${menuPosition.x}px`,
                               }}
                               className="G-context-menu"
                               onClose={closeMenu}
            >
                <button className="context-button"><RiDeleteBack2Fill className="icon" fill="red"/>{t("products.btn2")}</button>
                <button className="context-button"><MdDriveFileRenameOutline className="icon" fill="#25cc00"/>{t("products.btn3")}</button>
                <button className="context-button"><TbReplaceFilled className="icon" fill="#0096cc"/>{t("products.btn4")}</button>

            </div>)
            }

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
                                <button onContextMenu={(e) => handleContextMenu(e, group.id)} onClick={() => {
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
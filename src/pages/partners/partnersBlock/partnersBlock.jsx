import React, {useEffect, useState} from "react";
import "./partnersBlock.scss"
import {FaFolderPlus} from "react-icons/fa6";
import {MdFolderCopy} from "react-icons/md";
import {IoIosArrowForward} from "react-icons/io";
import {useTranslation} from "react-i18next";
import { HiOutlinePlusSm } from "react-icons/hi";

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

    useEffect(() => {
        setActivePartner(usersList[0].id)
    }, []);


    const handleContextMenu = () => {

    }

    return(
        <div className="partnersBlock G-box-shadow">


            <div className="headerCont">
                <p className="header">{t("partners.header1")}</p>

                <div className="createBlock">
                    <button className="addBtn">
                        <HiOutlinePlusSm className="icon"/>
                    </button>
                </div>
            </div>

            <div className="groupsCont">
                <div className="groups">
                    {usersList.map((user, index) => {
                        return (
                            <div key={index} className="group">
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
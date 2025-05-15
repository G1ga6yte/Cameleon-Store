import React, {useEffect} from "react";
import "./MenuMain.scss"
import { IoMdSettings } from "react-icons/io";
import {Link} from "react-router";
import {useTranslation} from "react-i18next";
import { RiShieldUserFill } from "react-icons/ri";
import { LuNotebookPen } from "react-icons/lu";
import {useMenuContext} from "../menuContext.jsx";


function MenuMain () {
    const {t} = useTranslation()
    const {activeRoute, setActiveRoute} = useMenuContext()
    useEffect(()=>{
        setActiveRoute("Menu")
    }, [])
    return(
        <div className="MenuMain">
            <Link to="/menu/personalInfo" className="section G-box-shadow">
                <p className="prg">
                    <RiShieldUserFill className="icon"/>
                    {t("menu.header1")}
                </p>

            </Link>

            <Link to="/menu/settings" className="section G-box-shadow">
                <p className="prg">
                    <IoMdSettings className="icon"/>
                    {t("menu.header2")}
                </p>

            </Link>

            <Link to="/menu/notes" className="section G-box-shadow">
                <p className="prg">
                    <LuNotebookPen className="icon"/>
                    {t("menu.header3")}
                </p>

            </Link>
        </div>
    )
}

export default MenuMain
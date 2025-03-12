import React, {useEffect, useState} from 'react';
import './navbar.scss';
import { BiHomeAlt } from "react-icons/bi";
import { MdOutlinePeopleAlt } from "react-icons/md";
import { RiFileList2Line } from "react-icons/ri";
import { PiStorefrontBold } from "react-icons/pi";
import { MdOutlineAnalytics } from "react-icons/md";
import { RiInformation2Line } from "react-icons/ri";
import { IoMdExit } from "react-icons/io";
import {Link} from "react-router";
import {useCartContext} from "../../CartContext.jsx";
import {useTranslation} from "react-i18next";
import {Images} from "../../assets/images/images.js";

function Navbar() {
    const {activeNav} = useCartContext()
    const {t, i18n} = useTranslation()

    const [select,setSelect] = useState(false);
    const [language, setLanguage] = useState({title: "English", flag: Images.flagUS});
    const Locales = {
        am: {title: "Armenian", flag: Images.flagAM},
        en: {title: "English", flag: Images.flagUS},
        ru: {title: "Russian", flag: Images.flagRU}
    }

    useEffect(() => {
        Object.keys(Locales).map((locale)=>{
            if (i18n.resolvedLanguage === locale) {
                setLanguage(Locales[locale]);
            }
        })
    }, []);

    return (
        <div className='NavbarContainer G-box-shadow'>
            <Link className={`navBarLink ${activeNav === "home" && "activeNavBarLink"}`} to='/'><BiHomeAlt className="navbarIcon"/></Link>

            <div className="middleLinks">
                <Link className={`navBarLink ${activeNav === "partners" && "activeNavBarLink"}`} to='/partners'><MdOutlinePeopleAlt className="navbarIcon"/></Link>
                <Link className={`navBarLink ${activeNav === "products" && "activeNavBarLink"}`} to='/products'><RiFileList2Line className="navbarIcon"/></Link>
                <Link className={`navBarLink ${activeNav === "store" && "activeNavBarLink"}`} to='/store'><PiStorefrontBold className="navbarIcon"/></Link>
                <Link className={`navBarLink ${activeNav === "analytic" && "activeNavBarLink"}`} to='/analytic'><MdOutlineAnalytics className="navbarIcon"/></Link>
                <Link className={`navBarLink ${activeNav === "info" && "activeNavBarLink"}`} to='/info'><RiInformation2Line className="navbarIcon"/></Link>
            </div>


            <div className="middleLinks">
                <div className="languageSelect">
                    <button onClick={()=>{
                        setSelect(prev=>!prev)
                        setTimeout(()=>{
                            setSelect(false)
                        }, 10000)
                    }} className="selectBtn"><img src={language.flag} alt=""/></button>

                    {select &&
                        <div className="selectBlock">
                            {Object.keys(Locales).map((locale, index)=>{
                                return (
                                    <button
                                        className="selectItem"
                                        key={index}
                                        onClick={() => {
                                            i18n.changeLanguage(locale);
                                            setSelect(false)
                                            setLanguage(Locales[locale]);
                                        }}
                                    ><img src={Locales[locale].flag} alt=""/></button>
                                )
                            })}
                        </div>
                    }
                </div>
                <button className={`navBarLink ${activeNav === "exit" && "activeNavBarLink"}`} to='/'><IoMdExit className="navbarIcon"/></button>
            </div>
        </div>
    );
}

export default Navbar;
import React, {useEffect, useRef, useState} from 'react';
import './NewProductModal.scss';
import {useProductTypesContext} from "../productTypesContext.jsx";
import {FaImages} from "react-icons/fa";
import {TiArrowSortedUp} from "react-icons/ti";
import {useTranslation} from "react-i18next";
import { FaPlus } from "react-icons/fa6";
import { IoMdCloseCircle } from "react-icons/io";
import {UseWaysImg} from "./useWaysImg/useWaysImg.js";


function NewProductModal() {
    const {setNewProductModal} = useProductTypesContext()
    const {t} = useTranslation();

    const [useWays, setUseWays] = useState([])

    const handleUseWays = (indexx) => {
        if (useWays[indexx]) {
            let newUseWays = useWays.filter((w, index) => index === indexx);
            setUseWays(newUseWays);
        }
    }

    const handleAddNewUseWays = () => {
        setUseWays([...useWays, {
            img: null, text: ""
        }])
    }

    const [activeSelect, setActiveSelect] = useState(null)


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
        <div className='NewProductModalContainer'>

            {menuOpen &&
            <div ref={menuRef}
                 style={{
                     position: "fixed",
                     top: `${menuPosition.y}px`,
                     left: `${menuPosition.x}px`,
                 }} className="selectCont">
                {UseWaysImg.map((img, index) => (
                    <img src={img} key={index} alt=""/>
                ))}
            </div>}

            <div onClick={() => setNewProductModal(false)} className="backgroundBlock"></div>

            <div className="modalContainer">
                <div className="modalCont G-scrollbar-style">
                    <div className="modal G-box-shadow">

                        <div className="heightBlock">
                            <div className="imagesCont">
                                <label className="inputLabel" htmlFor="imageInput">
                                    <input type="file"
                                           accept="image/*"
                                           id="imageInput"
                                    />
                                    <FaImages className="icon"/>
                                </label>

                                <div className="secondBlock">
                                    <button className="btn leftBtn"><TiArrowSortedUp className="icon"
                                                                                     style={{rotate: '-90deg'}}/></button>
                                    <div className="smallImg"><FaImages className="icon"/></div>
                                    <div className="smallImg"><FaImages className="icon"/></div>
                                    <div className="smallImg"><FaImages className="icon"/></div>

                                    <button className="btn rightBtn "><TiArrowSortedUp className="icon"
                                                                                       style={{rotate: '90deg'}}/></button>
                                </div>

                            </div>

                            <div className="inputsCont">
                                <label className="G-label" htmlFor="name">
                                    <p className="G-overText">#{t("products.placeholder6")}</p>
                                    <input id="name" type="text" className="G-input" />
                                    <p className="errorText"></p>
                                </label>

                                <label className="G-label" htmlFor="article1">
                                    <p className="G-overText">#{t("products.placeholder7")}</p>
                                    <input id="article1" type="text" className="G-input" />
                                    <p className="errorText"></p>
                                </label>

                                <label className="G-label" htmlFor="article2">
                                    <p className="G-overText">#{t("products.placeholder8")}</p>
                                    <input id="article2" type="text" className="G-input" />
                                    <p className="errorText"></p>
                                </label>

                                <label className="G-label" htmlFor="desc">
                                    <p className="G-overText">#{t("products.placeholder9")}</p>
                                    <textarea className="G-input textarea" name="desc" id="desc" cols="20" rows="10"></textarea>
                                    <p className="errorText"></p>
                                </label>
                            </div>
                        </div>

                        <div className="secondBlock">
                            <div className="halfBlock">
                                <label className="G-label" htmlFor="name">
                                    <p className="G-overText">#{t("products.placeholder10")}</p>
                                    <input id="name" type="text" className="G-input" />
                                    <p className="errorText"></p>
                                </label>
                                <label className="G-label" htmlFor="name">
                                    <p className="G-overText">#{t("products.placeholder11")}</p>
                                    <input id="name" type="text" className="G-input" />
                                    <p className="errorText"></p>
                                </label>
                                <label className="G-label" htmlFor="name">
                                    <p className="G-overText">#{t("products.placeholder12")}</p>
                                    <input id="name" type="text" className="G-input" />
                                    <p className="errorText"></p>
                                </label>
                            </div>

                            <div className="halfBlock">
                                <label className="G-label" htmlFor="name">
                                    <p className="G-overText">#{t("products.placeholder13")}</p>
                                    <input id="name" type="text" className="G-input" />
                                    <p className="errorText"></p>
                                </label>
                                <label className="G-label" htmlFor="name">
                                    <p className="G-overText">#{t("products.placeholder14")}</p>
                                    <input id="name" type="text" className="G-input" />
                                    <p className="errorText"></p>
                                </label>
                                <label className="G-label" htmlFor="name">
                                    <p className="G-overText">#{t("products.placeholder15")}</p>
                                    <input id="name" type="text" className="G-input" />
                                    <p className="errorText"></p>
                                </label>
                            </div>
                        </div>

                        <div className="thirdBlock">
                            <p className="header">{t("products.header5")}</p>

                            {useWays.map((item, index) => (
                                <div className="useWaysBlock" key={index}>
                                    <button onClick={()=>{
                                        setActiveSelect(index)
                                        setMenuOpen(true)
                                    }} className="selectBlock">
                                        {item.img ? <img src={item.img} className="img" alt=""/>
                                        : <FaImages className="icon"/>
                                    }
                                    </button>

                                            <input id="text" type="text" placeholder={t("products.placeholder16")} className="G-input" />

                                    <button onClick={()=>handleUseWays(index)} className="removeBtn">
                                        <IoMdCloseCircle className="icon"/>
                                    </button>
                                </div>
                            ))}

                            <button onClick={()=>handleAddNewUseWays()} className="addBtn"><FaPlus className="icon"/></button>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    );
}

export default NewProductModal;
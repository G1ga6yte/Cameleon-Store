import React, {useEffect, useRef, useState} from 'react';
import './NewProductModal.scss';
import {useProductTypesContext} from "../productTypesContext.jsx";
import {FaImages} from "react-icons/fa";
import {TiArrowSortedUp} from "react-icons/ti";
import {useTranslation} from "react-i18next";
import { FaPlus } from "react-icons/fa6";
import { IoMdCloseCircle } from "react-icons/io";
import {UseWaysImg} from "./useWaysImg/useWaysImg.js";
import { FaCheck } from "react-icons/fa6";


function NewProductModal() {
    const {setNewProductModal} = useProductTypesContext()
    const {t} = useTranslation();

    ////////////// Use Ways State ///////////////////////////////
    const [useWays, setUseWays] = useState([]) // ways list
    const menuRef3 = useRef(null); // ref for block end
    const [activeSelect, setActiveSelect] = useState(null) // active way img chose (index)
    const [menuPosition, setMenuPosition] = useState({x: 0, y: 0}); // use way img list position
    const [menuOpen, setMenuOpen] = useState(false); // use way img menu handle
    const menuRef2 = useRef(null);

    const handleUseWays = (id) => {
        if (id) {
            // Filter out the item where the text matches the given item's text
            const newUseWays = useWays.filter((el) => el.id !== id);
            setUseWays(newUseWays);
        }
    }

    const handleAddNewUseWays = () => {
        setUseWays([...useWays, {
            img: null, text: "", id: useWays.length+1
        }])
        setTimeout(()=>{
            if (menuRef3.current) {
                menuRef3.current.scrollIntoView({behavior: 'smooth', block: 'end'});
            }
        }, 0)

    }

    const handleMenuOpen = (event, index) => {
        event.preventDefault();
        let windowsHeight = window.innerHeight;
        let windowsWidth = window.innerWidth;
        setMenuPosition({x: event.clientX + 150 > windowsWidth ? event.clientX-150 : event.clientX, y: event.clientY+200 > windowsHeight ? event.clientY-200 : event.clientY});
        setMenuOpen(true);
        setActiveSelect(index)
    };

    const handleUseWaysImage = (img) => {
        const newUseWays = [...useWays]; // Create a copy of the current useWays
        newUseWays[activeSelect] = { ...newUseWays[activeSelect], img }; // Only update the img for the active index
        setUseWays(newUseWays); // Set the new state with updated img
        setMenuOpen(false)
    }

    useEffect(() => {
        const handleClickOutside = (event) => {
            if (menuRef2.current && !menuRef2.current.contains(event.target)) {
                setMenuOpen(false)
            }
        };
        document.addEventListener("mousedown", handleClickOutside);
        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, []);



    ///////////// checkboxes /////////////////////////////
    const [checkbox1, setCheckbox1] = useState(true)


    return (
        <div className='NewProductModalContainer'>

            {menuOpen &&
                <div ref={menuRef2}
                     style={{
                         position: "fixed",
                         top: `${menuPosition.y}px`,
                         left: `${menuPosition.x}px`,
                     }} className="selectCont">
                    {UseWaysImg.map((img, imgIndex) => (
                        <button
                            onClick={() => {
                                handleUseWaysImage(img)
                            }}
                            className={`selectBtn ${useWays[activeSelect]?.img === img && "activeSelectBtn"}`}
                            key={imgIndex}
                        >
                            <img src={img} alt=""/>
                        </button>
                    ))}
                </div>
            }

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

                        <div className="checkboxesBlock">
                            <button onClick={()=>setCheckbox1(prev=>!prev)} className="checkboxBtn">
                                <div className={`checkbox ${checkbox1 && "activeCheckBox"}`}>
                                    <FaCheck className="icon"/>
                                </div>
                                {t("products.prg4")}
                            </button>
                        </div>

                        <div className="thirdBlock">
                            <p className="header">{t("products.header5")}</p>

                            {useWays.map((item, index) => (
                                <div className="useWaysBlock" key={index}>
                                    <button onClick={(e)=>{
                                        handleMenuOpen(e, index)
                                    }} className="selectBlock">
                                        {/*{item.img ? <img src={item.img} className="img" alt=""/>*/}
                                        {/*    : <FaImages className="icon"/>*/}
                                        {/*}*/}
                                        {/*<img src={item.img} className="img" alt=""/>*/}
                                        {item.img ? <img className="img" src={item.img} alt=""/> :
                                            <FaImages className="icon"/>
                                        }
                                    </button>

                                            <input value={item.text} onChange={(e)=>{
                                                const newUseWays = [...useWays];
                                                newUseWays[index].text = e.target.value;
                                                setUseWays(newUseWays);
                                            }} id="text" type="text" placeholder={t("products.placeholder16")} className="G-input" />

                                    <button onClick={()=>handleUseWays(item.id)} className="removeBtn">
                                        <IoMdCloseCircle className="icon"/>
                                    </button>
                                </div>
                            ))}

                            <button  onClick={()=>handleAddNewUseWays()} className="addBtn"><FaPlus className="icon"/></button>

                        </div>

                        <div className="buttonsBlock">
                            <button className="btn cancelBtn">
                                {t("products.btn6")}
                            </button>

                            <button className="btn saveBtn">
                                {t("products.btn14")}
                            </button>
                        </div>

                    </div>
                    <div ref={menuRef3} className="refBlock"></div>

                </div>

            </div>
        </div>
    );
}

export default NewProductModal;
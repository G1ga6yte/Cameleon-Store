import React, {useEffect, useRef, useState} from "react";
import "./filterCont.scss";
import {useTranslation} from "react-i18next";
import {TestProductGroups} from "../../../TestData/testProductGroups.js"
import {FaCheck} from "react-icons/fa6";
import {IoIosArrowDown} from "react-icons/io";
import {MdOutlineMenu} from "react-icons/md";

function FilterCont() {
    const {t} = useTranslation()
    const [selectBlock1, setSelectBlock1] = useState(false)
    const [select1, setSelect1] = useState([])
    const menuRef = useRef(null);
    const [activeOpenFolder, setActiveOpenFolder] = useState(null)


    const StringJoiner = (arr) => {
        let stringArr = [];
        arr.forEach((element) => {
            stringArr.push(element.name)
        });
        return stringArr.join(", ");
    }

    useEffect(() => {
        const handleClickOutside = (event) => {
            if (menuRef.current && !menuRef.current.contains(event.target)) {
                setSelectBlock1(false)
            }
        };
        document.addEventListener("mousedown", handleClickOutside);
        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, []);

    return (
        <div className="filterContainer">
            <div className="headLine">
                <p className="header">{t("store.header1")}</p>

                <div className="buttonsCont">
                    <button className="btn exitBtn">{t("store.btn1")}</button>
                    <button className="btn enterBtn">{t("store.btn2")}</button>

                </div>
            </div>

            <div className="inputsCont">

                <input
                    type="text"
                    className="searchInput"
                    placeholder={t("store.placeholder4")}
                />

                <input
                    type="text"
                    className="searchInput"
                    placeholder={t("store.placeholder1")}
                />

                <input
                    type="text"
                    className="searchInput"
                    placeholder={t("store.placeholder2")}
                />


                <div ref={menuRef} className="selectCont">
                    <div onClick={() => setSelectBlock1(prev => !prev)}
                         className={`selectedBlock ${selectBlock1 && "activeSelect"}`}>
                        {select1.length ?
                            <span className="selectedSpan">{StringJoiner(select1)}</span> :
                            <span className="placeholderSpan">{t("store.placeholder3")}</span>
                        }
                        <IoIosArrowDown className="icon"/>
                    </div>
                    {selectBlock1 &&
                        <div className="selectList G-scrollbar-style G-box-shadow ">
                            {TestProductGroups.map((el, index) => {
                                return (
                                    <button key={index} onClick={() => {
                                        if (select1.includes(el)) {
                                            let newSelect = select1.filter((ell) => ell !== el)
                                            setSelect1(newSelect)
                                        } else {
                                            setSelect1([...select1, el])
                                        }
                                    }} className="selectItem">
                                        <div className="btnHead">
                                            <div className="checkboxName">
                                                <div className={`checkbox ${select1.includes(el) && "activeCheckbox"}`}>
                                                    <FaCheck className="icon"/>
                                                </div>
                                                {el.name}
                                            </div>

                                            {el.inGroups && el.inGroups.length > 0 &&
                                                <button className="foldersBtn" onClick={(e) => {
                                                    e.stopPropagation()
                                                    if (activeOpenFolder === el.id) {
                                                        setActiveOpenFolder("")
                                                    } else {
                                                        setActiveOpenFolder(el.id)
                                                    }
                                                }}>
                                                    <MdOutlineMenu className="icon"/>
                                                </button>
                                            }
                                        </div>
                                        {el.id === activeOpenFolder &&
                                            el.inGroups && el.inGroups.length > 0 &&
                                            <div className="menuBlock">

                                                {el.inGroups.map((ell, index) => {
                                                    return (
                                                        <button className="folderItem" key={index} onClick={(e) => {
                                                            e.stopPropagation()
                                                            if (select1.includes(ell)) {
                                                                let newSelect = select1.filter((elm) => elm !== ell)
                                                                setSelect1(newSelect)
                                                            } else {
                                                                setSelect1([...select1, ell])
                                                            }
                                                        }}>
                                                            <div key={index}
                                                                 className={`checkbox ${select1.includes(ell) && "activeCheckbox"} ${select1. includes(el) && "activeCheckbox"}`}>
                                                                <FaCheck className="icon"/>
                                                            </div>
                                                            {ell.name}
                                                        </button>
                                                    )
                                                })}
                                            </div>
                                        }


                                    </button>
                                )
                            })}
                        </div>
                    }
                </div>

            </div>


        </div>
    )
}


export default FilterCont
import React, { useState } from "react";
import "./filterCont.scss";
import { useTranslation } from "react-i18next";
import { TestProductGroups } from "../../../TestData/testProductGroups.js"
import { FaCheck } from "react-icons/fa6";
import { IoIosArrowDown } from "react-icons/io";

function FilterCont() {
    const { t } = useTranslation()
    const [selectBlock1, setSelectBlock1] = useState(false)
    const [selectBlock2, setSelectBlock2] = useState(false)
    const [select1, setSelect1] = useState([])
    const [select2, setSelect2] = useState("")


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
                    placeholder={t("store.placeholder1")}
                />

                <input
                    type="text"
                    className="searchInput"
                    placeholder={t("store.placeholder2")}
                />


                <div className="selectCont">
                    <div onClick={()=>setSelectBlock1(prev=>!prev)} className={`selectedBlock ${selectBlock1 && "activeSelect"}`}>
                        {select1.length ?
                            <span className="selectedSpan">{select1[0].name}{select1.length > 1 && "..."}</span> :
                            <span className="placeholderSpan">{t("store.placeholder3")}</span>
                        }
                        <IoIosArrowDown className="icon" />
                    </div>
                    {selectBlock1 &&
                        <div  className="selectList G-scrollbar-style G-box-shadow ">
                            {TestProductGroups.map((el, index) => {
                                return (
                                    <button onClick={()=>{
                                        if(select1.includes(el)){
                                            let newSelect = select1.filter((ell)=>ell !== el)
                                            setSelect1(newSelect)
                                        } else {
                                            setSelect1([...select1, el])
                                        }
                                    }} className="selectItem">
                                        <div className={`checkbox ${select1.includes(el) && "activeCheckbox"}`}>
                                            <FaCheck className="icon" />
                                        </div>
                                        {el.name}
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
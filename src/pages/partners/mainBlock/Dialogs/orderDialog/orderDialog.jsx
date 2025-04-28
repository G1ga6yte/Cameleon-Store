import React, { useEffect, useState } from 'react';
import './OrderDialog.scss';
import { useTranslation } from "react-i18next";
import { IoClose } from "react-icons/io5";
import { HiMiniSquares2X2 } from "react-icons/hi2";
import { BsTrash3Fill } from "react-icons/bs";
import OrderDialogListMenu from "../orderDialogListMenu/orderDialogListMenu.jsx";
import { TestOrderList } from "../../../../../TestData/testOrderList.js"
import { FaCode } from "react-icons/fa6";


function OrderDialog({ setOrderDialog, setListMenuDialog, setProductsList, productsList, listMenuDialog }) {
    const { t } = useTranslation();
    const id = 345


    useEffect(() => {
        setProductsList(TestOrderList)
    }, [])




    const removeProduct = (index) => {
        const updatedProductsList = productsList.filter((_, i) => i !== index);
        setProductsList(updatedProductsList);
    };

    const getTotalPrice = () => {
        return productsList.reduce((total, item) => total + (item.price * item.peaces), 0);
    };

    const [payValue, setPayValue] = useState("")


    ///////////////////////// code Dialog ///////////
    const [codeDialog, setCodeDialog] = useState(false)
    const [textAreaValue, setTextAreaValue] = useState("")

    const addProductsByCode = (code) => {

        const parsedProducts = JSON.parse(code);

        // Validate that it's an array
        if (!Array.isArray(parsedProducts)) {
            throw new Error('Input must be a valid JSON array');
        }else {
            setProductsList(parsedProducts);
            setCodeDialog(false)
        }

        // Optionally validate each item has required fields
        parsedProducts.forEach(product => {
            if (!product._id || !product.name || !product.price) {
                throw new Error('Each product must have _id, name, and price fields');
            }
        });

    }


    return (
        <div className='OrderDialogContainer'>
            <div onClick={() => setOrderDialog(false)} className="backgroundBlock"></div>

            {
                codeDialog &&
                <div className="codeDialog">
                    <div onClick={() => setCodeDialog(false)}  className="backgroundBlock"></div>

                    <div className="codeDialogCont">
                        <p className="header">{t("partners.header5")}</p>
                        <textarea value={textAreaValue} onChange={(e)=>{
                            setTextAreaValue(e.target.value);
                        }} className="textarea G-scrollbar-style" name="codeInput" id="codeInput" cols="30" rows="10"></textarea>
                        <div className="buttonsCont">
                            <button onClick={()=>setCodeDialog(false)} className="btn cancelBtn">{t("partners.btn4")}</button>
                            <button onClick={()=>{
                                addProductsByCode(textAreaValue)
                            }} className="btn confirmBtn">{t("partners.btn5")}</button>
                        </div>
                    </div>
                </div>

            }



            <div className="OrderDialog G-box-shadow">
                <div className="headLine">
                    <p className="header">{t("partners.header3")} #{id}</p>
                    <button onClick={() => setOrderDialog(false)} className="closeBtn">
                        <IoClose className="icon" />
                    </button>
                </div>

                <div className="inputsContainer">
                    <input
                        type="text"
                        className="searchInput"
                        placeholder={t("partners.placeholder3")}
                    />
                    <input
                        type="text"
                        className="searchInput"
                        placeholder={t("partners.placeholder4")}
                    />
                    <input
                        type="text"
                        className="searchInput"
                        placeholder={t("partners.placeholder6")}
                    />
                    <button onClick={() => setListMenuDialog(prev => !prev)} className="toggleListMenu">
                        <HiMiniSquares2X2 className="icon" />
                        {t("partners.btn3")}
                    </button>

                    <button onClick={()=>setCodeDialog(true)} className="codeDialogBtn">
                        <FaCode className="icon"/>
                    </button>
                </div>

                <div className="ListContainer G-scrollbar-style">
                    <table className="table">
                        <thead className="tableHead">
                            <tr className="tableHeadRow">
                                <th>#№</th>
                                <th>#{t("partners.th1")}</th>
                                <th>#{t("partners.th7")}</th>
                                <th>#{t("partners.th8")}</th>

                                <th>#{t("partners.th9")}</th>
                                <th>#{t("partners.th11")}</th>
                                <th>#{t("partners.th10")}</th>
                                <th></th>

                            </tr>
                        </thead>
                        <tbody className="tableBody">


                            {productsList.map((item, index) => {

                                return (
                                    <tr className={`tableRow`} key={index}>
                                        <td className='indexTD'>{index + 1}</td>
                                        <td>{item._id}</td>
                                        <td>{item.article}</td>
                                        <td>{item.name}</td>
                                        <td>{item.price}.00</td>
                                        <td>
                                            <input
                                                type="text"
                                                className="peacesInput"
                                                value={item.peaces}
                                                onChange={(e) => {
                                                    const updatedPeaces = e.target.value;
                                                    const updatedProductsList = [...productsList];
                                                    updatedProductsList[index].peaces = parseInt(updatedPeaces, 10) || 0;
                                                    setProductsList(updatedProductsList);
                                                }}
                                            />
                                        </td>
                                        <td className="totalTD">{item.price * item.peaces}.00</td>
                                        <td>
                                            <button className="removeBtn" onClick={() => removeProduct(index)}>
                                                <BsTrash3Fill className="icon" />
                                            </button>
                                        </td>

                                    </tr>
                                )
                            })}
                        </tbody>

                    </table>





                    <div className="overflowWhiteBlock"></div>

                    <div className="totalCont">
                        <div className="infoCont">
                            <div className="prgLine">
                                <span>{t("partners.prg7")}</span>
                                <div className="line"></div>
                                <span className='G-bold'>{getTotalPrice().toFixed(2)}</span>
                            </div>

                            <div className="prgLine">
                                <span>{t("partners.prg8")}</span>
                                <div className="line"></div>
                                <span>0.00</span>
                            </div>

                            <div className="prgLine">
                                <span>{t("partners.prg9")}</span>
                                <div className="line"></div>
                                <span >{getTotalPrice().toFixed(2)}</span>
                            </div>
                        </div>

                        <div className="actionsCont">
                            <div className="paymentCont">
                                <input onChange={(e) => {
                                    const updatedPeaces = e.target.value;
                                    let value = parseInt(updatedPeaces, 10) || 0;


                                    if (value >= getTotalPrice()) {
                                        setPayValue(getTotalPrice())
                                    } else {
                                        setPayValue(String(value))
                                    }

                                    if (value === 0) {
                                        setPayValue("")
                                    }
                                }} value={payValue} type="text" className="paymentInput" placeholder={t("partners.placeholder5")} />
                                <button className="payBtn">{t("partners.btn1")}</button>
                            </div>
                            <div className="actionButtonsCont">
                                <button onClick={()=>{
                                    setOrderDialog(false)
                                }} className="cancelBtn btn">{t("partners.btn4")}</button>
                                <button className="confirmBtn btn">{t("partners.btn5")}</button>
                            </div>
                        </div>
                    </div>
                </div>



            </div>
        </div>
    );
}

export default OrderDialog;
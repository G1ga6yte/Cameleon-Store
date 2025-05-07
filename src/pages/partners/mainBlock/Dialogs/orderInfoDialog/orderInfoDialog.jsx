import React, {useState} from "react";
import "./orderInfoDialog.scss";
import {useTranslation} from "react-i18next";
import {IoClose} from "react-icons/io5";
import { FaRegEdit } from "react-icons/fa";

function OrderInfoDialog ({activeOrder, setOrderInfoDialog}){
    const {t} = useTranslation()
    let id = 74568;

    const getTotalPrice = () => {
        return activeOrder.productsList.reduce((total, item) => total + (item.salePrice * item.count), 0);
    };

    const [payValue, setPayValue] = useState("")

    return(
        <div className="orderInfoDialogCont">
            <div className="backgroundBlock" onClick={()=>setOrderInfoDialog(false)}></div>

            <div className="dialogCont G-box-shadow">

                <div className="headLine">
                    <div className="headerLine">
                        <p className="header">{t("partners.header6")} #{id}</p>
                        <div className="buttonsCont">
                            <button className="editBtn">
                                <FaRegEdit className="icon"/>
                            </button>
                            <button onClick={() => setOrderInfoDialog(false)} className="closeBtn">
                                <IoClose className="icon" />
                            </button>
                        </div>
                    </div>

                    <div className="infoPrgCont">
                        <p className="infoPrg">
                            <span className="boldPrg">{t("partners.prg1")}: </span>
                            {activeOrder.sellingSum}.00
                        </p>

                        <p className="infoPrg">
                            <span className="boldPrg">{t("partners.prg2")}: </span>
                            {activeOrder.costSum}.00
                        </p>

                        <p className="infoPrg">
                            <span className="boldPrg">{t("partners.prg3")}: </span>
                            {activeOrder.profit}.00
                        </p>

                        <p className="infoPrg">
                            <span className="boldPrg">{t("partners.th3")}: </span>
                            {activeOrder.note}
                        </p>

                        <p className="infoPrg">
                            <span className="boldPrg">{t("partners.th2")}: </span>
                            {activeOrder.date}
                        </p>


                    </div>

                </div>

                <div className="ProductsList G-scrollbar-style">
                    <table className="table">
                        <thead className="tableHead">
                        <tr className="tableHeadRow">
                            <th>#№</th>
                            <th>#{t("store.th1")}</th>
                            <th>#{t("store.th2")}</th>
                            <th>#{t("store.th3")}</th>
                            <th>#{t("store.th4")}</th>
                            <th>#{t("store.th5")}</th>
                            <th>#{t("store.th6")}</th>
                            <th>#{t("store.th7")}</th>

                        </tr>
                        </thead>
                        <tbody className="tableBody">

                        <div style={{
                            transform: "translateY(-30px)"
                        }}></div>

                        {activeOrder.productsList.map((item, index) => {

                            return (
                                <tr className={`tableRow`} key={index}>
                                    <td>{index+1}</td>
                                    <td>{item._id}</td>
                                    <td>{item.article}</td>
                                    <td>{item.name}</td>
                                    <td>{item.salePrice}.00</td>
                                    <td>{item.enterPrice}.00</td>
                                    <td>{item.count}</td>
                                    <td>{item.salePrice * item.count}.00</td>
                                </tr>
                            )})}
                        </tbody>

                    </table>


                    <div className="overflowWhiteBlock"></div>
                </div>

                <div className="actionsLine">
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
                                    setOrderInfoDialog(false)
                                }} className="cancelBtn btn">{t("partners.btn4")}</button>
                                <button className="deleteBtn btn">{t("partners.btn8")}</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default OrderInfoDialog
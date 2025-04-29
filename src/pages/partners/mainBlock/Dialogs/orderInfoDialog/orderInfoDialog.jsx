import React from "react";
import "./orderInfoDialog.scss";
import {useTranslation} from "react-i18next";
import {IoClose} from "react-icons/io5";

function OrderInfoDialog ({activeOrder, setOrderInfoDialog}){
    const {t} = useTranslation()
    let id = 74568;

    return(
        <div className="orderInfoDialogCont">
            <div className="backgroundBlock" onClick={()=>setOrderInfoDialog(false)}></div>

            <div className="dialogCont G-box-shadow">

                <div className="headLine">
                    <div className="headerLine">
                        <p className="header">{t("partners.header3")} #{id}</p>
                        <div className="buttonsCont">
                            <button className="editBtn">

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

                </div>
            </div>
        </div>
    )
}

export default OrderInfoDialog
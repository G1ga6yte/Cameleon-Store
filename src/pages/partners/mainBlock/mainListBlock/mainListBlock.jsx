import React, {useEffect, useState} from "react";
import "./mainListBlock.scss";
import {FaCheck} from "react-icons/fa6";
import Stack from "@mui/material/Stack";
import Pagination from "@mui/material/Pagination";
import {useTranslation} from "react-i18next";
import {TestPartnersOrderList} from "../../../../TestData/testPartnersOrderList.js";
import OrderInfoDialog from "../Dialogs/orderInfoDialog/orderInfoDialog.jsx";

function MainListBlock (){
    const {t} = useTranslation()

    const [activeOrder, setActiveOrder] = useState({})
    const [ordersList, setOrdersList] = useState([])
    const [orderInfoDialog, setOrderInfoDialog] = useState(false)

    useEffect(() => {
        let updatedOrders = TestPartnersOrderList
        let lastDate = 0
        updatedOrders.map((el, index)=> {
            let date = el.date.split('.')
            if (Number(date[0]) === lastDate){
                el.focused = true
                updatedOrders[index-1].focused = true
            } else {
                el.focused = false
            }
            lastDate = Number(date[0])
        })

        setOrdersList(updatedOrders)
    }, []);

    return(
        <div className="mainListBlock">

            {orderInfoDialog &&
                <OrderInfoDialog
                    activeOrder={activeOrder}
                    setOrderInfoDialog={setOrderInfoDialog}
                />
            }

            <div className="ProductsList G-scrollbar-style">
                <table className="table">
                    <thead className="tableHead">
                    <tr className="tableHeadRow">
                        <th>#{t("partners.th1")}</th>
                        <th>#{t("partners.th2")}</th>
                        <th>#{t("partners.th3")}</th>
                        <th>#{t("partners.th4")}</th>
                        <th>#{t("partners.th5")}</th>
                        <th>#{t("partners.th6")}</th>

                    </tr>
                    </thead>
                    <tbody className="tableBody">

                    {ordersList.map((item, index) => {

                        return (
                        <tr onClick={()=>{
                            setActiveOrder(item)
                            setOrderInfoDialog(true)
                        }} className={`tableRow ${item.focused && "focusedLine"}`} key={index}>
                            <td>{item.regularNum}</td>
                            <td>{item.date}</td>
                            <td>{item.note}</td>
                            <td>{item.sellingSum}.00</td>
                            <td>{item.profit}.00</td>
                            <td>{item.sellingSum <= item.paid ?
                                <span className="status statusOK">{t("partners.prg5")}</span>
                                : <span className="status statusDebt">{t("partners.prg6")}</span>
                            }</td>
                        </tr>
                    )})}
                    </tbody>

                </table>


                <div className="overflowWhiteBlock"></div>
            </div>

            <div className="pagination">

                <Stack spacing={2}>
                    <Pagination
                        count={8}
                        // page={activePage + 1}
                        onChange={()=>{}}
                        shape="rounded"
                    />
                </Stack>

            </div>
        </div>
    )
}

export default MainListBlock
import React, { useEffect, useState } from "react";
import "./mainCont.scss";
import { useTranslation } from "react-i18next";
import Stack from "@mui/material/Stack";
import Pagination from "@mui/material/Pagination";
import {TestStoreList} from "../../../TestData/testStoreList.js"
function MainCont (){
    const {t} = useTranslation()

    const [storeList, setStoreList] = useState([])

    useEffect(()=>{
        setStoreList(TestStoreList)
    }, [])
    return(
        <div className="mainContainer ">
             <div className="ProductsList G-scrollbar-style">
                <table className="table">
                    <thead className="tableHead">
                    <tr className="tableHeadRow">
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

                    {storeList.map((item, index) => {

                        return (
                        <tr className={`tableRow`} key={index}>
                            <td>{item._id}</td>
                            <td>{item.article}</td>
                            <td>{item.name}</td>
                            <td>{item.sellPrice}.00</td>
                            <td>{item.enterPrice}.00</td>
                            <td>{item.peacesInStore}</td>
                            <td>{item.barCode}</td>
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


export default MainCont
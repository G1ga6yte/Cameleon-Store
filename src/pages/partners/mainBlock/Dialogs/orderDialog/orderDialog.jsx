import React, {useEffect, useState} from 'react';
import './OrderDialog.scss';
import {useTranslation} from "react-i18next";
import { IoClose } from "react-icons/io5";
import { HiMiniSquares2X2 } from "react-icons/hi2";
import { BsTrash3 } from "react-icons/bs";
import OrderDialogListMenu from "../orderDialogListMenu/orderDialogListMenu.jsx";

function OrderDialog({setOrderDialog}) {
    const {t} = useTranslation();
    const id = 345

    const [listMenuDialog, setListMenuDialog] = useState(false);
    const [productsList, setProductsList] = useState([]);

    useEffect(() => {
        
    }, [])

    return (
        <div className='OrderDialogContainer'>

            {listMenuDialog && <OrderDialogListMenu
                setListMenuDialog={setListMenuDialog}
                setProductsList={setProductsList}
            />}
            <div onClick={()=>setOrderDialog(false)} className="backgroundBlock"></div>

            <div className="OrderDialog G-box-shadow">
                <div className="headLine">
                    <p className="header">{t("partners.header3")} #{id}</p>
                    <button onClick={()=>setOrderDialog(false)} className="closeBtn">
                        <IoClose className="icon"/>
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

                    <button onClick={()=>{setListMenuDialog(true)}} className="toggleListMenu">
                        <HiMiniSquares2X2 className="icon"/>
                        {t("partners.btn3")}
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
                                <th>#{t("partners.th5")}</th>
                                <th>#{t("partners.th10")}</th>
                                <th></th>

                            </tr>
                            </thead>
                            <tbody className="tableBody">


                            {productsList.map((item, index) => {

                                return (
                                    <tr className={`tableRow`} key={index}>
                                        <td>{index+1}</td>
                                        <td>{item.regularNum}</td>
                                        <td>{item.article}</td>
                                        <td>{item.name}</td>
                                        <td>{item.sellingSum}.00</td>
                                        <td>{item.profit}.00</td>
                                        <td>{item.total}.00</td>
                                        <td>
                                            <button className="removeBtn">
                                                <BsTrash3 className="icon"/>
                                            </button>
                                        </td>

                                    </tr>
                                )})}
                            </tbody>

                        </table>


                        <div className="overflowWhiteBlock"></div>
                </div>



            </div>
        </div>
    );
}

export default OrderDialog;
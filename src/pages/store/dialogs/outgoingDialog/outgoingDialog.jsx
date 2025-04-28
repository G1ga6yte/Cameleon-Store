import React, {useEffect, useState} from "react";
import "./outgoingDialog.scss";
import ProductsListDialog from "../productsListDialog/productsListDialog.jsx";
import {IoClose} from "react-icons/io5";
import {HiMiniSquares2X2} from "react-icons/hi2";
import {FaCode} from "react-icons/fa6";
import {BsTrash3Fill} from "react-icons/bs";
import {useTranslation} from "react-i18next";
import {TestOrderList} from "../../../../TestData/testOrderList.js";

function OutgoingDialog({setOutgoingDialog}) {
    const {t} = useTranslation()
    const id = 375876
    const [listMenuDialog, setListMenuDialog] = useState(false)
    const [productsList, setProductsList] = useState([]);


    useEffect(() => {
        setProductsList(TestOrderList)
    }, [])

    const removeProduct = (index) => {
        const updatedProductsList = productsList.filter((_, i) => i !== index);
        setProductsList(updatedProductsList);
    };

    const getTotalPrice = () => {
        return productsList.reduce((total, item) => total + (item.enterPrice * item.peaces), 0);
    };

    const [payValue, setPayValue] = useState("")

    return (<div className="outgoingDialogCont">

        {listMenuDialog && <ProductsListDialog
            setListMenuDialog={setListMenuDialog}
        />}

        <div onClick={() => setOutgoingDialog(false)} className="backgroundBlock"></div>

        <div className="OrderDialog G-box-shadow">
            <div className="headLine">
                <p className="header">{t("store.header3")} #{id}</p>
                <button onClick={() => setOutgoingDialog(false)} className="closeBtn">
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
            </div>

            <div className="ListContainer G-scrollbar-style">
                <table className="table">
                    <thead className="tableHead">
                    <tr className="tableHeadRow">
                        <th>#№</th>
                        <th>#{t("partners.th1")}</th>
                        <th>#{t("partners.th7")}</th>
                        <th>#{t("partners.th8")}</th>

                        <th>#{t("store.th5")}</th>
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
                                <td>{item.enterPrice}.00</td>
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
                                <td className="totalTD">{item.enterPrice * item.peaces}.00</td>
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
                    </div>

                    <div className="actionsCont">
                        <div className="actionButtonsCont">
                            <button onClick={()=>setEntryDialog(false)} className="cancelBtn btn">{t("partners.btn4")}</button>
                            <button className="confirmBtn btn">{t("partners.btn5")}</button>
                        </div>
                    </div>
                </div>
            </div>



        </div>
    </div>
    )
}


export default OutgoingDialog
import React, {useEffect, useRef, useState} from "react";
import "./productsListDialog.scss"
import {IoIosArrowForward} from "react-icons/io";
import {FaCheck} from "react-icons/fa6";
import Stack from "@mui/material/Stack";
import Pagination from "@mui/material/Pagination";
import {TestProductGroups} from "../../../../TestData/testProductGroups.js";
import {ProductsData} from "../../../../TestData/products.js";
import {useTranslation} from "react-i18next";

function ProductsListDialog ({setListMenuDialog}) {
    const {t} = useTranslation();
    const [groups, setGroups] = useState([])
    const [activeGroup, setActiveGroup] = useState(null)
    const [activeInGroup, setActiveInGroup] = useState(null) // menu handle by parent ID
    const [products, setProducts] = useState([])

    useEffect(() => {
        setGroups(TestProductGroups)
        setProducts(ProductsData)
    }, [])

    //////////////////////////// table settings ////////////////////
    const [fetchedData, setFetchedData] = useState([[]]);
    const [activePage, setActivePage] = useState(0);
    const [checked, setChecked] = useState(false);
    const [checkedProducts, setCheckedProducts] = useState([]);
    const containerRef = useRef(null);

    const handleCheckProduct = (id) => {
        if (checkedProducts.includes(id)) {
            let newData = checkedProducts.filter(productID => productID !== id);
            setCheckedProducts(newData);
        } else {
            setCheckedProducts([...checkedProducts, id]);
        }
    }

    useEffect(() => {
        const chunkSize = 20;
        const chunks = [];
        for (let i = 0; i < ProductsData.length; i += chunkSize) {
            const chunk = ProductsData.slice(i, i + chunkSize);
            chunks.push(chunk);
        }
        setActivePage(0);
        setFetchedData(chunks);
    }, [])

    const handlePageChange = (event, page) => {
        setActivePage(page - 1);
        if (containerRef.current) {
            containerRef.current.scrollIntoView({behavior: 'smooth', block: 'start'});
        }
    };

    return(
        <div className='OrderDialogListMenuContainer'>
            <div onClick={() => setListMenuDialog(false)} className="backgroundBlock"></div>

            <div className="menuContainer G-box-shadow">

                <div className="groupsCont G-scrollbar-style">
                    <div className="headBlock">
                        <p className="header">{t("partners.header4")}</p>
                    </div>
                    <div className="groupCont">
                        <button onClick={()=>{
                            setActiveGroup(null)
                        }} className={`groupBtn ${activeGroup === null && "activeGroupBtn"}`}>
                            {t("partners.btn6")}

                            <IoIosArrowForward  className="icon"/>
                        </button>
                    </div>
                    {groups.map((group, index) => {
                        return (
                            <div key={index} className="groupCont">
                                <button onClick={()=>{
                                    setActiveGroup(group.id)
                                    if (group.inGroups && group.inGroups.length > 0) {
                                        if (activeInGroup === group.id) {
                                            setActiveInGroup(null)
                                        } else {
                                            setActiveInGroup(group.id)
                                        }
                                    }
                                }}  className={`groupBtn ${activeGroup === group.id && "activeGroupBtn"} ${group.inGroups && group.inGroups.length > 0 && activeInGroup === group.id && "openGroupBtn"}`}>
                                    {group.name}

                                    <IoIosArrowForward className="icon"/>
                                </button>

                                {group.inGroups && group.inGroups.length > 0 && activeInGroup === group.id &&
                                    group.inGroups.map((inGroup, index) => {
                                        return(
                                            <button onClick={()=>{
                                                setActiveGroup(inGroup.id)
                                            }} key={index} className={`inGroupBtn ${activeGroup === inGroup.id && "activeGroupBtn"}`}>
                                                {inGroup.name}
                                                <IoIosArrowForward className="icon"/>

                                            </button>
                                        )
                                    })
                                }
                            </div>
                        )
                    })}
                </div>

                <div className="productsCont ">

                    <div className="productsList G-scrollbar-style">
                        <table className="table">
                            <thead className="tableHead">
                            <tr className="tableHeadRow">
                                <th className="checkboxTH">
                                    <button onClick={() => {
                                        setChecked(!checked);
                                    }} className={`checkbox ${checked && "checked"}`}>
                                        <FaCheck className="icon"/>
                                    </button>
                                </th>
                                <th>#{t("products.th1")}</th>
                                <th>#{t("products.th2")}</th>
                                <th>#{t("products.th3")}</th>
                                <th>#{t("products.th4")}</th>
                                <th>#{t("products.th5")}</th>
                                <th>#{t("products.th6")}</th>
                            </tr>
                            </thead>
                            <tbody className="tableBody">

                            <div style={{
                                transform: "translateY(-30px)"
                            }} ref={containerRef}></div>

                            {fetchedData[activePage].map((item, index) => (
                                <tr onClick={() => {
                                    handleCheckProduct(item._id);
                                }} className="tableRow" key={index}>
                                    <td className="checkboxTH">
                                        <button  className={`checkbox ${checkedProducts.includes(item._id) && "checked"}`}>
                                            <FaCheck className="icon"/>
                                        </button>
                                    </td>
                                    <td>{item._id}</td>
                                    <td>{item.article}</td>
                                    <td>{item.name}</td>
                                    <td>{item.salePrice}.00</td>
                                    <td>{item.enterPrice}.00</td>
                                    <td>{item.barcode}</td>
                                </tr>
                            ))}
                            </tbody>

                        </table>
                    </div>

                    <div className="paginationCont">

                        <Stack spacing={2}>
                            <Pagination
                                count={fetchedData.length}
                                page={activePage + 1}
                                onChange={handlePageChange}
                                shape="rounded"
                            />
                        </Stack>


                        <div className="actionButtons">
                            <button onClick={()=>{
                                setListMenuDialog(false)
                            }} className="btn cancelBtn">{t("partners.btn4")}</button>
                            <button className="btn addBtn">{t("partners.btn7")}</button>
                        </div>

                    </div>

                </div>

            </div>

        </div>
    )
}

export default ProductsListDialog
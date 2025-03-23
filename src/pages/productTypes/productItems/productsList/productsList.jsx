import React, {useEffect, useRef, useState} from 'react';
import './ProductsList.scss';
import {FaCheck} from "react-icons/fa6";
import {ProductsData} from "../../../../TestData/products.js";
import Pagination from '@mui/material/Pagination';
import Stack from '@mui/material/Stack';
import {RiDeleteBack2Fill} from "react-icons/ri";
import {MdDriveFileRenameOutline} from "react-icons/md";
import {TbReplaceFilled} from "react-icons/tb";
import {useTranslation} from "react-i18next";
import {HiDuplicate} from "react-icons/hi";
import ContextMenuItems from "./contextMenu.jsx";


function ProductsList() {
    const {t} = useTranslation()
    const [fetchedData, setFetchedData] = useState([[]]);
    const [activePage, setActivePage] = useState(0);
    const [checked, setChecked] = useState(true);
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

    //////////////// Context Menu /////////////
    const [menuPosition, setMenuPosition] = useState({x: 0, y: 0});
    const [menuOpen, setMenuOpen] = useState(false);
    const [actionItem, setActionItem] = useState(null);


    const handleContextMenu = (event, group) => {
        event.preventDefault();
        let windowsHeight = window.innerHeight;
        let windowsWidth = window.innerWidth;
        setMenuPosition({x: event.clientX + 100 > windowsWidth ? event.clientX-100 : event.clientX, y: event.clientY+150 > windowsHeight ? event.clientY-150 : event.clientY});
        setMenuOpen(true);
        setActionItem(group)
    };


    return (
        <div className='ProductsListContainer'>

            <ContextMenuItems
                setMenuOpen={setMenuOpen}
                menuOpen={menuOpen}
                menuPosition={menuPosition}
                actionItem={actionItem}
            />

            <div className="ProductsList">
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
                        <tr onContextMenu={(e) => handleContextMenu(e, item._id)}
                            className="tableRow" key={index}>

                            <td className="checkboxTH">
                                <button onClick={() => {
                                    handleCheckProduct(item._id);
                                }} className={`checkbox ${checkedProducts.includes(item._id) && "checked"}`}>
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


                <div className="overflowWhiteBlock"></div>
            </div>

            <div className="pagination">

                <Stack spacing={2}>
                    <Pagination
                        count={fetchedData.length}
                        page={activePage + 1}
                        onChange={handlePageChange}
                        shape="rounded"
                    />
                </Stack>

            </div>
        </div>
    );
}

export default ProductsList;
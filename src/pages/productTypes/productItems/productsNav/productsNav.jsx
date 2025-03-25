import React from 'react';
import './ProductsNav.scss';
import {useTranslation} from "react-i18next";
import { IoMdAdd } from "react-icons/io";
import { MdOutlineClear } from "react-icons/md";
import {useProductTypesContext} from "../../productTypesContext.jsx";


function ProductsNav() {
    const {t} = useTranslation()
    const {setNewProductModal} = useProductTypesContext()

    return (
        <div className='ProductsNavContainer'>
            <div className="nav">
                <div className="header">{t("products.header2")}</div>
                <button onClick={()=>setNewProductModal(true)} className="addProduct"><IoMdAdd className="icon"/>{t("products.btn5")}</button>
            </div>

            <div className="inputsCont">
                <input type="text" className="searchInput" placeholder={t("products.placeholder2")} />
                <input type="text" className="searchInput" placeholder={t("products.placeholder3")} />
                <input type="text" className="searchInput" placeholder={t("products.placeholder4")} />
                <input type="text" className="searchInput" placeholder={t("products.placeholder5")} />
                <button className="clearBtn"><MdOutlineClear/></button>
            </div>
        </div>
    );
}

export default ProductsNav;
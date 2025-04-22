import React from 'react';
import './Main.scss';
import { HiOutlineClipboardDocumentList } from "react-icons/hi2";
import {useTranslation} from "react-i18next";
import {Link} from "react-router";
import { FaUsersCog } from "react-icons/fa";
import { FaWarehouse } from "react-icons/fa6";
import { MdPointOfSale } from "react-icons/md";

function Main() {
    const {t} = useTranslation()


    return (
        <div className='MainContainer'>
            <Link to="/statistics/products" className="section G-box-shadow">
                <p className="prg">
                    <HiOutlineClipboardDocumentList className="icon"/>
                    {t("static.header1")}
                </p>

            </Link>

            <Link to="/statistics/partners" className="section G-box-shadow">
                <p className="prg">
                    <FaUsersCog className="icon"/>
                    {t("static.header2")}
                </p>

            </Link>

            <Link to="/statistics/store" className="section G-box-shadow">
                <p className="prg">
                    <FaWarehouse className="icon"/>
                    {t("static.header3")}
                </p>

            </Link>

            <Link to="/statistics/sales" className="section G-box-shadow">
                <p className="prg">
                    <MdPointOfSale className="icon"/>
                    {t("static.header4")}
                </p>

            </Link>

        </div>
    );
}

export default Main;
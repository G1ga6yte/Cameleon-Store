import React from 'react';
import './HomeBox3.scss';
import {useTranslation} from "react-i18next";
import { TiWarningOutline } from "react-icons/ti";
import img1 from "./img1.png"

function HomeBox3() {
    const {t} = useTranslation();

    const productsLeft = [
        {
            name: "Epoxy 500g",
            _id: 2525,
            article: "654245",
            img: null,
            peaces: 7
        },
        {
            _id: 2526,
            article: "123456",
            name: "Acrylic Paint 1L",
            img: null,
            peaces: 4
        },
        {
            _id: 2527,
            article: "789012",
            name: "Wood Glue 250ml",
            img: null,
            peaces: 9
        },
        {
            _id: 2528,
            article: "345678",
            name: "Silicone Sealant 300ml",
            img: null,
            peaces:11
        },
        {
            _id: 2529,
            article: "901234",
            name: "Spray Paint 400ml",
            img: null,
            peaces: 5
        },
    ]


    return (
        <div className='HomeBox3Container homeBox G-box-shadow'>

            <div className="homeNav">
                <TiWarningOutline className="icon"/>
                <p className="header">{t("home.header5")}</p>
            </div>

            <div className="productsContainer">
                <div className="productsLine">
                    {productsLeft.map((product, index) => (
                        <div className="product G-box-shadow" key={index}>
                            <div className="headBlock">
                                <img src={img1} alt=""/>
                                <p className="name">{product.name}</p>
                            </div>
                            <p className="infoLine">
                                <span>ID: </span>
                            </p>
                            <p className="infoLine"></p>
                            <p className="peacesPrg"></p>
                        </div>
                    ))}
                </div>
            </div>

        </div>
    );
}

export default HomeBox3;
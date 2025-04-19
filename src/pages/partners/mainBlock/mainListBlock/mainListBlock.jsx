import React, {useEffect, useState} from "react";
import "./mainListBlock.scss";
import {FaCheck} from "react-icons/fa6";
import Stack from "@mui/material/Stack";
import Pagination from "@mui/material/Pagination";
import {useTranslation} from "react-i18next";

function MainListBlock ({}){
    const {t} = useTranslation()

    const [activeOrder, setActiveOrder] = useState({})
    const [ordersList, setOrdersList] = useState([])
    const orders = [
        {
            regularNum: 1,
            date: "24.02.2024",
            sellingSum: 134000,
            note: "Troton",
            costSum: 109000,
            profit: 25000,
            paid: 133000,
            partnerID: 875624456,
            partnerName: "Valod",
            productsList: [
                {
                    _id: 2525,
                    article: "654245",
                    name: "Epoxy 500g",
                    salePrice: 4000,
                    enterPrice: 3000,
                    newPrice: null,
                    groupID: ["54796349"],
                    barcode: 785073090090,
                    count: 5
                },
                {
                    _id: 2526,
                    article: "123456",
                    name: "Acrylic Paint 1L",
                    salePrice: 2500,
                    enterPrice: 2000,
                    newPrice: null,
                    groupID: ["54796349"],
                    barcode: 785073090091,
                    count: 5
                },
                {
                    _id: 2527,
                    article: "789012",
                    name: "Wood Glue 250ml",
                    salePrice: 1500,
                    enterPrice: 1200,
                    newPrice: null,
                    groupID: ["54796349"],
                    barcode: 785073090092,
                    count: 5
                },
                {
                    _id: 2528,
                    article: "345678",
                    name: "Silicone Sealant 300ml",
                    salePrice: 1800,
                    enterPrice: 1500,
                    newPrice: null,
                    groupID: ["54796349"],
                    barcode: 785073090093,
                    count: 5
                },
                {
                    _id: 2529,
                    article: "901234",
                    name: "Spray Paint 400ml",
                    salePrice: 2200,
                    enterPrice: 1800,
                    newPrice: null,
                    groupID: ["54796349"],
                    barcode: 785073090094,
                    count: 5
                },
                {
                    _id: 2530,
                    article: "567890",
                    name: "Super Glue 20g",
                    salePrice: 500,
                    enterPrice: 400,
                    newPrice: null,
                    groupID: ["54796349"],
                    barcode: 785073090095,
                    count: 5
                },
                {
                    _id: 2531,
                    article: "234567",
                    name: "Polyurethane Foam 750ml",
                    salePrice: 3000,
                    enterPrice: 2500,
                    newPrice: null,
                    groupID: ["54796349"],
                    barcode: 785073090096,
                    count: 5
                },
                {
                    _id: 2532,
                    article: "890123",
                    name: "Paint Thinner 1L",
                    salePrice: 2800,
                    enterPrice: 2300,
                    newPrice: null,
                    groupID: ["54796349"],
                    barcode: 785073090097,
                    count: 5
                },
                {
                    _id: 2533,
                    article: "456789",
                    name: "Varnish 500ml",
                    salePrice: 2100,
                    enterPrice: 1700,
                    newPrice: null,
                    groupID: ["54796349"],
                    barcode: 785073090098,
                    count: 5
                },
                {
                    _id: 2534,
                    article: "012345",
                    name: "Adhesive Tape 50m",
                    salePrice: 1200,
                    enterPrice: 1000,
                    newPrice: null,
                    groupID: ["54796349"],
                    barcode: 785073090099,
                    count: 5
                },
                {
                    _id: 2535,
                    article: "678901",
                    name: "Sandpaper 10pcs",
                    salePrice: 800,
                    enterPrice: 600,
                    newPrice: null,
                    groupID: ["54796349"],
                    barcode: 785073090100,
                    count: 5
                },
                {
                    _id: 2536,
                    article: "234568",
                    name: "Putty Knife",
                    salePrice: 700,
                    enterPrice: 500,
                    newPrice: null,
                    groupID: ["54796349"],
                    barcode: 785073090101,
                    count: 5
                },
                {
                    _id: 2537,
                    article: "890124",
                    name: "Paint Roller",
                    salePrice: 900,
                    enterPrice: 700,
                    newPrice: null,
                    groupID: ["54796349"],
                    barcode: 785073090102,
                    count: 5
                },
                {
                    _id: 2538,
                    article: "456790",
                    name: "Brush Set 5pcs",
                    salePrice: 1500,
                    enterPrice: 1200,
                    newPrice: null,
                    groupID: ["54796349"],
                    barcode: 785073090103,
                    count: 5
                },
                {
                    _id: 2539,
                    article: "012346",
                    name: "Masking Tape 30m",
                    salePrice: 1000,
                    enterPrice: 800,
                    newPrice: null,
                    groupID: ["54796349"],
                    barcode: 785073090104,
                    count: 5
                },
                {
                    _id: 2540,
                    article: "678902",
                    name: "Caulking Gun",
                    salePrice: 1300,
                    enterPrice: 1000,
                    newPrice: null,
                    groupID: ["54796349"],
                    barcode: 785073090105,
                    count: 5
                },
                {
                    _id: 2541,
                    article: "234569",
                    name: "Tile Adhesive 5kg",
                    salePrice: 3500,
                    enterPrice: 3000,
                    newPrice: null,
                    groupID: ["54796349"],
                    barcode: 785073090106,
                    count: 5
                },
                {
                    _id: 2542,
                    article: "890125",
                    name: "Grout 2kg",
                    salePrice: 2000,
                    enterPrice: 1600,
                    newPrice: null,
                    groupID: ["54796349"],
                    barcode: 785073090107,
                    count: 5
                }
            ]
        },
        {
            regularNum: 2,
            date: "24.02.2024",
            sellingSum: 134000,
            note: "G3",
            costSum: 109000,
            profit: 25000,
            paid: 36000,
            partnerID: 875624456,
            partnerName: "Valod",
            productsList: [
                {
                    _id: 2525,
                    article: "654245",
                    name: "Epoxy 500g",
                    salePrice: 4000,
                    enterPrice: 3000,
                    newPrice: null,
                    groupID: ["54796349"],
                    barcode: 785073090090,
                    count: 5
                },
                {
                    _id: 2526,
                    article: "123456",
                    name: "Acrylic Paint 1L",
                    salePrice: 2500,
                    enterPrice: 2000,
                    newPrice: null,
                    groupID: ["54796349"],
                    barcode: 785073090091,
                    count: 5
                },
                {
                    _id: 2527,
                    article: "789012",
                    name: "Wood Glue 250ml",
                    salePrice: 1500,
                    enterPrice: 1200,
                    newPrice: null,
                    groupID: ["54796349"],
                    barcode: 785073090092,
                    count: 5
                },
                {
                    _id: 2528,
                    article: "345678",
                    name: "Silicone Sealant 300ml",
                    salePrice: 1800,
                    enterPrice: 1500,
                    newPrice: null,
                    groupID: ["54796349"],
                    barcode: 785073090093,
                    count: 5
                },
                {
                    _id: 2529,
                    article: "901234",
                    name: "Spray Paint 400ml",
                    salePrice: 2200,
                    enterPrice: 1800,
                    newPrice: null,
                    groupID: ["54796349"],
                    barcode: 785073090094,
                    count: 5
                },
                {
                    _id: 2530,
                    article: "567890",
                    name: "Super Glue 20g",
                    salePrice: 500,
                    enterPrice: 400,
                    newPrice: null,
                    groupID: ["54796349"],
                    barcode: 785073090095,
                    count: 5
                },
                {
                    _id: 2531,
                    article: "234567",
                    name: "Polyurethane Foam 750ml",
                    salePrice: 3000,
                    enterPrice: 2500,
                    newPrice: null,
                    groupID: ["54796349"],
                    barcode: 785073090096,
                    count: 5
                },
                {
                    _id: 2532,
                    article: "890123",
                    name: "Paint Thinner 1L",
                    salePrice: 2800,
                    enterPrice: 2300,
                    newPrice: null,
                    groupID: ["54796349"],
                    barcode: 785073090097,
                    count: 5
                },
                {
                    _id: 2533,
                    article: "456789",
                    name: "Varnish 500ml",
                    salePrice: 2100,
                    enterPrice: 1700,
                    newPrice: null,
                    groupID: ["54796349"],
                    barcode: 785073090098,
                    count: 5
                },
                {
                    _id: 2534,
                    article: "012345",
                    name: "Adhesive Tape 50m",
                    salePrice: 1200,
                    enterPrice: 1000,
                    newPrice: null,
                    groupID: ["54796349"],
                    barcode: 785073090099,
                    count: 5
                },
                {
                    _id: 2535,
                    article: "678901",
                    name: "Sandpaper 10pcs",
                    salePrice: 800,
                    enterPrice: 600,
                    newPrice: null,
                    groupID: ["54796349"],
                    barcode: 785073090100,
                    count: 5
                },
                {
                    _id: 2536,
                    article: "234568",
                    name: "Putty Knife",
                    salePrice: 700,
                    enterPrice: 500,
                    newPrice: null,
                    groupID: ["54796349"],
                    barcode: 785073090101,
                    count: 5
                },
                {
                    _id: 2537,
                    article: "890124",
                    name: "Paint Roller",
                    salePrice: 900,
                    enterPrice: 700,
                    newPrice: null,
                    groupID: ["54796349"],
                    barcode: 785073090102,
                    count: 5
                },
                {
                    _id: 2538,
                    article: "456790",
                    name: "Brush Set 5pcs",
                    salePrice: 1500,
                    enterPrice: 1200,
                    newPrice: null,
                    groupID: ["54796349"],
                    barcode: 785073090103,
                    count: 5
                },
                {
                    _id: 2539,
                    article: "012346",
                    name: "Masking Tape 30m",
                    salePrice: 1000,
                    enterPrice: 800,
                    newPrice: null,
                    groupID: ["54796349"],
                    barcode: 785073090104,
                    count: 5
                },
                {
                    _id: 2540,
                    article: "678902",
                    name: "Caulking Gun",
                    salePrice: 1300,
                    enterPrice: 1000,
                    newPrice: null,
                    groupID: ["54796349"],
                    barcode: 785073090105,
                    count: 5
                },
                {
                    _id: 2541,
                    article: "234569",
                    name: "Tile Adhesive 5kg",
                    salePrice: 3500,
                    enterPrice: 3000,
                    newPrice: null,
                    groupID: ["54796349"],
                    barcode: 785073090106,
                    count: 5
                },
                {
                    _id: 2542,
                    article: "890125",
                    name: "Grout 2kg",
                    salePrice: 2000,
                    enterPrice: 1600,
                    newPrice: null,
                    groupID: ["54796349"],
                    barcode: 785073090107,
                    count: 5
                }
            ]
        },
        {
            regularNum: 3,
            date: "26.02.2024",
            sellingSum: 134000,
            note: "Neomix",
            costSum: 109000,
            profit: 25000,
            paid: 36000,
            partnerID: 875624456,
            partnerName: "Valod",
            productsList: [
                {
                    _id: 2525,
                    article: "654245",
                    name: "Epoxy 500g",
                    salePrice: 4000,
                    enterPrice: 3000,
                    newPrice: null,
                    groupID: ["54796349"],
                    barcode: 785073090090,
                    count: 5
                },
                {
                    _id: 2526,
                    article: "123456",
                    name: "Acrylic Paint 1L",
                    salePrice: 2500,
                    enterPrice: 2000,
                    newPrice: null,
                    groupID: ["54796349"],
                    barcode: 785073090091,
                    count: 5
                },
                {
                    _id: 2527,
                    article: "789012",
                    name: "Wood Glue 250ml",
                    salePrice: 1500,
                    enterPrice: 1200,
                    newPrice: null,
                    groupID: ["54796349"],
                    barcode: 785073090092,
                    count: 5
                },
                {
                    _id: 2528,
                    article: "345678",
                    name: "Silicone Sealant 300ml",
                    salePrice: 1800,
                    enterPrice: 1500,
                    newPrice: null,
                    groupID: ["54796349"],
                    barcode: 785073090093,
                    count: 5
                },
                {
                    _id: 2529,
                    article: "901234",
                    name: "Spray Paint 400ml",
                    salePrice: 2200,
                    enterPrice: 1800,
                    newPrice: null,
                    groupID: ["54796349"],
                    barcode: 785073090094,
                    count: 5
                },
                {
                    _id: 2530,
                    article: "567890",
                    name: "Super Glue 20g",
                    salePrice: 500,
                    enterPrice: 400,
                    newPrice: null,
                    groupID: ["54796349"],
                    barcode: 785073090095,
                    count: 5
                },
                {
                    _id: 2531,
                    article: "234567",
                    name: "Polyurethane Foam 750ml",
                    salePrice: 3000,
                    enterPrice: 2500,
                    newPrice: null,
                    groupID: ["54796349"],
                    barcode: 785073090096,
                    count: 5
                },
                {
                    _id: 2532,
                    article: "890123",
                    name: "Paint Thinner 1L",
                    salePrice: 2800,
                    enterPrice: 2300,
                    newPrice: null,
                    groupID: ["54796349"],
                    barcode: 785073090097,
                    count: 5
                },
                {
                    _id: 2533,
                    article: "456789",
                    name: "Varnish 500ml",
                    salePrice: 2100,
                    enterPrice: 1700,
                    newPrice: null,
                    groupID: ["54796349"],
                    barcode: 785073090098,
                    count: 5
                },
                {
                    _id: 2534,
                    article: "012345",
                    name: "Adhesive Tape 50m",
                    salePrice: 1200,
                    enterPrice: 1000,
                    newPrice: null,
                    groupID: ["54796349"],
                    barcode: 785073090099,
                    count: 5
                },
                {
                    _id: 2535,
                    article: "678901",
                    name: "Sandpaper 10pcs",
                    salePrice: 800,
                    enterPrice: 600,
                    newPrice: null,
                    groupID: ["54796349"],
                    barcode: 785073090100,
                    count: 5
                },
                {
                    _id: 2536,
                    article: "234568",
                    name: "Putty Knife",
                    salePrice: 700,
                    enterPrice: 500,
                    newPrice: null,
                    groupID: ["54796349"],
                    barcode: 785073090101,
                    count: 5
                },
                {
                    _id: 2537,
                    article: "890124",
                    name: "Paint Roller",
                    salePrice: 900,
                    enterPrice: 700,
                    newPrice: null,
                    groupID: ["54796349"],
                    barcode: 785073090102,
                    count: 5
                },
                {
                    _id: 2538,
                    article: "456790",
                    name: "Brush Set 5pcs",
                    salePrice: 1500,
                    enterPrice: 1200,
                    newPrice: null,
                    groupID: ["54796349"],
                    barcode: 785073090103,
                    count: 5
                },
                {
                    _id: 2539,
                    article: "012346",
                    name: "Masking Tape 30m",
                    salePrice: 1000,
                    enterPrice: 800,
                    newPrice: null,
                    groupID: ["54796349"],
                    barcode: 785073090104,
                    count: 5
                },
                {
                    _id: 2540,
                    article: "678902",
                    name: "Caulking Gun",
                    salePrice: 1300,
                    enterPrice: 1000,
                    newPrice: null,
                    groupID: ["54796349"],
                    barcode: 785073090105,
                    count: 5
                },
                {
                    _id: 2541,
                    article: "234569",
                    name: "Tile Adhesive 5kg",
                    salePrice: 3500,
                    enterPrice: 3000,
                    newPrice: null,
                    groupID: ["54796349"],
                    barcode: 785073090106,
                    count: 5
                },
                {
                    _id: 2542,
                    article: "890125",
                    name: "Grout 2kg",
                    salePrice: 2000,
                    enterPrice: 1600,
                    newPrice: null,
                    groupID: ["54796349"],
                    barcode: 785073090107,
                    count: 5
                }
            ]
        },
        {
            regularNum: 4,
            date: "27.02.2024",
            sellingSum: 134000,
            note: "Troton",
            costSum: 109000,
            profit: 25000,
            paid: 134000,
            partnerID: 875624456,
            partnerName: "Valod",
            productsList: [
                {
                    _id: 2525,
                    article: "654245",
                    name: "Epoxy 500g",
                    salePrice: 4000,
                    enterPrice: 3000,
                    newPrice: null,
                    groupID: ["54796349"],
                    barcode: 785073090090,
                    count: 5
                },
                {
                    _id: 2526,
                    article: "123456",
                    name: "Acrylic Paint 1L",
                    salePrice: 2500,
                    enterPrice: 2000,
                    newPrice: null,
                    groupID: ["54796349"],
                    barcode: 785073090091,
                    count: 5
                },
                {
                    _id: 2527,
                    article: "789012",
                    name: "Wood Glue 250ml",
                    salePrice: 1500,
                    enterPrice: 1200,
                    newPrice: null,
                    groupID: ["54796349"],
                    barcode: 785073090092,
                    count: 5
                },
                {
                    _id: 2528,
                    article: "345678",
                    name: "Silicone Sealant 300ml",
                    salePrice: 1800,
                    enterPrice: 1500,
                    newPrice: null,
                    groupID: ["54796349"],
                    barcode: 785073090093,
                    count: 5
                },
                {
                    _id: 2529,
                    article: "901234",
                    name: "Spray Paint 400ml",
                    salePrice: 2200,
                    enterPrice: 1800,
                    newPrice: null,
                    groupID: ["54796349"],
                    barcode: 785073090094,
                    count: 5
                },
                {
                    _id: 2530,
                    article: "567890",
                    name: "Super Glue 20g",
                    salePrice: 500,
                    enterPrice: 400,
                    newPrice: null,
                    groupID: ["54796349"],
                    barcode: 785073090095,
                    count: 5
                },
                {
                    _id: 2531,
                    article: "234567",
                    name: "Polyurethane Foam 750ml",
                    salePrice: 3000,
                    enterPrice: 2500,
                    newPrice: null,
                    groupID: ["54796349"],
                    barcode: 785073090096,
                    count: 5
                },
                {
                    _id: 2532,
                    article: "890123",
                    name: "Paint Thinner 1L",
                    salePrice: 2800,
                    enterPrice: 2300,
                    newPrice: null,
                    groupID: ["54796349"],
                    barcode: 785073090097,
                    count: 5
                },
                {
                    _id: 2533,
                    article: "456789",
                    name: "Varnish 500ml",
                    salePrice: 2100,
                    enterPrice: 1700,
                    newPrice: null,
                    groupID: ["54796349"],
                    barcode: 785073090098,
                    count: 5
                },
                {
                    _id: 2534,
                    article: "012345",
                    name: "Adhesive Tape 50m",
                    salePrice: 1200,
                    enterPrice: 1000,
                    newPrice: null,
                    groupID: ["54796349"],
                    barcode: 785073090099,
                    count: 5
                },
                {
                    _id: 2535,
                    article: "678901",
                    name: "Sandpaper 10pcs",
                    salePrice: 800,
                    enterPrice: 600,
                    newPrice: null,
                    groupID: ["54796349"],
                    barcode: 785073090100,
                    count: 5
                },
                {
                    _id: 2536,
                    article: "234568",
                    name: "Putty Knife",
                    salePrice: 700,
                    enterPrice: 500,
                    newPrice: null,
                    groupID: ["54796349"],
                    barcode: 785073090101,
                    count: 5
                },
                {
                    _id: 2537,
                    article: "890124",
                    name: "Paint Roller",
                    salePrice: 900,
                    enterPrice: 700,
                    newPrice: null,
                    groupID: ["54796349"],
                    barcode: 785073090102,
                    count: 5
                },
                {
                    _id: 2538,
                    article: "456790",
                    name: "Brush Set 5pcs",
                    salePrice: 1500,
                    enterPrice: 1200,
                    newPrice: null,
                    groupID: ["54796349"],
                    barcode: 785073090103,
                    count: 5
                },
                {
                    _id: 2539,
                    article: "012346",
                    name: "Masking Tape 30m",
                    salePrice: 1000,
                    enterPrice: 800,
                    newPrice: null,
                    groupID: ["54796349"],
                    barcode: 785073090104,
                    count: 5
                },
                {
                    _id: 2540,
                    article: "678902",
                    name: "Caulking Gun",
                    salePrice: 1300,
                    enterPrice: 1000,
                    newPrice: null,
                    groupID: ["54796349"],
                    barcode: 785073090105,
                    count: 5
                },
                {
                    _id: 2541,
                    article: "234569",
                    name: "Tile Adhesive 5kg",
                    salePrice: 3500,
                    enterPrice: 3000,
                    newPrice: null,
                    groupID: ["54796349"],
                    barcode: 785073090106,
                    count: 5
                },
                {
                    _id: 2542,
                    article: "890125",
                    name: "Grout 2kg",
                    salePrice: 2000,
                    enterPrice: 1600,
                    newPrice: null,
                    groupID: ["54796349"],
                    barcode: 785073090107,
                    count: 5
                }
            ]
        },
        {
            regularNum: 5,
            date: "28.02.2024",
            sellingSum: 134000,
            note: "Troton",
            costSum: 109000,
            profit: 25000,
            paid: 36000,
            partnerID: 875624456,
            partnerName: "Valod",
            productsList: [
                {
                    _id: 2525,
                    article: "654245",
                    name: "Epoxy 500g",
                    salePrice: 4000,
                    enterPrice: 3000,
                    newPrice: null,
                    groupID: ["54796349"],
                    barcode: 785073090090,
                    count: 5
                },
                {
                    _id: 2526,
                    article: "123456",
                    name: "Acrylic Paint 1L",
                    salePrice: 2500,
                    enterPrice: 2000,
                    newPrice: null,
                    groupID: ["54796349"],
                    barcode: 785073090091,
                    count: 5
                },
                {
                    _id: 2527,
                    article: "789012",
                    name: "Wood Glue 250ml",
                    salePrice: 1500,
                    enterPrice: 1200,
                    newPrice: null,
                    groupID: ["54796349"],
                    barcode: 785073090092,
                    count: 5
                },
                {
                    _id: 2528,
                    article: "345678",
                    name: "Silicone Sealant 300ml",
                    salePrice: 1800,
                    enterPrice: 1500,
                    newPrice: null,
                    groupID: ["54796349"],
                    barcode: 785073090093,
                    count: 5
                },
                {
                    _id: 2529,
                    article: "901234",
                    name: "Spray Paint 400ml",
                    salePrice: 2200,
                    enterPrice: 1800,
                    newPrice: null,
                    groupID: ["54796349"],
                    barcode: 785073090094,
                    count: 5
                },
                {
                    _id: 2530,
                    article: "567890",
                    name: "Super Glue 20g",
                    salePrice: 500,
                    enterPrice: 400,
                    newPrice: null,
                    groupID: ["54796349"],
                    barcode: 785073090095,
                    count: 5
                },
                {
                    _id: 2531,
                    article: "234567",
                    name: "Polyurethane Foam 750ml",
                    salePrice: 3000,
                    enterPrice: 2500,
                    newPrice: null,
                    groupID: ["54796349"],
                    barcode: 785073090096,
                    count: 5
                },
                {
                    _id: 2532,
                    article: "890123",
                    name: "Paint Thinner 1L",
                    salePrice: 2800,
                    enterPrice: 2300,
                    newPrice: null,
                    groupID: ["54796349"],
                    barcode: 785073090097,
                    count: 5
                },
                {
                    _id: 2533,
                    article: "456789",
                    name: "Varnish 500ml",
                    salePrice: 2100,
                    enterPrice: 1700,
                    newPrice: null,
                    groupID: ["54796349"],
                    barcode: 785073090098,
                    count: 5
                },
                {
                    _id: 2534,
                    article: "012345",
                    name: "Adhesive Tape 50m",
                    salePrice: 1200,
                    enterPrice: 1000,
                    newPrice: null,
                    groupID: ["54796349"],
                    barcode: 785073090099,
                    count: 5
                },
                {
                    _id: 2535,
                    article: "678901",
                    name: "Sandpaper 10pcs",
                    salePrice: 800,
                    enterPrice: 600,
                    newPrice: null,
                    groupID: ["54796349"],
                    barcode: 785073090100,
                    count: 5
                },
                {
                    _id: 2536,
                    article: "234568",
                    name: "Putty Knife",
                    salePrice: 700,
                    enterPrice: 500,
                    newPrice: null,
                    groupID: ["54796349"],
                    barcode: 785073090101,
                    count: 5
                },
                {
                    _id: 2537,
                    article: "890124",
                    name: "Paint Roller",
                    salePrice: 900,
                    enterPrice: 700,
                    newPrice: null,
                    groupID: ["54796349"],
                    barcode: 785073090102,
                    count: 5
                },
                {
                    _id: 2538,
                    article: "456790",
                    name: "Brush Set 5pcs",
                    salePrice: 1500,
                    enterPrice: 1200,
                    newPrice: null,
                    groupID: ["54796349"],
                    barcode: 785073090103,
                    count: 5
                },
                {
                    _id: 2539,
                    article: "012346",
                    name: "Masking Tape 30m",
                    salePrice: 1000,
                    enterPrice: 800,
                    newPrice: null,
                    groupID: ["54796349"],
                    barcode: 785073090104,
                    count: 5
                },
                {
                    _id: 2540,
                    article: "678902",
                    name: "Caulking Gun",
                    salePrice: 1300,
                    enterPrice: 1000,
                    newPrice: null,
                    groupID: ["54796349"],
                    barcode: 785073090105,
                    count: 5
                },
                {
                    _id: 2541,
                    article: "234569",
                    name: "Tile Adhesive 5kg",
                    salePrice: 3500,
                    enterPrice: 3000,
                    newPrice: null,
                    groupID: ["54796349"],
                    barcode: 785073090106,
                    count: 5
                },
                {
                    _id: 2542,
                    article: "890125",
                    name: "Grout 2kg",
                    salePrice: 2000,
                    enterPrice: 1600,
                    newPrice: null,
                    groupID: ["54796349"],
                    barcode: 785073090107,
                    count: 5
                }
            ]
        },
        {
            regularNum: 6,
            date: "28.02.2024",
            sellingSum: 134000,
            note: "G3",
            costSum: 109000,
            profit: 25000,
            paid: 36000,
            partnerID: 875624456,
            partnerName: "Valod",
            productsList: [
                {
                    _id: 2525,
                    article: "654245",
                    name: "Epoxy 500g",
                    salePrice: 4000,
                    enterPrice: 3000,
                    newPrice: null,
                    groupID: ["54796349"],
                    barcode: 785073090090,
                    count: 5
                },
                {
                    _id: 2526,
                    article: "123456",
                    name: "Acrylic Paint 1L",
                    salePrice: 2500,
                    enterPrice: 2000,
                    newPrice: null,
                    groupID: ["54796349"],
                    barcode: 785073090091,
                    count: 5
                },
                {
                    _id: 2527,
                    article: "789012",
                    name: "Wood Glue 250ml",
                    salePrice: 1500,
                    enterPrice: 1200,
                    newPrice: null,
                    groupID: ["54796349"],
                    barcode: 785073090092,
                    count: 5
                },
                {
                    _id: 2528,
                    article: "345678",
                    name: "Silicone Sealant 300ml",
                    salePrice: 1800,
                    enterPrice: 1500,
                    newPrice: null,
                    groupID: ["54796349"],
                    barcode: 785073090093,
                    count: 5
                },
                {
                    _id: 2529,
                    article: "901234",
                    name: "Spray Paint 400ml",
                    salePrice: 2200,
                    enterPrice: 1800,
                    newPrice: null,
                    groupID: ["54796349"],
                    barcode: 785073090094,
                    count: 5
                },
                {
                    _id: 2530,
                    article: "567890",
                    name: "Super Glue 20g",
                    salePrice: 500,
                    enterPrice: 400,
                    newPrice: null,
                    groupID: ["54796349"],
                    barcode: 785073090095,
                    count: 5
                },
                {
                    _id: 2531,
                    article: "234567",
                    name: "Polyurethane Foam 750ml",
                    salePrice: 3000,
                    enterPrice: 2500,
                    newPrice: null,
                    groupID: ["54796349"],
                    barcode: 785073090096,
                    count: 5
                },
                {
                    _id: 2532,
                    article: "890123",
                    name: "Paint Thinner 1L",
                    salePrice: 2800,
                    enterPrice: 2300,
                    newPrice: null,
                    groupID: ["54796349"],
                    barcode: 785073090097,
                    count: 5
                },
                {
                    _id: 2533,
                    article: "456789",
                    name: "Varnish 500ml",
                    salePrice: 2100,
                    enterPrice: 1700,
                    newPrice: null,
                    groupID: ["54796349"],
                    barcode: 785073090098,
                    count: 5
                },
                {
                    _id: 2534,
                    article: "012345",
                    name: "Adhesive Tape 50m",
                    salePrice: 1200,
                    enterPrice: 1000,
                    newPrice: null,
                    groupID: ["54796349"],
                    barcode: 785073090099,
                    count: 5
                },
                {
                    _id: 2535,
                    article: "678901",
                    name: "Sandpaper 10pcs",
                    salePrice: 800,
                    enterPrice: 600,
                    newPrice: null,
                    groupID: ["54796349"],
                    barcode: 785073090100,
                    count: 5
                },
                {
                    _id: 2536,
                    article: "234568",
                    name: "Putty Knife",
                    salePrice: 700,
                    enterPrice: 500,
                    newPrice: null,
                    groupID: ["54796349"],
                    barcode: 785073090101,
                    count: 5
                },
                {
                    _id: 2537,
                    article: "890124",
                    name: "Paint Roller",
                    salePrice: 900,
                    enterPrice: 700,
                    newPrice: null,
                    groupID: ["54796349"],
                    barcode: 785073090102,
                    count: 5
                },
                {
                    _id: 2538,
                    article: "456790",
                    name: "Brush Set 5pcs",
                    salePrice: 1500,
                    enterPrice: 1200,
                    newPrice: null,
                    groupID: ["54796349"],
                    barcode: 785073090103,
                    count: 5
                },
                {
                    _id: 2539,
                    article: "012346",
                    name: "Masking Tape 30m",
                    salePrice: 1000,
                    enterPrice: 800,
                    newPrice: null,
                    groupID: ["54796349"],
                    barcode: 785073090104,
                    count: 5
                },
                {
                    _id: 2540,
                    article: "678902",
                    name: "Caulking Gun",
                    salePrice: 1300,
                    enterPrice: 1000,
                    newPrice: null,
                    groupID: ["54796349"],
                    barcode: 785073090105,
                    count: 5
                },
                {
                    _id: 2541,
                    article: "234569",
                    name: "Tile Adhesive 5kg",
                    salePrice: 3500,
                    enterPrice: 3000,
                    newPrice: null,
                    groupID: ["54796349"],
                    barcode: 785073090106,
                    count: 5
                },
                {
                    _id: 2542,
                    article: "890125",
                    name: "Grout 2kg",
                    salePrice: 2000,
                    enterPrice: 1600,
                    newPrice: null,
                    groupID: ["54796349"],
                    barcode: 785073090107,
                    count: 5
                }
            ]
        }

    ]

    useEffect(() => {
        let lastDate = 0
        orders.map((el, index)=> {
            let date = el.date.split('.')
            if (Number(date[0]) === lastDate){
                el.focused = true
                orders[index-1].focused = true
            } else {
                el.focused = false
            }
            lastDate = Number(date[0])
        })

        setOrdersList(orders)
    }, []);

    return(
        <div className="mainListBlock">
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
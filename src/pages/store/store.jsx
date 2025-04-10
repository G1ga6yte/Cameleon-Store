import React, {useEffect} from "react";
import "./store.scss";
import { useCartContext } from "../../CartContext";
import FilterCont from "./filterCont/filterCont";
import MainCont from "./mainCont/mainCont";


function Store() {
    const { setActiveNav } = useCartContext()
    useEffect(() => {
        setActiveNav("store")
    }, []);


    return (
        <div className="storeContainer G-box-shadow">
            <FilterCont/>
            <MainCont/>
        </div>
    )
}


export default Store;
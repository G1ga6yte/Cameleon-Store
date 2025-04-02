import React, {useEffect} from "react";
import "./partners.scss";
import {useCartContext} from "../../CartContext.jsx";
import PartnersBlock from "./partnersBlock/partnersBlock.jsx";
import MainBlock from "./mainBlock/main.jsx";


function Partners (){
    const {setActiveNav} = useCartContext()
    useEffect(() => {
        setActiveNav("partners")
    }, []);



    return(
        <div className="PartnersContainer">

            <PartnersBlock/>
            <MainBlock/>

        </div>
    )
}
export default Partners
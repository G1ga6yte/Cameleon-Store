import React, {useEffect} from "react";
import "./partners.scss";
import {useCartContext} from "../../CartContext.jsx";
import PartnersBlock from "./partnersBlock/partnersBlock.jsx";


function Partners (){
    const {setActiveNav} = useCartContext()
    useEffect(() => {
        setActiveNav("partners")
    }, []);



    return(
        <div className="PartnersContainer">

            <PartnersBlock/>

        </div>
    )
}
export default Partners
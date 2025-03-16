import React, {useEffect} from "react";
import "./ProductTypes.scss"
import {useCartContext} from "../../CartContext.jsx";
import ProductGroups from "./productGroups/productGroups.jsx";
import ProductItems from "./productItems/productItems.jsx";

function ProductTypes () {
    const {setActiveNav} = useCartContext()
    useEffect(() => {
        setActiveNav("products")
    }, []);

    return(
        <div className="ProductTypesContainer">
            <ProductGroups/>
            <ProductItems/>
        </div>
    )
}

export default ProductTypes
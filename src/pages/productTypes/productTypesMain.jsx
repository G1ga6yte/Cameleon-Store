import React, {useEffect} from 'react';
import {ProductTypesProvider} from "./productTypesContext.jsx";
import ProductTypes from "./productTypes.jsx";
import {useCartContext} from "../../CartContext.jsx";

function ProductTypesMain() {
    const {setActiveNav} = useCartContext()

    useEffect(() => {
        setActiveNav("products")
    }, []);

    return (
        <ProductTypesProvider>
            <ProductTypes/>
        </ProductTypesProvider>
    );
}

export default ProductTypesMain;
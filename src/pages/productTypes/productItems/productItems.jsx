import React from "react";
import "./ProductItems.scss"
import ProductsNav from "./productsNav/productsNav.jsx";
import ProductsList from "./productsList/productsList.jsx";

function ProductItems (){


    return(
        <div className="ProductItemsContainer G-box-shadow">
            <ProductsNav/>
            <ProductsList/>
        </div>
    )
}

export default ProductItems
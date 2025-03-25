import React from "react";
import "./ProductTypes.scss"
import ProductGroups from "./productGroups/productGroups.jsx";
import ProductItems from "./productItems/productItems.jsx";
import {useProductTypesContext} from "./productTypesContext.jsx";
import NewProductModal from "./newProductModal/newProductModal.jsx";

function ProductTypes () {
    const {newProductModal} = useProductTypesContext()



    return(
            <div className="ProductTypesContainer">
                {newProductModal &&
                    <NewProductModal/>
                }

                <ProductGroups/>
                <ProductItems/>
            </div>
    )
}

export default ProductTypes
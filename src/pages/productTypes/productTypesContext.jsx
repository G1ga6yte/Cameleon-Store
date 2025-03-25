import React, {createContext, useContext, useState} from "react";



const ProductTypesContext = createContext();

export const ProductTypesProvider = ({children}) => {
    const [newProductModal, setNewProductModal] = useState(false)



    return(<ProductTypesContext.Provider value={{
        newProductModal, setNewProductModal
    }}>
        {children}
    </ProductTypesContext.Provider> );
};

export const useProductTypesContext = () => {
    return useContext(ProductTypesContext);
}

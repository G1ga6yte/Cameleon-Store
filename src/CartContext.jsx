import React, {createContext, useContext, useState} from "react";



const CartContext = createContext();

export const CartProvider = ({children}) => {
    const [activeNav, setActiveNav] = useState("");



    return(<CartContext.Provider value={{
        activeNav, setActiveNav
    }}>
        {children}
    </CartContext.Provider> );
};

export const useCartContext = () => {
    return useContext(CartContext);
}

import React, {createContext, useContext, useState} from "react";



const MenuContext = createContext();

export const MenuProvider = ({children}) => {

    const [activeRoute, setActiveRoute] = useState("Menu");

    return(<MenuContext.Provider value={{
        activeRoute, setActiveRoute
    }}>
        {children}
    </MenuContext.Provider> );
};

export const useMenuContext = () => {
    return useContext(MenuContext);
}

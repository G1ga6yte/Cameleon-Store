import React, {createContext, useContext, useState} from "react";



const StatisticsContext = createContext();

export const StatisticsProvider = ({children}) => {

    const [activeRoute, setActiveRoute] = useState("Statistics");

    return(<StatisticsContext.Provider value={{
        activeRoute, setActiveRoute
    }}>
        {children}
    </StatisticsContext.Provider> );
};

export const useStatisticsContext = () => {
    return useContext(StatisticsContext);
}

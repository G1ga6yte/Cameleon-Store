import React, {useEffect} from "react";
import "./Menu.scss"
import {Link, Outlet} from "react-router";
import {IoIosArrowRoundBack} from "react-icons/io";
import {useCartContext} from "../../CartContext.jsx";
import {useMenuContext} from "./menuContext.jsx";
function Menu (){
    const {setActiveNav} = useCartContext()
    const {activeRoute, setActiveRoute} = useMenuContext()
    useEffect(() => {
        setActiveNav("menu")
    }, []);

    return(
        <div className="menuContainer">
            <div className="headLine">
                <Link to={"/menu"} className="backLink">
                    {activeRoute !== "Menu" && <IoIosArrowRoundBack className="icon"/>}
                    {activeRoute}
                </Link>
            </div>
            <Outlet/>
        </div>
    )
}

export default Menu
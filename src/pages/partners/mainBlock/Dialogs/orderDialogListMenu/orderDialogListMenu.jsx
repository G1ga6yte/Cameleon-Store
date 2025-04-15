import React, { useEffect, useState } from 'react';
import './OrderDialogListMenu.scss';
import { TestProductGroups } from "../../../../../TestData/testProductGroups.js"
import { ProductsData } from "../../../../../TestData/products.js"

function OrderDialogListMenu({ setListMenuDialog }) {

    const [groups, setGroups] = useState([])
    const [activeGroup, setActiveGroup] = useState(null)
    const [openGroupsMenu, setOpenGroupsMenu] = useState(null)
    const [products, setProducts] = useState([])

    useEffect(() => {
        setGroups(TestProductGroups)
        setProducts(ProductsData)
    }, [])

    return (
        <div className='OrderDialogListMenuContainer'>
            <div onClick={() => setListMenuDialog(false)} className="backgroundBlock"></div>

            <div className="menuContainer G-box-shadow">

                <div className="groupsCont">
                    {groups.map((group, index) => {
                        return (
                            <div key={index} className="groupsCont">
                                <button  className={`groupBtn`}>
                                    {group.name}
                                </button>

                                
                            </div>
                        )
                    })}
                </div>

                <div className="productsCont">

                </div>

            </div>

        </div>
    );
}

export default OrderDialogListMenu;
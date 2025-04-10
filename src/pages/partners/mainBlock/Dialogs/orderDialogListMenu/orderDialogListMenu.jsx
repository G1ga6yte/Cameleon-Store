import React from 'react';
import './OrderDialogListMenu.scss';

function OrderDialogListMenu({setListMenuDialog}) {


    return (
        <div className='OrderDialogListMenuContainer'>
            <div onClick={()=>setListMenuDialog(false)} className="backgroundBlock"></div>

            <div className="menuContainer G-box-shadow">

            </div>

        </div>
    );
}

export default OrderDialogListMenu;
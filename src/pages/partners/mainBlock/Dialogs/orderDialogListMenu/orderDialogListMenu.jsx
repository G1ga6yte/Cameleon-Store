import React from 'react';
import './OrderDialogListMenu.scss';

function OrderDialogListMenu({setListMenuDialog, setProductsList}) {
    return (
        <div className='OrderDialogListMenuContainer'>
            <div onClick={setListMenuDialog(false)} className="backgroundBlock"></div>
        </div>
    );
}

export default OrderDialogListMenu;
import React, {useState} from "react";
import "./mainBlock.scss"
import MainFilterBlock from "./mainFilterBlock/mainFilterBlock.jsx";
import MainListBlock from "./mainListBlock/mainListBlock.jsx";
import OrderDialog from "./Dialogs/orderDialog/orderDialog.jsx";
import OrderDialogListMenu from "./Dialogs/orderDialogListMenu/orderDialogListMenu.jsx";

function MainBlock (){
    const [orderDialog, setOrderDialog] = useState(false)
    const [listMenuDialog, setListMenuDialog] = useState(false);
    const [productsList, setProductsList] = useState([]);


    return(
        <div className="mainBlock G-box-shadow">
            {orderDialog &&
                <OrderDialog
                    setOrderDialog={setOrderDialog}
                    setProductsList={setProductsList}
                    productsList={productsList}
                    listMenuDialog={listMenuDialog}
                    setListMenuDialog={setListMenuDialog}
                />
            }

            {listMenuDialog && <OrderDialogListMenu
                setListMenuDialog={setListMenuDialog}
                setProductsList={setProductsList}
            />}

            <MainFilterBlock
                newOrderDialog={orderDialog}
                setNewOrderDialog={setOrderDialog}
            />
            <MainListBlock
                newOrderDialog={orderDialog}
                setNewOrderDialog={setOrderDialog}
            />
        </div>
    )
}

export default MainBlock
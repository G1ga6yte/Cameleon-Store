import React, {useState} from "react";
import "./mainBlock.scss"
import MainFilterBlock from "./mainFilterBlock/mainFilterBlock.jsx";
import MainListBlock from "./mainListBlock/mainListBlock.jsx";
import OrderDialog from "./Dialogs/orderDialog/orderDialog.jsx";

function MainBlock (){
    const [orderDialog, setOrderDialog] = useState(false)

    return(
        <div className="mainBlock G-box-shadow">
            {orderDialog &&
                <OrderDialog setOrderDialog={setOrderDialog}/>
            }

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
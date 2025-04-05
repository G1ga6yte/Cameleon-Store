import React, {useState} from "react";
import "./mainBlock.scss"
import MainFilterBlock from "./mainFilterBlock/mainFilterBlock.jsx";
import MainListBlock from "./mainListBlock/mainListBlock.jsx";

function MainBlock (){
    const [newOrderDialog, setNewOrderDialog] = useState(false)

    return(
        <div className="mainBlock G-box-shadow">
            <MainFilterBlock
                newOrderDialog={newOrderDialog}
                setNewOrderDialog={setNewOrderDialog}
            />
            <MainListBlock
                newOrderDialog={newOrderDialog}
                setNewOrderDialog={setNewOrderDialog}
            />
        </div>
    )
}

export default MainBlock
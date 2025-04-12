import React from "react";
import "./outgoingDialog.scss";

function OutgoingDialog({setOutgoingDialog}) {


    return (
        <div className="outgoingDialogCont">
            <div onClick={() => setOutgoingDialog(false)} className="backgroundBlock"></div>

            <div className="dialogBlock G-box-shadow">

            </div>
        </div>
    )
}


export default OutgoingDialog
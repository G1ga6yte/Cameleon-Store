import React from "react";
import "./entryDialog.scss";

function EntryDialog ({setEntryDialog}) {


    return(
        <div className="entryDialogCont">
            <div onClick={()=>setEntryDialog(false)} className="backgroundBlock"></div>

            <div className="dialogBlock G-box-shadow">
                
            </div>
        </div>
    )
}

export default EntryDialog
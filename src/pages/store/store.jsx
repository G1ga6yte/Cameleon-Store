import React, { useEffect, useState } from "react";
import "./store.scss";
import { useCartContext } from "../../CartContext";
import FilterCont from "./filterCont/filterCont";
import MainCont from "./mainCont/mainCont";
import EntryDialog from "./dialogs/entryDialog/entryDialog";
import OutgoingDialog from "./dialogs/outgoingDialog/outgoingDialog";


function Store() {
    const { setActiveNav } = useCartContext()

    const [entryDialog, setEntryDialog] = useState(false)
    const [outgoingDialog, setOutgoingDialog] = useState(false)

    useEffect(() => {
        setActiveNav("store")
    }, []);


    return (
        <div className="storeContainer G-box-shadow">

            {entryDialog &&
                <EntryDialog
                    setEntryDialog={setEntryDialog}
                />
            }

            {outgoingDialog &&
                <OutgoingDialog
                    setOutgoingDialog={setOutgoingDialog}
                />
            }


            <FilterCont
                setEntryDialog={setEntryDialog}
                setOutgoingDialog={setOutgoingDialog}
            />
            <MainCont />
        </div>
    )
}


export default Store;
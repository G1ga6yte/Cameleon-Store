import React, {useEffect, useState} from "react";
import "./Notes.scss"
import {useMenuContext} from "../menuContext.jsx";
import { FaPlus } from "react-icons/fa";
import NewNoteDialog from "./newNoteDialog/newNoteDialog.jsx";

function Notes () {
    const {activeRoute, setActiveRoute} = useMenuContext()
    useEffect(()=>{
        setActiveRoute("Notes")
    }, [])

    const [actionNote, setActionNote] = useState(null)
    const [dialogCont, setDialogCont] = useState(false)



    const [notes, setNotes] = useState([])

    return(
        <div className="notesContainer">

            {dialogCont &&
                <NewNoteDialog
                    actionNote={actionNote}
                    setDialogCont={setDialogCont}
                    notes={notes}
                    setNotes={setNotes}
                />
            }
            <button onClick={()=>{
                setActionNote(null)
                setDialogCont(true)
            }} className="addBtn noteContainer G-box-shadow">
                <FaPlus className="icon"/>
            </button>

            {notes.map((el, index)=>{
                return(
                    <div key={index} className="noteContainer G-box-shadow">

                    </div>
                )
            })}
        </div>
    )
}

export default Notes
import React, {useEffect} from "react";
import "./Notes.scss"
import {useMenuContext} from "../menuContext.jsx";

function Notes () {
    const {activeRoute, setActiveRoute} = useMenuContext()
    useEffect(()=>{
        setActiveRoute("Notes")
    }, [])

    return(
        <div className="notesContainer">

        </div>
    )
}

export default Notes
import React from "react";
import "./mainBlock.scss"
import MainFilterBlock from "./mainFilterBlock/mainFilterBlock.jsx";
import MainListBlock from "./mainListBlock/mainListBlock.jsx";

function MainBlock (){

    return(
        <div className="mainBlock G-box-shadow">
            <MainFilterBlock/>
            <MainListBlock/>
        </div>
    )
}

export default MainBlock
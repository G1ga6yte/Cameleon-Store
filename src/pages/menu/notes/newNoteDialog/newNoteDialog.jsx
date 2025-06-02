import React from "react";
import "./newNoteDialog.scss"
import {IoClose} from "react-icons/io5";
import {FaImages} from "react-icons/fa";



function NewNoteDialog ({notes, setDialogCont, setNotes, actionNote}){


    return(
        <div className="newNoteDialog">
            <div onClick={()=>setDialogCont(false)} className="backgroundBlock"></div>

            <div className="dialogBlock G-box-shadow">


                <div className="headLine">
                    <input type="text" className="headInput" placeholder={"Header"}/>
                    <button onClick={()=>setDialogCont(false)} className="closeBtn">
                        <IoClose className="icon"/>
                    </button>
                </div>

                <div className="mainLine">
                    <textarea className="mainInput" placeholder={"Note..."} name="note" id="note" cols="30" rows="10"></textarea>
                </div>

                <div className="imagesCont">

                    <label className="inputLabel" htmlFor="imageInput">
                        <input type="file"
                               accept="image/*"
                               id="imageInput"
                        />
                        <FaImages className="icon"/>
                    </label>

                </div>

                <div className="buttonsBlock">
                    <div className="actionButtonsCont">
                        <button onClick={()=>{
                            setDialogCont(false)
                        }} className="cancelBtn btn">Cancel</button>
                        <button className="confirmBtn btn">Save</button>
                    </div>
                </div>




            </div>

        </div>
    )
}

export default NewNoteDialog
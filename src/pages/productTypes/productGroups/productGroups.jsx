import React, {useState} from "react";
import "./ProductGroups.scss"
import {useTranslation} from "react-i18next";
import { IoIosArrowForward } from "react-icons/io";


function ProductGroups (){
    const {t} = useTranslation()
    const [activeGroup, setActiveGroup] = useState(null)
    const [openGroup, setOpenGroup] = useState(null)

    const groups = [
        {
            name: "Group 1",
            id: 46452543,
            inGroups: [
                {
                    name: "Group 11",
                    id: 435637468
                },
                {
                    name: "Group 12",
                    id: 897967
                },
                {
                    name: "Group 13",
                    id: 4356435
                },
            ]
        },
        {
            name: "Group 2",
            id: 4746743645
        },
        {
            name: "Group 3",
            id: 346546
        },
        {
            name: "Group 4",
            id: 8687945
        },
        {
            name: "Group 5",
            id: 345677
        },
        {
            name: "Group 6",
            id: 645787
        },
        {
            name: "Group 7",
            id: 4545,
            inGroups: [
                {
                    name: "Group 71",
                    id: 45953653
                },
                {
                    name: "Group 72",
                    id: 756435
                },
                {
                    name: "Group 73",
                    id: 2848724
                },
            ]
        },
        {
            name: "Group 8",
            id: 4746743
        },
        {
            name: "Group 9",
            id: 34654643
        },
        {
            name: "Group 10",
            id: 86872945
        },
        {
            name: "Group 11",
            id: 3452677
        },
        {
            name: "Group 12",
            id: 6453787
        },
        {
            name: "Group 13",
            id: 47463743
        },
        {
            name: "Group 14",
            id: 3463546
        },
        {
            name: "Group 15",
            id: 86837945
        },
        {
            name: "Group 16",
            id: 3453677
        },
        {
            name: "Group 17",
            id: 6435787
        },
    ]

    return(
        <div className="ProductGroupsContainer G-box-shadow">
            <div className="headerCont">
                <p className="header">{t("products.header1")}</p>
            </div>

            <div className="groupsCont">
                <div className="groups">
                    {groups.map((group, index)=>{
                        return(
                            <div key={index} className="group">
                                <button onClick={()=>{
                                    if (group.inGroups) {
                                        if (openGroup === group.id) {
                                            setOpenGroup(null)
                                        } else {
                                            setOpenGroup(group.id)
                                        }
                                        setActiveGroup(group.id)
                                    } else {
                                        setOpenGroup(null)
                                        setActiveGroup(group.id)
                                    }
                                }} className={`groupButton ${activeGroup === group.id && "activeGroup"}`}>
                                    <p className="groupName">{group.name}</p>
                                    <IoIosArrowForward className={`groupArrow ${openGroup === group.id && "openArrow"} ${activeGroup === group.id && "activeArrow"}`} />
                                </button>

                                {group.id === openGroup &&
                                    <div className="groupMenu">
                                        {group.inGroups.map((el, index)=>{
                                            return(
                                                <button onClick={()=>{
                                                    setActiveGroup(el.id)
                                                }} key={index} className={`groupMenuButton ${activeGroup === el.id && "activeMenuGroup"}`}>
                                                    <p className="groupMenuName">{el.name}</p>
                                                    <IoIosArrowForward className={`groupMenuArrow ${activeGroup === el.id && "activeMenuArrow"}`} />
                                                </button>
                                            )
                                        })}

                                    </div>
                                }
                            </div>
                        )
                    })}

                </div>
            </div>

        </div>
    )
}
export default ProductGroups
import React from 'react'
import { MdOutlineAppsOutage } from "react-icons/md";
import { FaRegClipboard } from "react-icons/fa";
import { FaChartLine } from "react-icons/fa";
import { FaUncharted } from "react-icons/fa";
import { AiFillBank } from "react-icons/ai";
import { HiDocumentChartBar } from "react-icons/hi2";
import { CgProfile } from "react-icons/cg";

const sidebarData = [
    {
        title: "Home",
        icon: <MdOutlineAppsOutage style={{color: "#232323cc"}}/>,
        link: "/"
    },
    {
        title: "Dashboard",
        icon: <FaRegClipboard style={{color: "#232323cc"}}/>,
        link: "/home"
    },
    {
        title: "Expenses",
        icon: <FaUncharted style={{color: "#232323cc"}}/>,
        link: "/expense"
    },
    {
        title: "Income",
        icon: <FaChartLine style={{color: "#232323cc"}}/>,
        link: "/income"
    },
    {
        title: "Banking",
        icon: <AiFillBank style={{color: "#232323cc"}}/>,
        link: "/banking"
    },
    {
        title: "File",
        icon: <HiDocumentChartBar style={{color: "#232323cc"}}/>,
        link: "/file"
    },
    {
        title: "User",
        icon: <CgProfile style={{color: "#232323cc"}}/>,
        link: "/user"
    },
]

export default sidebarData;

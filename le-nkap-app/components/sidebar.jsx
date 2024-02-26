import { MdOutlineAppsOutage } from "react-icons/md";
import { FaRegClipboard } from "react-icons/fa";
import { FaChartLine } from "react-icons/fa";
import { FaUncharted } from "react-icons/fa";
import { AiFillBank } from "react-icons/ai";
import { HiDocumentChartBar } from "react-icons/hi2";
import { CgProfile } from "react-icons/cg";

function Siderbar(){

    return(
        <div className="menuBar">
            <p>Overview</p>
            <div style={{display: "flex", gap: "10px", paddingBottom: "1rem"}}>
                <div className="icon"><MdOutlineAppsOutage style={{color: "#232323cc"}}/></div>
                <div>App</div>
            </div>
            <div style={{display: "flex", gap: "10px", paddingBottom: "1rem"}}>
                <div className="icon"><FaRegClipboard style={{color: "#232323cc"}}/></div>
                <div>Dashboard</div>
            </div>
            <div style={{display: "flex", gap: "10px", paddingBottom: "1rem"}}>
                <div className="icon"><FaUncharted style={{color: "#232323cc"}}/></div>
                <div>Expenses</div>
            </div>
            <div style={{display: "flex", gap: "10px", paddingBottom: "1rem"}}>
                <div className="icon"><FaChartLine style={{color: "#232323cc"}}/></div>
                <div>Income</div>
            </div>
            <div style={{display: "flex", gap: "10px", paddingBottom: "1rem"}}>
                <div className="icon"><AiFillBank style={{color: "#232323cc"}}/></div>
                <div>Banking</div>
            </div>
            <div style={{display: "flex", gap: "10px", paddingBottom: "1rem"}}>
                <div className="icon"><HiDocumentChartBar style={{color: "#232323cc"}}/></div>
                <div>File</div>
            </div>

            <p>Management</p>
            <div style={{display: "flex", gap: "10px", paddingBottom: "1rem"}}>
                <div className="icon"><CgProfile style={{color: "#232323cc"}}/></div>
                <div>User</div>
            </div>
        </div>
    )
}

export default Siderbar;
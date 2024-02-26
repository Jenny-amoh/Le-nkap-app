import { useState } from "react";

function ListItem(){

    const [name, setName] = useState('Cynthia Acha');
    const [amount, setAmount] = useState('25,000');  
    const [total, setTotal] = useState('25,500');  

    const handleClick = () => {
        setName ('Cynthia Yondo');
        setAmount ('30,000');
        setTotal ('30,500');
    }


    return(
        <div style={{}}>
            <div style={{display: "flex", justifyContent: "space-between", alignItems: "center", padding: "1rem 1rem 1rem 1rem"}}>
                <div>{name} </div>
                <div>Deposit</div>
                <div>#18090239</div>
                <div>Pending</div>
                <div>15/1/2024</div>
                <div>{amount} </div>
                <div>500</div>
                <div>{total} </div>
                <div>
                    <button onClick={handleClick} style={{backgroundColor: "#09a969", color: "white", padding: "10px 20px", border: "none", borderRadius: "5px"}}>Edit</button>
                </div>
            </div>
        </div>
    )
}
export default ListItem;
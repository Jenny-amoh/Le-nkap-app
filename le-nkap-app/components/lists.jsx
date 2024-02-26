import ListItem from "./listItems";

function List(){

    return(
        <div className="lists" style={{}}>
            <div style={{boxShadow: "2px 2px 5px 0px #cccc", padding: "1rem 0rem", borderRadius: "10px"}}>
                <h3 style={{padding: "1rem 1rem"}}>Recent Transactions</h3>
                <div style={{backgroundColor: "#F4F6F8", display: "flex", justifyContent: "space-between",
                 alignItems: "center", padding: "1rem 1rem 1rem 4rem"}}>
                    <div>Name</div>
                    <div>Details</div>
                    <div>Invoice ID</div>
                    <div>Status</div>
                    <div>Date</div>
                    <div>Amount</div>
                    <div>Fee</div>
                    <div>Total</div>
                    <div>
                        <button style={{backgroundColor: "#09a969", color: "white", padding: "10px 20px", border: "none", borderRadius: "5px"}}>Add</button>
                    </div>
                </div>

                <ListItem/>
                <ListItem/>
            </div>
        </div>
    )
}
export default List;
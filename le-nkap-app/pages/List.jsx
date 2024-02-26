import TopExpense from "../components/expenseComponents";
import Navbar from "../components/header";
import Menu from "../components/menu";
// import { images } from "../src/assets/images/images";


export default function ListPage(){

    return(
        <div>
            <Navbar/>
            <h1>List page</h1>
            <div style={{display: 'flex', justifyContent:'space-between'}}>
                <TopExpense cardAmt="417k" cardName="Total Banking"  />
                <TopExpense cardAmt="311k" cardName="Sent"  />
                <TopExpense cardAmt="124k" cardName="Cancelled"  />
            </div>
            <Menu/>
        </div>
    )
}
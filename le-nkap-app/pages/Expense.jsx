import TopExpense from "../components/expenseComponents";
import { RadialBar } from "../components/graph";
import Navbar from "../components/header";
import Menu from "../components/menu";
// import { images } from "../src/assets/images/images";


export default function ExpensePage(){

    return(
        <div>
            <Navbar/>
            <h1>Welcome to the expense page</h1>
            <div style={{display: 'flex', justifyContent:'space-between'}}>
                <TopExpense cardAmt="417k" cardName="Total Banking"  />
                <TopExpense cardAmt="311k" cardName="Sent"  />
                <TopExpense cardAmt="124k" cardName="Cancelled"  />
            </div>
            <div>
                <RadialBar/>
            </div>
            <Menu/>
        </div>
    )
}
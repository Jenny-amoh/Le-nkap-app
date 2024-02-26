
import TopExpense from "../components/expenseComponents";
import Navbar from "../components/header";
import Menu from "../components/menu";
// import { images } from "../src/assets/images/images";


export default function IncomePage(){

    return(
        <div>
            <Navbar/>
            {/* <h1>Income page</h1> */}
            <div style={{display: 'flex', justifyContent:'space-between', padding:'0 10rem', paddingTop:'4rem', paddingBottom:'3rem'}} className="topexpense">
                <TopExpense cardAmt="417k" cardName="Total Banking"  />
                <TopExpense cardAmt="311k" cardName="Sent"  />
                <TopExpense cardAmt="124k" cardName="Cancelled"  />
            </div>
            <Menu/>
        </div>
    )
}
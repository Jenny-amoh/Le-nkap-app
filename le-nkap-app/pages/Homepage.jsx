import LineChart, { AreaChart } from "../components/graph";
import GraphSection from "../components/graphSection";
import Navbar from "../components/header";
import List from "../components/lists";
import Menu from "../components/menu";
import Button, { DataButtons, Record,} from "../components/properties";
import Sidebar from "../components/sidebar";
import App from "../components/sir's file";
import TopRight from "../components/topComponent";
import ExpensePage from "./Expense";
// import '/App.css'



function Homepage(){

  return(
    <div>
      <Navbar/>
      <TopRight/>

      <div style={{display:'flex', gap: '3rem', justifyContent:'space-between', padding:'0 10rem'}} className="databuttonSection" >
      <DataButtons dataName='AccountBalance' dataRate="+2.6%" dataAmount='18,450' />
      <DataButtons dataName='Income' dataRate="+2.6%" dataAmount='48,450' />
      <DataButtons dataName='Expense' dataRate="+2.6%" dataAmount='30,000' />
      </div>
      <div style={{display: "flex", justifyContent: "space-between",padding:'0 10rem'}} className="recordSection">
        <div >
          <Record recordAmount='18,450' recordName='Balance' />
          <Record recordAmount='48,450' recordName='Income' />
          <Record recordAmount='30,000' recordName='Expense' />
        </div>
        <div>
          <AreaChart/>
        </div>
      </div>
        <Menu/>
        {/* <App/> */}
 
    </div>
  )
}
export default Homepage;
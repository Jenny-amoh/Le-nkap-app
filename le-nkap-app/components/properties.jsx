import React from 'react'
import { utilities } from "../src/assets/Utilities/utilities";
import { FaMountain } from "react-icons/fa";
import { FiChevronRight } from "react-icons/fi";
import { useState } from 'react';
import axios from 'axios';

export default function Button(props) {
    const name = props.name
    const id = props.id
    const onClick = props.onClick
  return (
    <div> 
        <button id={id} onClick={onClick}>
            {name}
        </button>
    </div>
  )
}

export function DataButtons (props){
    const dataName = props.dataName
    const dataRate = props.dataRate
    const dataAmount = props.dataAmount

    return(
        <div className='DataButtons'>
            <div style={{width: "250px", padding: "1rem 2rem", margin: "5rem 0rem",borderRadius: "1rem", boxShadow: "2px 2px 5px 0px #cccc"}} className='databutton'>
                <div style={{display: "Flex",justifyContent: "space-between",}}>
                    <div>
                        <div>{dataName} </div>
                        <div style={{padding: "5px 0px"}}> <FaMountain style={{color: "#00A76F"}}/> {dataRate} </div>
                    </div>   
                    <div>
                        <div><img src={utilities.barChart} alt="chart" /></div>
                    </div>
                </div>

                <div style={{display: "Flex",justifyContent: "space-between",}}>
                    <div style={{fontSize:"20px", fontWeight: "bold"}}>{dataAmount} </div>
                
                    <div style={{fontSize: "15px", display: "flex", justifyContent: "flex-start"}}>See More <FiChevronRight style={{ padding: "3px 0px 0px 3px",display: "flex", justifyContent: "flex-end", color: "#00A76F"}}/></div>
                </div>
            </div>

        </div>
    )
}

export function Record (props){
    const recordAmount = props.recordAmount
    const recordName = props.recordName
    return(
        <div className="incomeData" style={{width: "200px",color:"whitesmoke",justifyContent: "space-evenly", padding: "20px 15px 10px 0px", borderRadius: "1rem", marginBottom:'20px'}}>
                <div style={{display: "flex", justifyContent: "space-evenly"}}>
                    <div><img src={utilities.Brate} alt="balance" style={{height:"60px"}} /></div>
                    <div>
                        <div style={{fontSize:"20px", fontWeight: "bold"}}>{recordAmount} </div>
                        <div>{recordName} </div>
                    </div>
                </div>
                <div></div>
                <div></div>
            </div>
    )
}



// console.log('Token from localstorage is', token);
        // return null;
  
        // Define the category data
        // const [baseCategory, setBaseCategory] = useState([
        //     {name:'Freelance', type:'Income'},
        //     {name:'Bills', type:'Expense'},
        //     {name:'Salary', type:'Income'},
        //     {name:'Groceries', type:'Expense'}
        // ]c
      
        // const categoryData = {
        //   name: 'Hospital bills',
        //   type: 'expense', // income or expense
        // };
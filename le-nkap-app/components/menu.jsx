
import React, { useState } from 'react'
import Listss, { AddItem, TheCategories } from './listss'
import axios from 'axios';

export default function Menu() {

    const[transactions, setTransactions] = useState([
        {id: 1, name: 'Jen', details: 'Bank', category: 'Income', 
        date:'1/12/2024', amount:25000, total: 25300 },

        {id: 2, name: 'Des', details: 'Bills', category:'expense',
        date:'1/12/2024', amount:15000, total:15250 },

        {id: 3, name: 'Mac', details: 'Transfer', category:'Income',
        date:'1/12/2024', amount:10000, total: 10300 },

        {id: 4, name: 'Ren', details: 'Groceries', category:'expense', 
        date:'1/12/2024', amount:5000, total: 5250},
    ]);



    // {
//   "name": "string",
//   "type": "string",
//   "amount": 0,
//   "category": {
//     "_id": "string",
//     "name": "string"
//   },
//   "userId": "string",
//   "date": "string"
// }

    const deleteItem = (id) =>{
        setTransactions(transactions.filter((expense) => expense.id !== id))
    }

    const additem = (data) =>{    
        setTransactions(() =>[...transactions, {...data,id: Date.now()}])
        console.log(data)
       const token = localStorage.getItem("token")
        try {
          axios
            .post("https://le-nkap-v1.onrender.com/transactions", 
            {
              "name": "string",
              "type": "expense",
              "amount": 0,
              "categoryId": "string"
            } ,{
              headers: {
                'X-Auth-Token': token
              },
            })
            .then((response) => {
              // alert('in')
              console.log(response.data);
              
            })
            .catch((error) => {
              // alert('error')
              // console.log(error);
            });
        } catch (error) {
          console.log(error);
        }
      };
    
    //console.log(transactions)
  return (
    <div>
        <TheCategories styl />
        <Listss items = {transactions} deleteItem ={deleteItem} addItem ={additem} /> 
    </div>
  )
}

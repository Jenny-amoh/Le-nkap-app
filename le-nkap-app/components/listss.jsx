import Button from "./properties";
import { FaEdit } from "react-icons/fa";
import { MdDelete } from "react-icons/md";
import { useForm } from 'react-hook-form';
import { IoCheckmarkDoneCircle } from "react-icons/io5";
import { MdCancel } from "react-icons/md";
import axios from "axios";
import { useEffect, useState } from "react";
// import AddItem from "./AddItem";
// import { AddItem } from './listss'

export function TheCategories() {
   
    const token = localStorage.getItem('token');
    

    const [categoryName, setCategoryName] = useState();
    const [categoryType, setCategoryType] = useState();
    const [categories, setCategories] = useState([]);
    const [error, setError] = useState('');

    useEffect(() => {
        const fetchCategories = async () => {
          try {
            const response = await axios.get('https://le-nkap-v1.onrender.com/categories', {
              headers: {
                'x-auth-token': token,
              },
            });
    
            setCategoryName(response.data.map(category => category.name));
            setCategoryType(response.data.map(category => category.type));
          } catch (error) {
            setError('Error fetching categories');
          }
        };
    
        fetchCategories();
      }, [token]);
      const handleAdditemSubmission = (data) => {
        // Handle form submission from child component
        console.log(data);
      };
    
    
      const handleCategoryName = (e) => {
        const categoryName = e.target.value;
        setCategoryName(categoryName);
      };
    
      const handleCategoryType = (e) => {
        const categoryType = e.target.value;
        setCategoryType(categoryType);
      };
    
      const handleSubmit = async () => {
        const baseCategory = {
          name: categoryName,
          type: categoryType,
        };
    
        try {
          const response = await axios.post('https://le-nkap-v1.onrender.com/categories', baseCategory, {
            headers: {
              'x-auth-token': token,
            },
          });
    
          console.log(response.data);
        } catch (error) {
          setError('Error submitting category');
        }
      };

    

return(
    <div className="category" style={{padding: "1rem 10rem"}}>
        <h3>Add Transaction Category</h3>
        <table>
            <thead></thead>
            <tbody>
                <tr>
                    <td>
                        <input type="text" placeholder='Category Name' onChange={(e) => handleCategoryName(e)} />
                    </td>
                    <td>
                        <input type="text" placeholder='Income or Expense?' onChange={(e) => handleCategoryType(e)} />
                    </td>
                    <td>
                        <Button name='DONE' onClick={handleSubmit} />
                    </td>
                </tr>
            </tbody>
            <tfoot>
                {/* {categories.map((category) => (
                    <tr key={category.id}>
                        <td>{category.name}</td>
                        <td>{category.type}</td>
                    </tr>
                ))} */}
            </tfoot>
        </table>

        <div>
                <AddItem categoryNames={categoryName} categoryTypes={categoryType} handleCategorySubmission={handleAdditemSubmission} />
            </div>
    </div>
)
}

export function AddItem (props){

    if (!props.categoryNames || !props.categoryTypes) {
        // Data is not available yet, display a loading state or an error message
        return <div>Loading...</div>;
      }

    const {register, handleSubmit, formState:{errors} } = useForm()

    const token = localStorage.getItem("token");

    // const [itemName, setItemName] = useState();
    // const [itemDate, setItemDate] = useState();
    // const [itemAmount, setItemAmount] = useState("");

    const getUserTransaction = () => {
        axios
        .post("https://le-nkap-v1.onrender.com/transactions", {
            headers: {
                'X-Auth-Token': token
              },
        })
        
        .then((response) => {
            // alert('in')
            //console.log(response.data);
          })
          .catch((error) => {
            // alert('error')
            // console.log(error);
          });
      } 


      console.log(props.categoryTypes)
    return(
        <div>
            <form action="" onSubmit={handleSubmit(props.childProb)} >

                
                <table className="additem-content">
                    <thead></thead>
                    <tbody>
                    <tr style={{padding: "1rem 1rem 1rem 4rem", textAlign:'left'}}>
                        <td className={errors.name ? "red" : ""}>
                            < input type="text" name="name" id="" placeholder="name" {...register('name', {required:true})} />
                        </td>
                        {/* <td >
                            <input type="text" name="details" id="" placeholder="details" {...register('details')} />
                        </td> */}

                        <td>
                            <select name="CategoryType" id="" {...register('CategoryType', { required: true })}>
                                {props.categoryTypes.map((categoryTypes) => (
                                    <option key={categoryTypes.id} value={categoryTypes}>
                                    {categoryTypes}
                                    </option>
                                ))}
                                
                            </select>
                        </td>
                        <td>
                            <select name="CategoryName" id="" {...register('CategoryName', {required:true})} >
                                {props.categoryNames.map((categoryNames) => (
                                <option key={categoryNames.id} value={categoryNames}>
                                     {categoryNames}
                                 </option>
                                ))}
                           </select>
                        </td>

                        <td className={errors.date ? "red" : ""}>
                            <input type="date" name="date" id="" placeholder="date" {...register('date', {required:true})} />
                        </td>
                        <td className={errors.amount ? "red" : ""}>
                            <input type="number" name="amount" id="" placeholder="amount" {...register('amount', {required:true})} />
                        </td>
                       
                        {/* <td>
                            <input type="text" name="total" id="" placeholder="total" />
                        </td> */}
                        <td><Button name="submit" /> 
                        {/* <Button name="Done"/> */}
                        {/* <IoCheckmarkDoneCircle style={{width:'50px', backgroundColor:''}} /> <MdCancel style={{width:'50px', backgroundColor:''}}/> */}
                         </td>
                        
                    </tr>
                    </tbody>
                    <tfoot></tfoot>
                </table>
            </form>
        </div>
    )
}

export default function Listss({items, deleteItem, addItem}) {

    
    useEffect( () =>{

        getUserTransaction()
        
    },[] ) 

    const token = localStorage.getItem("token");

    const getUserTransaction = () => {
        axios
        .get("https://le-nkap-v1.onrender.com/transactions", {
            headers: {
                'X-Auth-Token': token
              },
        })
        
        .then((response) => {
            // alert('in')
            //console.log(response.data);
          })
          .catch((error) => {
            // alert('error')
            // console.log(error);
          });
      } 

      const [isAdditemVisible, setIsAdditemVisible] = useState(false);

      const handleButtonClick = () => {
        console.log(isAdditemVisible)
        setIsAdditemVisible(!isAdditemVisible); 
       
      };

    const totalSum = items.reduce((sum, currentItem) => {
        const amount = parseFloat(currentItem.amount);
        const fee = parseFloat(currentItem.fee);
    
        if (!isNaN(amount) && !isNaN(fee)) {
          return sum + amount + fee;
        } else {
          return sum;
        }
      }, 0);

    // const isValid = parseInt(item.amount) && parseInt(item.fee);
    // const sum = isValid? item.amount + item.fee: 0;
;
    const sumAmount = items.reduce((total, item) => total + parseInt(item.amount), 0);
    const sumFee = items.reduce((total, item) => total + parseInt(item.fee), 0);

    return (
        <div style={{boxShadow: "2px 2px 5px 0px #cccc", padding: "1rem 10rem", borderRadius: "10px"}}className="sectionListss">
            <div style={{paddingLeft:' 1rem', paddingRight: '2rem'}}>
                <h3 style={{padding: "1rem 1rem"}}>Recent Transactions</h3>
                
                {/* <AddItem childProb ={addItem} name="jener" /> */}
                {/* <AddItem/> */}

                {isAdditemVisible &&  <AddItem childProb ={addItem} name="jener" />}

                <table className="content-table">
                    <thead>
                        <tr style={{padding: "1rem 1rem 1rem 4rem", textAlign:'left'}}>
                            <th>Name</th>
                            <th>Details</th>
                            <th>Category</th>
                            {/* <th>Status</th> */}
                            <th>Date</th>
                            <th>Amount</th>
                            {/* <th>Fee</th> */}
                            {/* <th>Total</th> */}
                            <th><Button  name="Add" onClick={handleButtonClick} /> </th>
                        </tr>
                    </thead>
                    <tbody>
                        {/* {
                    "name": "string",
                    "type": "string",
                    "amount": 0,
                    "category": {
                        "_id": "string",
                        "name": "string"
                    },
                    "userId": "string",
                    "date": "string"
                } */}


                        {items.map((item, index)=>
                            <tr key={index}>
                                <td>{item.name} </td>
                                <td>{item.details}</td>
                                <td>{item.category}</td>
                                {/* <td>{item.status}</td> */}
                                <td>{item.date}</td>
                                <td>{item.amount} </td>
                                {/* <td>{item.fee}</td> */}
                                {/* <td>{parseFloat(item.amount) + parseFloat(item.fee)}</td> */}
                                <td><FaEdit style={{color:'#00A76F'}} /> 
                                    <MdDelete style={{color:'#B71D18'}} onClick={()=> deleteItem(item.id)} />
                                </td>
                            </tr>)
                        }
                        {/* <tr>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td><h3>Total</h3></td>
                            <td style=
                                {{display:'flex', alignItems:'center',justifyContent:'flex',}}>
                                <h3>{sumAmount}</h3>xaf
                            </td>
                            <td
                            ><h3>{sumFee} </h3></td>
                            <td><h3></h3></td>
                            <td></td>
                        </tr> */}

                    </tbody>
                </table>
            </div>
        </div>
    );
}



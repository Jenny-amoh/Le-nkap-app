import React from 'react'
import { images } from "../src/assets/images/images";

export default function TopExpense(props) {
    // const ExpenseImage = ({ imageName, altText }) => {
    //     const imagePath = images[imageName];
      
    //     return <img src={imagePath} alt={altText} />;
    //   };

        const { cardAmt, cardName, cardPerson, cardSize } = props;

      
        // const Avatar = () => {
        //   // ...
        //   return <img src={cardPerson} alt="invoice" />;
        // };
      
  return (
   <div className='topExpensecard'>
        <div className='topExpensecontent'>
            <div>
                <div><h2>{cardAmt} </h2> </div>
                <div><p>{cardName}</p> </div>
            </div>
            {/* <ExpenseImage imageName={cardPerson} altText="invoice" /> */}
            <img src={images.invoice} alt="" style={{width: '100px'}} />
            {/* <TopExpense cardAmt='417k' cardName='Total banking' cardPerson={images.invoice} cardSize='100' /> */}
        </div>
   </div>
  )
}

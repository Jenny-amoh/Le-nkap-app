import { useEffect, useState } from "react";
import { images } from "../src/assets/images/images";
import Button from "./properties";
import axios from "axios";

function TopRight(){

    useEffect( () =>{

        // getUserinfo()
    },[] ) 

    const getUserinfo = () => {
        axios
        .get("https://le-nkap-v1.onrender.com/users")
        .then((response) => {
          // alert('in')
          console.log(response.data);  
        })
        .catch((error) => {
          // alert('error')
          console.log(error);
        });
    }

    const handleClick = (e) => {
        alert("moving to list section", e);
    }

    return(
        <div className="topPage" style={{paddingTop:'5rem'}}>
            
            <div className="ToprightContainer"style={{backgroundColor: ""}} >
                <div className="content" style={{display: "flex", paddingLeft: "3rem", paddingTop: "1rem",height: "290px", width: "850px",}}>
                    <div className="text">
                        <h3 style={{
                            color: "#3DE48D",
                            width: "170px",
                        }}>Welcome back 👋 Jenner</h3>
                        <p style={{
                            width: "400px",
                        }}>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ipsam hic accusamus
                            rem aliquam. Cupiditate numquam, consequatur voluptatum ullam iure cum!</p>
                        <Button name='See List' onClick={handleClick}/>
                    </div>
                    <div className="img" style={{padding: "1rem 0rem 0rem 2rem"}}>
                        <img src={images.card} alt="card" />
                    </div>
                </div>
            </div>
            <div className="TopLeft">
                <div className="imgOverlay" style={{}}>
                    <div style={{color: "#20f486", fontWeight: "bold", paddingTop: "4rem", fontSize: "20px"}}>Featured app</div>
                    <div style={{color: "#f2f2f2"}} className="toprightText">
                        <h4>The ultimate quide to productiv...</h4>
                        <p>She eagerly opened the gift, her eyes sparking..</p>
                    </div>
                </div>
            </div>

            
        </div>
    )
}
export default TopRight;
import { images } from "../src/assets/images/images";
import Button from "./properties";
import ReactSwitch from 'react-switch';
import { ThemeContext } from "../src/App";
import React, { useContext } from 'react';

function Navbar(){

    // const [theme, setTheme] = useContext(ThemeContext)

    // function handleChange(e) {
    //     setTheme(e.target.value)
    // }

    const [theme, toggleTheme] = useContext(ThemeContext);

    // const toggleTheme = () =>{
    //     setTheme((curr) => (curr ==='light'? 'dark': 'light'))
    //   }
    const handleClick = () => {
        console.log("hello Users");
    }
    
    return(
        <nav className="navbar">
            <h1 className="logo">Le Nkap</h1>
            {/* <div><img src={images.Logo1} alt="logo" style={{height: "75px"}} /></div> */}
            <div className="links">
                <a href="/home" onClick={handleClick}>Home</a>
                <a href="/income">Income</a>
                <a href="/expense">Expenses</a>
                <a href="/list">list</a>
            
            </div>
            <div className="icons" style={{display: "flex", alignItems:'center', gap:'2rem'}}>
                <a href="/file">File</a>
                <a href="/setting"><Button name="Setting" /> </a>
                <ReactSwitch onChange={toggleTheme} checked={theme === "dark"} />
            </div>
        </nav>
    )
}

export default Navbar;
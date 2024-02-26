import { useState } from "react";
import { useForm } from 'react-hook-form';
import axios from "axios";
import { useNavigate } from "react-router-dom";

function Signup() {

  const navigation = useNavigate()

  const {register, handleinputSubmit, formState:{errors} } = useForm()

  const [action, setAction] = useState("Sign up");

  const [inputName, setInputName] = useState();
  const [inputEmail, setInputEmail] = useState();
  const [inputNumber, setInputNumber] = useState();
  const [inputPassword, setInputPassword] = useState();
  const [confirmPass, setConfirmPass] = useState("");
  const [nameError, setNameError] = useState("");
  const [emailError, setEmailError] = useState("");
  const [passwordError, setPasswordError] = useState("");
  const [confirmPassError, setConfirmPassError] = useState("");
  // const [inputconfirmPass, setInputconfirmPass] = useState();

  const handleInputName = (e) => {
    const inputName = e.target.value;
    setInputName(inputName);
    setNameError("");
  };
  //const inputNameLength = inputName.length;

  const handleInputEmail = (e) => {
    const inputEmail = e.target.value;
    setInputEmail(inputEmail);
    setEmailError("");
  };
  //const inputEmailLength = inputEmail.length;

  const handleInputNumber = (e) => {
    const inputNumber = e.target.value;
    setInputNumber(inputNumber);
  };
  const handleInputPassword = (e) => {
    const inputPassword = e.target.value;
    setInputPassword(inputPassword);
    setPasswordError("");
    
    //const inputPasswordLength = inputPassword.length;
    //console.log("muki jenneifer", inputPasswordLength )
  };
 
  const handleInputConfirmPass = (e) => {
    const confirmPass = e.target.value;
    setConfirmPass(confirmPass);
    setConfirmPassError("");
  };

  const handleSubmit = () => {

    let isValid = true

    if(inputName.length < 5){
      setNameError("Name must be at least 5 characters long");
      isValid = false;
    }
    if (!inputEmail) {
      setEmailError("Email is required");
      isValid = false;
    }
    if (inputPassword.length < 8) {
      setPasswordError("Password must be at least 8 characters long");
      isValid = false;
    } else{
      isValid = true;
    }
    if (inputPassword !== confirmPass) {
      setConfirmPassError("Passwords do not match");
      isValid = false;
    }  
  
   if (isValid){

      const submitdata = {
        name: inputName,
        email: inputEmail,
        phone: inputNumber,
        password: inputPassword,
        passwordConfirmation: confirmPass,
      };
      //console.log(data);

      try {
        
         const response = axios.post("https://le-nkap-v1.onrender.com/users", submitdata)
            // console.log(response.data);
            localStorage.setItem("token", response.data)
            console.log(localStorage.getItem('token'));
            navigation("/home")
          .catch((error) => {
            // alert('error')
            // console.log(error);
          });
      } catch (error) {
        console.log(error);
      }
  };
   }

  const handleLoginSubmit = () => {
    // console.log(inputName);  
    const data = {
      email: inputEmail,
      password: inputPassword,
    };
    
    try {
      const response = axios.post("https://le-nkap-v1.onrender.com/auth", data);
          // alert('in')
          console.log(response.data);
          localStorage.setItem("token", response.data)
          console.log(localStorage.getItem('token'));
          // alert('great')
          navigation("/home")
        
    } catch (error) {
      console.log(error);
    }
  };

  return (
    // login info
    // {
    //   "name": "jenerrr",
    //   "email": "jennerr20@gmail.com",
    //   "phone": "671778796",
    //   "password": "Jennerrrchi",
    //   "passwordConfirmation": "Jennerrrchi"
    // }
    // {
    
    <div className="container">
      <div className="background">
        <div className="page">
          <div className="side">
            <div style={{ paddingBottom: "3rem" }}>
              <h1>
                Excellent <span>Choice</span>
              </h1>
              <p>Let's review your account</p>
            </div>
          </div>
          <div className="contents">
            <div className="heading">
              <h1 className="logo">Le Nkap</h1>
              <div className="signupLinks">
                <div>
                  <span
                    
                    className={action === "Sign up" ? "submit grey" : "submit"}
                    onClick={() => {
                      setAction("Login");
                    }}
                  >
                    Log In
                  </span>
                </div>
                <div>
                  <span
                    
                    className={action === "Login" ? "submit grey" : "submit"}
                    onClick={() => {
                      setAction("Sign up");
                    }}
                  >
                    Sign up
                  </span>
                </div>
              </div>
            </div>
            <div>
              <h1 className="signupHeader">{action}</h1>
              <div className="inputs">

                <div>
                  {action === "Login" ? (
                    <div></div>
                  ) : (
                    <div className={errors.name ? "red" : ""}>
                      <input
                        type="text"
                        name="name"
                        id="name"
                        placeholder="Name"
                        {...register('name', {required:true})}
                        onChange={(e) => handleInputName(e)}
                      />
                      <div className="line"></div>
                      {nameError && <div className="error">{nameError}</div>}
                    </div>
                  )}
                </div>

                <div>
                  <input
                    type="text"
                    name="email"
                    id="email"
                    placeholder="Email"
                    onChange={(e) => handleInputEmail(e)}
                  />
                  <div className="line"></div>
                  {emailError && <div className="error">{emailError}</div>}
                </div>

                <div>
                  {action === "Login" ? (
                    <div></div>
                  ) : (
                    <div>
                      <input
                        type="number"
                        name="number"
                        id="number"
                        placeholder="Telephone"
                        onChange={(e) => handleInputNumber(e)}
                      />
                      <div className="line"></div>
                    </div>
                  )}
                </div>

                <div>
                  <input
                    type="password"
                    name="password"
                    id="password"
                    placeholder="Password"
                    onChange={(e) => handleInputPassword(e)}
                  />
                  <div className="line"></div>
                  {passwordError && <div className="error">{passwordError}</div>}
                </div>

                <div>
                  {action === "Login" ? (
                    <div></div>
                  ) : (
                    <div>
                      <input
                        type="password"
                        name="password"
                        id="confirmPassword"
                        placeholder="Confirm Password"
                        onChange={(e) => handleInputConfirmPass(e)}
                      />
                      <div className="line"></div>
                      {confirmPassError && <div className="error">{confirmPassError}</div>}
                    </div>
                  )}
                </div>
              </div>

              {action === "Login" ? (
                <div>
                  <div
                    style={{
                      fontSize: "15px",
                      padding: "1rem 0rem",
                      width: "450px",
                    }}
                  >
                    Forgot Password?{" "}
                    <a href="" className="spanText">
                      Click here!
                    </a>
                  </div>
                </div>
              ) : (
                <div
                  style={{
                    fontSize: "15px",
                    paddingBottom: "1rem",
                    width: "450px",
                  }}
                >
                  You agree to{" "}
                  <span className="spanText">
                    Le Nkap user agreement policy
                  </span>{" "}
                  and <span className="spanText">Cookie policy.</span>
                </div>
              )}

              {action === "Login" ? (
               
                  <button
                    onClick={handleLoginSubmit}
                    type="submit"
                    style={{
                      padding: "10px 20px",
                      backgroundColor: "#09a969",
                      color: "white",
                      borderRadius: "3rem",
                      width: "300px",
                      border: "1px solid #09a969",
                    }}
                  >
                    Log In
                  </button>
                
              ) : (
               
                  <button
                    onClick={handleSubmit}
                    type="submit"
                    style={{
                      padding: "10px 20px",
                      backgroundColor: "#09a969",
                      color: "white",
                      borderRadius: "3rem",
                      width: "300px",
                      border: "1px solid #09a969",
                    }}
                  >
                    Agree and Join
                  </button>
               
              )}
            </div>

            <div style={{ margin: "1rem 0rem" }}>
              <button
                type="submit"
                style={{
                  padding: "10px 20px",
                  backgroundColor: "#09a969",
                  color: "white",
                  borderRadius: "3rem",
                  width: "300px",
                  border: "1px solid #09a969",
                }}
              >
                Continue with Excel sheet
              </button>
            </div>
            {action === "Login" ? (
              <div style={{ paddingBottom: "4rem" }}></div>
            ) : (
              <div style={{ paddingBottom: "4rem", fontSize: "15px" }}>
                Already on Le Nkap?
                <span
                  className="spanText"
                  onClick={() => {
                    setAction("Login");
                  }}
                >
                  Log In
                </span>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Signup;

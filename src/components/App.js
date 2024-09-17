import React, { useEffect, useState } from "react";
import "../styles/App.css";
const obj = {
  email: "gaurav@gmail.com",
  password: 1234,
};
export default function App() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [userError, setUserError] = useState("");
  const [passwordError, setPasswordError] = useState("");
  const [Success, setSuccess] = useState("");

  
   function formHandler(e) {
    e.preventDefault();
    setEmail("");
    setPassword("")
    setUserError("");
    setPasswordError("");
    setSuccess("")
    setTimeout(() => {
        if(email!=obj.email){
            setUserError("User not found");
        }
       else if(password!=obj.password){
            setPasswordError("Password Incorrect")
        }
        else{
            setSuccess("Successfully Login");
        }

    }, 3000);
    
  }

  return (
    <div>
      <form action="" onSubmit={formHandler}>
        <div className="form-data">
          <div className="form-input">
            <label htmlFor="input-email">Email:</label>
            <input
              type="email"
              id="input-email"
              name="email"
              placeholder="Enter your Email"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <br />
            {userError && <p id="user-error">{userError}</p>}
          </div>
          <div className="form-input">
            <label htmlFor="input-password">Password:</label>
            <input
              type="password"
              id="input-password"
              name="password"
              placeholder="Enter your Password"
              required
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <br />
            {passwordError && <p id="password-error">{passwordError}</p>}
          </div>
          <div className="form-btn">
            <button type="submit" id="submit-form-btn" onClick={(e)=>{
                
            }} >
              Submit
            </button>
            {Success && <p id="success">{Success}</p>}
          </div>
        {/* <div className="display-error">
            
            
            
        </div> */}
        </div>
      </form>
    </div>
  );
}

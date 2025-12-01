import styles from '../style/LogIn.module.css';
import { Link } from "react-router-dom";
import { useState } from 'react';

function LogIn() {
    const [pass, setPass] = useState("");
    const [phone, setId] = useState("");
     const [isDisabled, setIsDisabled] = useState(false); // Initial state: button is enabled
     const toggleDisabled = () => {
    setIsDisabled(!isDisabled); // Toggles the disabled state
  };

    const authentiction = (mob, pass) => {
        //authentication logic here
        console.log(mob);
        console.log(pass);
        conslole.log("authenticating...");
    }

    return (

        <div className={styles.main}>
            <div className={styles.heading} ><h1> शुद्धh जल </h1>
                <p>Order clean, safe water online  and enjoy <br /> hassle-free delivery.</p></div>

            <div className={styles.Form} >
                <h1> LogIn</h1>
                <form  >
                    {/* <label htmlFor="Name">Phone*</label><br /> */}
                    <input type="text" value={phone} onChange={(e) => { setId(e.target.value) }} id='Name' placeholder='Enter your phone Number' /><br />
                    <br />
                     {phone.length!=10 && <h6 style={{color:'red', marginTop:'-20px'}}>enter valid number </h6>}
                    {/* <label htmlFor="pass">Password*</label><br /> */}
                    <input type="password" value={pass} onChange={(e) => { setPass(e.target.value) }} id='pass' placeholder='password' /><br /><br />
                     {(pass.length>=8)?"":<h6 style={{color:'red',marginTop:'-20px'}}>enter valid password</h6>}
                    {
                        (pass.length>=8 && phone.length==10)?<button  onClick={()=>authentiction(phone,pass)}  className={styles.button} >LogIn</button>
:<h6  className={styles.utton}>login</h6>

                    }

                </form>
                <Link to='/Sign-Up' className={styles.Sign}>New here? Sign up now </Link>

            </div>
        </div>
    )
}


export default LogIn;
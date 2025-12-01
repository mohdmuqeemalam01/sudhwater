import { useRef, useState } from 'react';
import styles from '../style/SignUp.module.css';
import { Link } from "react-router-dom";
function SignUp() {
    const val = useRef();
    const [showAlert, setShowAlert] = useState(false);
    const fun = (e) => {
        e.preventDefault(); // prevents page reload
        setShowAlert(true); // show alert box
        setTimeout(() => setShowAlert(false), 2000);
    }
    return (

        <div className={styles.main}>
            <div className={styles.heading} ><h1> शुद्धh जल </h1>
            <p>Order clean, safe water online  and enjoy <br/> hassle-free delivery.</p></div>
            
            <div className={styles.Form} >
                <h1> Sign Up</h1>
                <form action=" " onSubmit={fun}>
                    {/* <label htmlFor="Name">Full Name*</label><br /> */}
                    <input type="text" id='Name' placeholder='Your Name' /><br /><br />
                    {/* <label htmlFor="email">E-mail*</label><br /> */}
                    <input type="email" id='mail' placeholder='your@email' /><br /><br />
                    {/* <label htmlFor="Name">Phone*</label><br /> */}
                    <input type="text" id='Name' placeholder='Enter your phone Number' /><br /><br />
                    {/* <label htmlFor="pass">Password*</label><br /> */}
                    <input type="password" id='pass' placeholder='password' /><br /><br />


                    <button type='submit' onClick={fun} className={styles.button} >Create Accout</button>


                </form>
                <Link to='/Login' className={styles.Login}>Already have an account?</Link>
                {/* ✅ Custom Alert Box */}
                {showAlert && (
                    <div className={styles.alertBox}>
                         ✔️ Account Created successfully !
                    </div>
                )}
            </div>
        </div>
    )
}


export default SignUp;
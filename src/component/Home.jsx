import styles from "../style/home.module.css";
import { IoWater } from "react-icons/io5";
function Home() {
    return (
       <>
            <div className={`${styles.my} p-5`} >
                <div className={` ${styles.List} `}>
                    <h3 className="text-white" ><span className="text-primary" >Water Delivery Software</span><br />
                        for Smart Water Suppliers.</h3>
                    <ul >
                        <li>
                            Water Billing Software</li>
                        <li>
                            Water Management Software</li>
                        <li>RO Water Supplier</li>
                    </ul>
                    <button className="btn btn-primary">Download Now</button>
                </div>

                <div className={` ${styles.image} `}>
                          <img height="400" src="image/image.png" alt="" />
                </div>

             
            </div>
            <div className={styles.rating} >
                
            </div>
    </>
    )
}

export default Home;
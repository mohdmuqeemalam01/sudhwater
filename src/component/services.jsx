import styles from "../style/services.module.css"
import { useEffect } from 'react';
import AOS from "aos";
import "aos/dist/aos.css";
function Services() {

    useEffect(() => {
        AOS.init({ duration: 1000 });
    });


    return (
        <>



            <div className={` ${styles.startLogo}` } data-aos="fade-top" >
                    <img src="image/servicces.png"  class="card-img-top" alt="..." />
                    <div class="card-body">
                        <h1 className={styles.Head}>Services</h1>


                    </div>
                </div>

            <p className={`text-center  fs-4 fs-md-3 fs-sm-5 px-3 ${styles.description}`} >A single Water Delivery Management Software for solving all your delivery business challenges.</p>


            <div className={` ${styles.main}`}>


                <div className={styles.customers} data-aos="zoom-in" >
                    <div className={styles.ima}>  <img src="image/waterdropBig.png" alt="" /></div>
                    <h3>Customers</h3>

                    <p>This feature allows agency owners to manage their customers and products with
                        specific prices. Shudh Jal, being a leading Water Delivery Management Software,
                        also enables agency owners to filter customers and check the due amount of customers easily.</p>


                </div>









                <div className={styles.customers} data-aos="flip-right" >
                    <div className={styles.ima}>  <img src="image/waterdropBig.png" alt="" /></div>
                    <h3>Groups</h3>
                    <p>This feature allows agency owners to manage groups and assign or remove customers from groups. With our efficient water supply management system, you can also track how many jars you need to collect from specific groups.</p>
                </div>








                <div className={styles.customers} data-aos="flip-up" >
                    <div className={styles.ima}>  <img src="image/waterdropBig.png" alt="" /></div>
                    <h3>Invoices</h3>
                    <p>Our service will generate invoices for you automatically. With our advanced water billing software, you can easily check how many invoices are due, partially paid, or fully paid for specific customers</p>
                </div>









                <div className={`${styles.customers} `} data-aos="zoom-in-left">
                    <div className={styles.ima}>  <img src="image/waterdropBig.png" alt="" /></div>
                    <h3>Delivery</h3>
                    <p>Our one-click delivery feature gives you the flexibility to deliver products easily to customers. Shudh Jal also acts as a reliable water delivery app to streamline your daily deliveries effortlessly.</p>
                </div>





            </div>




        </>
    )
}
export default Services;
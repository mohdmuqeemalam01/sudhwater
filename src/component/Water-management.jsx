import styles from '../style/water-manga.module.css'
import { useEffect } from 'react';
import AOS from "aos";
import "aos/dist/aos.css";
function WaterManagement() {

    useEffect(() => {
        AOS.init({ duration: 1000 });
    }, []);

    return (
        <div className="container" >
            <div>

                <div className={styles.manage} data-aos="fade-right" >
                    <img src="image/manage.png" alt="..." />
                </div>
                <h1 className={`text-center aos-init aos-animate gradient-text ${styles.myhead}`} >Water Delivery Management App for Businesses</h1>
                <p className="text-center">Shudh Jal offers a powerful mobile app and desktop platform for water businesses to manage customer subscriptions,
                    <br />
                    one-time orders, deliveries, and billing — all from one place.</p>

            </div>

            <div className={`${styles.mainBox} row d-flex justify-content-center align-items-center`}>
                <div className={`${styles.Textbox} col-12 col-lg-6 `}  >
                    <div className='row m-4'>
                        <div className={` ${styles.box} col-12 col-lg-5 m-2 `} >
                            <h4>   Water Order <br /> Management</h4>
                            <div >
                                <div className={styles.icon} >
                                   <img height={"40"} src="image/waterdropBig.png" alt="ico" />
                                </div>
                                Shudh Jal’s water order management software simplifies how businesses handle
                                customer orders. Effortlessly manage, track, and update orders, subscriptions,
                                reschedules, and cancellations from a single, intuitive dashboard.
                                Streamline your operations and improve efficiency with complete control over every customer
                                order.
                            </div>
                        </div>

                        <div className={`${styles.box} col-12 col-lg-5  ms-lg-5 m-2 `} >
                            <h4>  Notifications & <br />  Delivery Tracking</h4>
                            <div >
                                <div className={styles.icon} >
                                    <img height={"40"} src="image/waterdropBig.png" alt="ico" />
                                </div>

                                Shudh Jal’s water order management software simplifies how businesses handle
                                customer orders. Effortlessly manage, track, and update orders, subscriptions,
                                reschedules, and cancellations from a single, intuitive dashboard.
                                Streamline your operations and improve efficiency with complete control over every customer
                                order.
                            </div>
                        </div>

                    </div>




                    <div className='row m-4'>
                        <div className={`${styles.box} col-12 col-lg-5 m-2 `} >
                            <h4> Pause/Resume <br /> Order Deliveries</h4>
                            <div >
                                <div className={styles.icon} >
                                    <img height={"40"} src="image/waterdropBig.png" alt="ico" />
                                </div>
                                Offer flexibility by accepting multiple payment methods. Shudh Jal empowers businesses to become the best RO water supplier in India with seamless cash handling and UPI payment options.
                            </div>
                        </div>

                        <div className={`${styles.box} col-12 col-lg-5 m-2 ms-lg-5 `} >
                            <h4> Payment Options </h4>
                            <div >
                                <div className={styles.icon} >
                                    <img height={"40"} src="image/waterdropBig.png" alt="ico" />
                                </div>
                                Our smart RO water system lets businesses pause or resume customer subscription deliveries as needed. Whether customers are unavailable or require changes, you can adjust deliveries without hassle.
                            </div>
                        </div>

                    </div>


                </div>


                <div className={` ${styles.Imagebox} col-12 col-lg-4`} >

                    <img src="image/paniii.png" height='500' width='90%' alt="" />


                </div>
            </div>
            <div className={`mt-5  row d-flex justify-content-center align-items-center `} >

                <div className={`col-12 col-lg-6 ${styles.tank}`} > <img data-aos="fade-right" src="image/watertruck.png" alt="" /> </div>
                <div className={`col-12 col-lg-5 ${styles.waterDeli} `} >
                    <h3 className={``}> Why Shudh Jal?</h3>
                    <ul >
                        <li>All-in-One Water Delivery Management Platform.</li>
                        <li>Real-Time Business Analytics for Water Suppliers.
                        </li>
                        <li>check image100% Paperless & Hassle-Free Operations.</li>
                        <li>Flexible, Scalable, and Customizable Solutions.</li>
                        <li>Mobile-First Approach for Easy Order Water Management.
                        </li>
                        <li>Automatic Invoice & Billing Management System.
                        </li>
                        <li>Effortless Customer, Vendor & Group Order Management.</li>
                        <li>Secure Online Payments Integration.</li>
                        <li>Real-time Delivery Tracking & Notifications.</li>
                        <li>Reliable Customer Support, Available Monday to Saturday from 10 AM to 7 PM.</li>
                        <li>Trusted by Leading Water Delivery Companies.
                        </li>
                        <li>Grow Your Water Delivery Business with Smart Technology.</li>
                    </ul>
                </div>
            </div>

        </div>
    )
}
export default WaterManagement;
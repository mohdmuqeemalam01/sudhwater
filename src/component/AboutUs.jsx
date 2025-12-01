import styles from "../style/AboutUs.module.css"
function AboutUs() {
    return (
       
                 
               <div className={`   ${styles.mcontainer}`}>
                
                <div className={ `${styles.parcontainer}`} >
                    <h1>About us</h1>
                    <p>
                     Shudh Jal is the best water management software and a water bottle management
                      solution based on a SaaS model that enables business owners to run their business effectively.
                       It becomes too easy to handle and manage the whole water delivery business with
                        the advanced features of our online solution. The world-class panels of our robust 
                        software enable small-scale entrepreneurs to get real-time visibility of their business 
                        by investing less.
                    </p>
                </div>
                <div className={`${styles.image}`}>

                    <img src="image/aboutus.png" alt="" />
                </div>
            </div>
     
    )
}

export default AboutUs;
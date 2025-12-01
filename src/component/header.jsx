import React, { useRef, useState } from "react";
import { FaBars } from "react-icons/fa";
import '../style/header.css'
import { IoMdClose } from "react-icons/io";
import { Link } from "react-router-dom";
function Header({val}) {
  const [mobile, setMobile] = useState()


  const homeRef = useRef(null);
  const aboutRef = useRef(null);
  const servicesRef = useRef(null);

  const scrollToSection = (elementRef) => {
    elementRef.current.scrollIntoView({ behavior: "smooth" });
  };

  return (


    <>



      <div className="container d-flex  align-items-center justify-content-between">
        <div className="nav text-center bg-light  logo">
          <img height='80' width='200' src="image/shudh_jal.png" alt="" />

        </div>


        <ul className="nav  ">

          <li onClick={()=>{val('True')}} ><a href="#Home" className="nav-link  px-4 text-dark  link-underline-opacity-0 link-underline-opacity-100-hover  ">Home</a></li>
          <li><a href="#Feature" className="nav-link px-4 text-dark">Features</a></li>
          <li><a href="#AboutUs" className="nav-link px-4 text-dark">About</a></li>
        </ul>
        <div className="text-end login-signup">
          <button onClick={()=>{val('False')}} type="button" className="btn btn-primary me-2"><Link className="text-white text-decoration-none" to='/Login'  >Login</Link></button>
          <button onClick={()=>{val('False')}}  type="button" className="btn btn-success"><Link className="text-white text-decoration-none" to='/Sign-Up' >Sign-up</Link></button>
        </div>
        <div className="mobile-menu-icon">
          <button className="btn " onClick={() => {
            if(mobile){
            setMobile(false)
            }
            else{
              setMobile(true)
            }
          }} >{mobile ?  <IoMdClose />: <FaBars />}
          </button>



        </div>

      </div>

      {
        mobile && <MobileHeader val={val} setMobile={setMobile} />
      }

    </>







  )
}
export default Header;


function MobileHeader({val,setMobile}) {
  return (
    <div className="p-5 bg-grey" >
      <ul className="mobile-nav">

        <li onClick={()=>{val('True') 
          setMobile(false) }} className="list-unstyled"><a href="#" className="nav-link  px-4 text-dark  link-underline-opacity-0 link-underline-opacity-100-hover  ">Home</a></li>
        <li onClick={()=>{
          setMobile(false) }} className="list-unstyled"><a href="#Feature" className="nav-link px-4 text-dark">Features</a></li>
        <li onClick={()=>{
          setMobile(false) }} className="list-unstyled"><a href="#AboutUs" className="nav-link px-4 text-dark">About</a></li>
      </ul>
      <div className="text-end mobile-login-signup d-flex align-center">
        <button  onClick={()=>{val('False')
            setMobile(false)
        }} type="button" className="btn btn-primary me-2"><Link className="text-white text-decoration-none
" to='/Login' >Login</Link></button>
        <button  onClick={()=>{val('False')
          setMobile(false)
        }} type="button" className="btn btn-success"><Link className="text-white text-decoration-none
 " to='Sign-Up' >Sign-up</Link></button>
      </div>
    </div>
  )
}

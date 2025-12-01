import '../style/footer.css'
function Footer() {
    return (
        <div className='main' >

            <div className="footermain " >
                <div className='footerelement footstart' >
                    <p>Menu</p>
                    <ul>
                            <li>Home</li>
                            <li>About</li>
                            <li>Services</li>
                            <li>Privacy Policy</li>
                            <li>Refund & Privacy Policy</li>
                            <li>Terms & Conditions</li>
                    </ul>
                </div>
                <div className='footerelement' >
                    <p>Follow us</p>
                    <ul>
                        <li>Instagram</li>
                        <li>Facebook</li>
                        <li>Youtube</li>

                    </ul>
                </div>
                <div className='footerelement' >
                    <p>Contact Details</p>
                    <ul>
                        <li>E-mail: mohammadmuqeemalam.com</li>
                        <li>Phone: +91 7891892408</li>
                        <li>Support: +91-7891892408</li>

                    </ul>
                </div>
                <div className='footerelement border-0 ' >
                    <p>Address</p>
                    <ul>
                           <li>77 A, Kailash Vihar, Gokulpura</li>
                           <li>kalwar Road Jhotwara Jaipur</li>
                           <li>Rajasthan India 302012</li>
                    </ul>
                </div>

            </div>

            <div className="container-fluid  ">

                <div className="text-center py-2 ">

                    <span className="mb-3 mb-md-0 text-light ">© 2025 Company, Inc</span>
                </div>


            </div>
        </div>
    )
}
export default Footer;
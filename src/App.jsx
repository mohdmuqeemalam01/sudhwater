import { useState } from 'react'
import Header from './component/header'
import Footer from './component/footer'
import Home from './component/Home'
import AboutUs from './component/AboutUs.jsx'
import Services from './component/services.jsx'
import WaterManagement from './component/Water-management.jsx'
import SignUp from './Log_reg/SignUp.jsx'
import LogIn from './Log_reg/LogIn.jsx'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
function App() {
  const [page, setPage] = useState('True')


  return (
    <>





      <Router>
        <div style={{ position: 'fixed', top: 0, left: 0, width: '100%', zIndex: '1', backgroundColor: 'white' }}>
          <Header val={setPage} />

        </div>


        {
          page == 'False' && <Routes styles={{ marginTop: '5%' }}>

            <Route path='/Login' element={<LogIn />} />
            <Route path='/Sign-Up' element={<SignUp />} />
             
          </Routes>
        }
        {


          page == 'True' && <div>


            <div id="Home" style={{ marginTop: '60px' }}>
              <Home />
            </div>
            <div id='AboutUs' >
              <AboutUs />
            </div>
            <Services />
            <div id='Feature'>


              <WaterManagement />

            </div>


          </div>
        }




        <Footer />
      </Router>







    </>
  )
}

export default App
//  {/* there are write the code  for the Download the app */}
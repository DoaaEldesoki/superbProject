import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHome, faPhone , faEnvelope,faLocationDot  } from "@fortawesome/free-solid-svg-icons";
import './footer.css'
import logo from '../images/superb_pages-to-jpg-0001.jpg'

export const Footer = () => {
  return (
    <div>
      <footer class="bg-dark text-center text-white" id='contact'>
        <div class="text-center p-3" style={{ backgroundColor: "#231f1e" }}>
        <section class="">
    <div class="container text-center text-md-start mt-5">
      <div class="row mt-3">
        <div class="col-md-3 col-lg-4 col-xl-3 mx-auto mb-4">
          
         <img  src={logo} width="200px"/>
        </div>
       

       
        <div class="col-md-4 col-lg-3 col-xl-3 mx-auto mb-md-0 mb-4">
        
          <h6 class="text-uppercase fw-bold mb-4">
            Contact
          </h6>
          <p><FontAwesomeIcon  className='icon' icon={faLocationDot} /> 9 Mohamed Badawy st, Nasr City, Cairo, Egypt</p>
          <p>
          <FontAwesomeIcon className='icon' icon={faEnvelope} />
            info@superbforadv.com
          </p>
          <p><FontAwesomeIcon className='icon' icon={faPhone} />+ 20 10 111 158 89</p>
          <p><FontAwesomeIcon className='icon' icon={faPhone} /> + 20 15 589 230 00</p>
        </div>
      </div>
    </div>
  </section>
          © 2022 Copyright
        </div>
      </footer>

    </div>
  )
}
export default Footer;

import React from 'react'
import img2 from '../images/My project-1.jpg'
import img3 from '../images/img3.jpeg'
import img4 from '../images/img4.jpeg'
import logo from '../images/superb_pages-to-jpg-0001.jpg'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faWhatsapp } from '@fortawesome/free-brands-svg-icons'
import { faGoogleDrive } from '@fortawesome/free-brands-svg-icons'

import './home.css'
import { useEffect } from 'react'
import AOS from 'aos';
import 'aos/dist/aos.css';
import albraka from '../images/albaraka.jpeg'
import Inmaa from '../images/Inma.jpeg'
import Trivium from '../images/Trivium.jpeg'
import serviceFirst from '../images/serviceFirst.jpeg'
export const Home = () => {
    useEffect(() => {
        AOS.init({
            duration: 1000
        });
    }, []);
    return (
        <div>
            <div className='divimg responsive'
                style={{
                    height: '85vh'
                }}>
                <p className='header font-link'> We've got the creative. <br /> we will do a great work.<br /> Let's do this </p>
            </div>
            <div id='aboutUs'>
                <section class="page-section " data-aos="fade-up"
                    data-aos-duration="1000" id='aboutUs'>
                    <div class="container px-4 px-lg-5 mb-5" >
                        <div class="container">
               
                            <div class="row" >
                                <div class="col mt-5">
                                    <img src={logo} style={{ width: "400px" }} />
                                </div>
                                
                                <div class="col">
                                    <h2 class=" mt-5 title  " >  About us
                                    </h2>
                                    <p className='paragraph'>
                                        Our approach is simple. We hire smart, seasoned people who live
                                        to work hard. superb team is chock full of actual experts who are
                                        passionate about the work and strive to create partnerships with
                                        our clients to develop creative projects that drive growth .
                                        performance and constantly innovate, and we’re not afraid to
                                        take calculated risks to reap huge rewards
                                        We provide creative solutions special for advertising in Egypt,
                                        Especially with regard to kiosks, giveaways and prints .                                </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
            <div id='giveAways'>
                <div class="container px-4 px-lg-5 mb-5" data-aos="fade-up"
                    data-aos-duration="2000" >
                    <h2 class="text-center mt-0 title "> Giveaways</h2>
                    <hr class="divider" />
                    <div class="row gx-3 gx-lg-5" data-aos="fade-up"
                        data-aos-duration="2000">
                        <div class="container">
                            <div class="row">

                                <div class="col">

                                    <p className='paragraph'>
                                        We fully understand the impact of giveaways on customers in terms of brand loyalty,
                                        so we provide unique and impressive ideas                                </p>
                                </div>
                                <div className='col-2'>
                                </div>
                                <div class="col mt-5">
                                    <img src={img3} style={{ width: "400px" }} />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
            <div id='booths'>
                <div class=" container px-4 px-lg-5 mb-5" data-aos="fade-up"
                    data-aos-duration="2000">
                    <div class="row">
                        <div class="col mt-5 responsive">
                            <img src={img4} style={{ width: "400px" }} />
                        </div>
                        <div class="col">
                            <h2 class=" mt-5 title " >  Booths
                            </h2>
                            <p className="paragraph">
                                Our booths are designed from the start by our industry experts, ensuring detail
                                engineering and reliability. And since we carry out the entire production process in our
                                facilities, we are able to guide our customers by creating robust solutions that help us
                                meet their specific needs.
                                A harmonious team of experts specialized in designing and manufacturing kiosks                        </p>
                        </div>
                    </div>
                </div>
               
            </div>
            <div id='prints'>
                <div class="container px-4 px-lg-5 mb-5" data-aos="fade-up"
                    data-aos-duration="2000" >
                    <h2 class="text-center mt-0 title "> Prints</h2>
                    <hr class="divider" />
                    <div class="row gx-3 gx-lg-5" data-aos="fade-up"
                        data-aos-duration="2000">
                        <div class="container">
                            <div class="row">

                                <div class="col">

                                    <p className='paragraph'>
                                    We offer high quality printing services at reasonable prices.</p>
                                </div>
                                <div className='col-2'>
                                </div>
                                <div class="col mt-5">
                                    <img src={img2} style={{ width: "400px" }} />
                                </div>
                            </div>

                        </div>
           
                    </div>

                </div>
                <section class="page-section " data-aos="fade-up"
                    data-aos-duration="1000" id='aboutUs'>
                    <div class="container px-4 px-lg-5 mb-5" >
                        <div class="container">
                        <div class="col text-center">
                                    <h2 class=" mt-5 title  " >  Our Customers
                                    </h2>
 
  
                                </div>
                        <div class="row" >
 
                        <div class="card" style={{"width" : "15rem", "margin": "10px"}}>
  <img class="card-img-top" src={albraka}  style={{"height" : "10rem" }}alt="Card image cap"/>
  <div class="card-body">
  </div>
</div>
<div class="card" style={{"width" : "15rem" ,"margin": "10px"}}>
  <img class="card-img-top" src={Inmaa}  style={{"height" : "10rem" }}alt="Card image cap"/>
  <div class="card-body">
  </div>
</div>
<div class="card" style={{"width" : "15rem", "margin": "10px"}}>
  <img class="card-img-top" src={serviceFirst} style={{"height" : "10rem" }} alt="Card image cap"/>
  <div class="card-body">
  </div>
</div>
<div class="card" style={{"width" : "15rem" ,"margin": "10px"}}>
  <img class="card-img-top" src={Trivium} style={{"height" : "10rem" }} alt="Card image cap"/>
  <div class="card-body">
  </div>
</div>
                                
                          
                                
                            </div>
                  
                        </div>
                    </div>
                </section>
            </div>
            <div>
                <div className='col'>
                <div>
                <a href="https://api.whatsapp.com/send?phone=201011115889&text=Hi" class="whatsapp-button" target="_blank">
                    {/* <img src="https://i.ibb.co/VgSspjY/whatsapp-button.png" alt="botão whatsapp"/> */}
                    <FontAwesomeIcon icon={faWhatsapp} size="4x" />
                </a>
            </div>
            <div>
                <p class="drive-button fixedTitle"> Click To see some of our products on drive cloud</p>
                <a href="https://1drv.ms/u/s!Arwdu3RLL2-yb5LH96ReA8uVdgs?e=oqjLZd." class="drive-button" target="_blank">
                    {/* <img src="https://i.ibb.co/VgSspjY/whatsapp-button.png" alt="botão whatsapp"/> */}
                    <FontAwesomeIcon icon={faGoogleDrive} size="4x" />
                </a>
            </div>
                </div>
            </div>
     
        </div>
    )
}
export default Home; 
import React from "react";
import './ourservices.css';

function OurServices(){
    return(
        <div>
           <div className="heading_head" id="Our_Services_offering">
           <span className="OurServices_heading">Our Offering</span><br></br>
        {/* <h1>Our Special Services For You</h1>*/}
        <span className="OurServices_content">Safetek Regulatory Services, a trusted partner in regulatory compliance<br></br> and 
quality assurance for medical device manufacturers worldwide.</span>
        {/* <img src="/images/image-3.png" alt="Our Services" /> */}
           </div>
           <div className="service_card">
               <div className="service_card_1">
                <img src="/images/service-icon-1.svg" alt="service-1" />    
                <h4>MDSAP Consultancy</h4>
                <p>For manufacturers looking to expand their market reach, compliance with the MDSAP becomes essential.</p>
               </div>
               <div className="service_card_2">         
                   <img src="/images/service-icon-1.svg" alt="service-2" />
                   <h4>Certification Support</h4>
                   <p>Navigating the complex landscape of regulatory certifications can be challenging. </p>
               </div>
               <div className="service_card_3">
                   <img src="/images/service-icon-3.svg" alt="service-3" />
                   <h4>Safety Testing</h4>
                   <p>At Safetek Regulatory Services, we understand the significance of safety 
                    and biocompatibility testing for 
                    medical devices.
                    </p>
               </div>
           </div>
        </div>
    );
}

export default OurServices;
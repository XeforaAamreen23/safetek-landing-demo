import React from "react";
import { DiIonic } from "react-icons/di";


function WyUs(){
    return(
        <div>
        <div className="content_main_whyus" id="About_Us">
            {/* Add your landing page content here */}
           
            <div className='whyus_image_right'>
                <img className="whyus_image" src="/images/whyus.svg" alt="banner-image" /> {/* Use your logo image from the public folder */}
            </div>
            <div className='whyus_content'>
                <h1>#1 Medical Device Regulatory Consultancy</h1>
                <p>Safetek Regulatory Services: Expertise you can trust for precise 
                compliance guidance and unwavering support.</p>

                <p>  <DiIonic /> Extensive expertise in global regulations for medical devices. </p>
                <p>  <DiIonic /> Personalized approach tailored to your specific needs. </p>
                <p>  <DiIonic /> Timely and efficient certification support. </p>
                <p>  <DiIonic /> In-depth knowledge of MDSAP requirements.</p>
                <p>  <DiIonic /> State-of-the-art testing facilities and experienced team. </p>
                <p>  <DiIonic /> Commitment to ensuring the safety and compliance of your products. </p>
                {/* <button className='btn_expl'>Exlpore Our Services</button> */}
            </div>
        </div>
        
    </div>
    );
}

export default WyUs; 

import React from "react";
import Button from '@mui/material/Button';
// import Stack from '@mui/material/Stack';

function Contact_sec() {    

    return (
        <div className="contact_bg" style={{ backgroundImage: "url(/images/contact-us.png)", backgroundSize: "cover" }}>
            <div className="left_div">
                <h1>Consult America's #1 Medical Device Regulatory Consultancy</h1>
                <Button className="btn_contact" variant="contained" href="#contained-buttons">Get In Touch</Button>
            </div>
            <div className="right_div">
            </div>
        </div>      

    );      

}
export default Contact_sec; 
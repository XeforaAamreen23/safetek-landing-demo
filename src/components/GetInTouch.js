import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';

function GetInTouch() {
    const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm('service_10aswda',
                 'template_2j27o6c', 
                 form.current, {
                    publicKey: '0HHc7Hu--v8cjWTPI',
      })
      .then(
        (result) => {
          console.log(result.text);
          console.log("message sent");
        },
        (error) => {
          console.log('FAILED...', error.text);
        },
      );
    }
    
    return(
        <div className="container_getin" id='contained-buttons'>
            <div className="equal-width-div">
                <h3 className="heading_getin">Get In Touch With Us</h3>
                <form ref={form} onSubmit={sendEmail}>
                    {/* <label>Name</label> */}
                    <input type="text" name="user_name" placeholder='First Name'/><br></br>
                    {/* <label>Last Name</label> */}
                    <input type="text" name="last_name" placeholder='Last Name' /><br></br>
                    {/* <label>Email</label> */}
                    <input type="email" name="user_email" placeholder='Email' required/><br/>
                    {/* <label>Message</label> */}
                    <textarea name="message" placeholder='Message Here'/><br></br>
                    <input className='btn_getin' type="submit" value="Send Message"  style={{width:"160px"}}/>
                </form>
            </div>
            <div className="equal-width-div">
                <img  className="image_getin" src="/images/get-in-touch.png" alt="Get In Touch" />
            </div>
        </div>
        
    );
}


export default GetInTouch;
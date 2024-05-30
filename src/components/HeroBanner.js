import React from 'react';
import Button from '@mui/material/Button';


function HeroBanner() {
    return (
        <div>
            <div className="content_main">
                {/* Add your landing page content here */}
                <div className='banner_content'>
                    <h1>Get Better Care For Your Health</h1>
                    <p>Quisque leo augue, lobortis ac tellus nec, posuere ultricies nulla.Praesent massa odio, pellentesque in consectetur quis, volutpat sit amet erat.</p>
                    {/* <button className='btn_expl' href="#Our_Services_offering">Exlpore Our Services</button> */}
                    <Button className="btn_expl" variant="contained" href="#contained-buttons">Exlpore Our Services</Button>

                </div>
                <div className='banner_image_right'>
                    <img src="/images/header-img.svg" alt="banner-image" /> {/* Use your logo image from the public folder */}
                </div>
            </div>
            
        </div>
    );
}

export default HeroBanner; 
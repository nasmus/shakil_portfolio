import React from 'react'
import "./ContactUs.css"
import {BrowserRouter as Link} from "react-router-dom";
import FacebookIcon from '@material-ui/icons/Facebook';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import GitHubIcon from '@material-ui/icons/GitHub';


function ContactUs() {
    return (
        <div className="footer">
            <div className="footer__show">
                <div className="footer__contain">
                    <h1>Address</h1>
                    <p>5th Floor, House 16, Road 12, Nikunjo 2,<br></br>
                        Dhaka 1229, Bangladesh.
                    </p>
                    <div className="footer__icon">
                        
                        <span className="footer__span1"><FacebookIcon /></span>
                        <span className="footer__span2"><LinkedInIcon /></span>
                        <span className="footer__span3"><GitHubIcon /></span>
                        
                    </div>
                    

                </div>
                <div className="footer__contain">
                    <Link to="/" className="footer__link">
                        <h3>Home</h3>
                    </Link>
                    <Link to="/contactpage" className="footer__link">
                        <h3>Contact</h3>
                    </Link>
                    <Link to="/portfoliopage" className="footer__link">
                        <h3>Portfolio</h3>
                    </Link>
                    
                    
                </div>
                <div className="footer__contain" >
                    <h3>Email :</h3>
                    <p>nasmus_shahadat@nasmus.xyz</p>
                    
                </div>
                <div className="footer__contain">
                    <Link to="/login" className="footer__link">
                        <h3>LogIn</h3>
                    </Link>
                    
                </div>
            </div>
        </div>
    )
}

export default ContactUs

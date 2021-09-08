import React from 'react'
import "./ContactUs.css"
import EmailIcon from '@material-ui/icons/Email';

function ContactUs() {
    return (
        <div className="contactus">
            <div className="contact__title">
                <EmailIcon className="contact__logo" />
                <h2>Contact</h2>
            </div>
            <div className="contact__details">
                <h4>nasmus.shahadat@outlook.com</h4>
            </div>
        </div>
    )
}

export default ContactUs

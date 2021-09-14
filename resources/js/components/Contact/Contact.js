import React, { useState } from 'react';
import contactImage from '../image/contactImage.svg';
import Button from '@material-ui/core/Button';
import "./Contact.css";
import personServices from '../../services/Person';

function Contact() {
    const [name, setName] = useState(null);
    const [email, setEmail] = useState(null);
    const [phone, setPhone] = useState(null);
    const [message, setMessage] = useState(null);
    const saveMessage = async() => {
        const data = {
            name,email,phone,message
        }
        
        const res = await personServices.sendMessage(data);

        if(res.success) {
            alert(res.message)
        }
        else {
            alert(res.message)
        }
    }

    return (
        <div className="contact">
            
            <div className="contact__left" >
                <img src={contactImage} />
            </div>
            <div className="contact__right" >
                <div className="contact__inputfield">
                    <div className="contact__inputtText">
                        <input type="text" placeholder="Name" className="contact__input" onChange={(e) => setName(e.target.value)} />
                        <input type="text" placeholder="Email" className="contact__input" onChange={(e) => setEmail(e.target.value)} />
                        <input type="text" placeholder="Phone" className="contact__input" onChange={(e) => setPhone(e.target.value)} />
                    </div>
                    <div className="contact__inputTextarea">
                        <textarea placeholder="Message" cols="30" rows="9" onChange={(e) => setMessage(e.target.value)} ></textarea>
                    </div>
                </div>
                <div className="contact__button">
                        <p>This site is protected by reCAPTCHA and the GooglePrivacy Policy  <br></br> of Service apply</p>
                        <Button variant="contained" color="primary" disableElevation onClick={() => saveMessage()} >
                            Send Message
                        </Button>
                    </div>
            </div>


        </div>
    )
}

export default Contact

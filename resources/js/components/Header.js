import React, { useState } from 'react'
import { BrowserRouter as Router, Link } from "react-router-dom";
import "./Header.css"
import HeaderOption from './HeaderOption';
import HomeIcon from '@material-ui/icons/Home';
import ContactMailIcon from '@material-ui/icons/ContactMail';
import AmpStoriesIcon from '@material-ui/icons/AmpStories';
import ExitToAppIcon from '@material-ui/icons/ExitToApp';
import ReorderIcon from '@material-ui/icons/Reorder';
import CancelIcon from '@material-ui/icons/Cancel';


function Header() {
    const [click, setClick] = useState(false);
    const hendelClick = () => setClick(!click);
    const navhide = () => {
        if($(window).width() < 780){
            setClick(!click);
        }
    }
      
    return (

        <div className="header">
            <div className="header__left">
                <div className="gg" >
                    <h1>MD.NASMUS <span className="header__span">SHAHADAT</span></h1>
                </div>
                
                <div className="header__mobile__button" onClick={hendelClick} >
                    {click? <CancelIcon className="zz" /> : <ReorderIcon className="zz" />}
                </div>
            </div>
            <div className={click ? "header__mobile__button" : "header__right" }>
                <Link to="/" className="header__link" onClick={navhide} >
                    <HeaderOption Icon={HomeIcon} title="Home" />
                    
                </Link>
                <Link to="/portfoliopage" className="header__link" onClick={navhide} >
                    <HeaderOption Icon={AmpStoriesIcon} title="Portfolio" />
                </Link>

                <Link to="/contactpage" className="header__link" onClick={navhide} >
                    <HeaderOption Icon={ContactMailIcon} title="Contact" />
                </Link>
                <Link to="/login" className="header__link" onClick={navhide} >
                    <HeaderOption Icon={ExitToAppIcon} title="LogIn" />
                </Link>

            </div>
            
        </div>


    )
}

export default Header

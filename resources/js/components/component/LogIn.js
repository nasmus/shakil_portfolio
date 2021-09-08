import React from 'react'
import "./LogIn.css"
import MailOutlineIcon from '@material-ui/icons/MailOutline';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import Header from '../Header';


function LogIn() {
    return (
        <>
        <Header />
        <div className="login">
            
            <div className="login__body">
                <div className="login__logo">
                    
                    </div>
                    <div className="login__title">
                        <h1>Log In</h1>
                    </div>
                    <div className="login__subTitle">
                        <p>only for admin</p>
                    </div>
                    <div className="login__fields">
                        <div className="login__userName">
                           <span className="login__icon"><MailOutlineIcon /></span> 
                            <input type="text" placeholder="Username" className="user-input" />
                        </div>
                        <div className="login__password">
                           <span className="login__icon"><LockOutlinedIcon /></span> 
                            <input type="password" placeholder="Password" className="pass-input" />
                        </div>
                        
                    </div>
                    <button className="signin-button" name="button" >Log In</button>
                   
                </div>
        </div>
        </>
    )
}

export default LogIn

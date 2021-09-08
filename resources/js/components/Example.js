import React from 'react';
import ReactDOM from 'react-dom';
import Admin from './Admin/Admin';
import './App.css';
import {BrowserRouter as Router, Switch, Route} from "react-router-dom"
import Body from './Body';
import LogIn from './component/LogIn';
import ContactUs from './ContactUs';
import Education from './Education';
import Header from './Header';
import Skills from './Skills';
import ContactPage from './component/ContactPage';
import PortfolioPage from './component/PortfolioPage';
import PortfolioDetails from './component/PortfolioDetails';

function Example() {
    return (
        <div>
            <Router>
            <div className="app"> 
              <Switch>
                <Route path="/login">
                  <LogIn />
                  <ContactUs />
                </Route>
                <Route path="/contactpage">
                  <Header />
                  <ContactPage />
                  <ContactUs />                  
                </Route>
                <Route path="/portfoliopage">
                  <Header />
                  <PortfolioPage />
                  <ContactUs />
                </Route>
                <Route path="/details/:id" 
                //component={Header}
                component={PortfolioDetails}
                //component={ContactUs}
                >
                  
                </Route>
                
                <Route path="/">
                  <Header />
                  <Body />
                  <Education />
                  <Skills />
                  <ContactUs />
                </Route>
              
              </Switch>     
                      
            </div>
          </Router>
        </div>
    );
}

export default Example;

if (document.getElementById('example')) {
    ReactDOM.render(<Example />, document.getElementById('example'));
}

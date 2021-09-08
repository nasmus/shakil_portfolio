import React from 'react'
import "./Admin.css"
import {BrowserRouter as Router, Switch, Route} from "react-router-dom"
import ReactDOM from 'react-dom'
import Sidebar from './Sidbear'
import TitleAndPhoto from './TitleAndPhoto'
import EducationComponent from './EducationComponent'
import SkillsComponent from './SkillsComponent'
import WorkExprience from './WorkExprience'
import PortfolioAdmin from './PortfolioAdmin'
import Header from '../Header'
import Email from './Email'
import HomePanel from './HomePanel'


function Admin() {
    return (
        <Router>
            <div className="admin">
                <div className="admin__header">
                    <Header />
                </div>
                
                <div className="admin__feed">
                    <Sidebar />

                    <Switch>
                        
                        <Route path ="/titleandphoto">
                            <TitleAndPhoto />
                        </Route>
                    
                        <Route path="/education">
                            <EducationComponent />
                        </Route>

                       <Route path="/skills" >
                            <SkillsComponent />
                       </Route>
                       <Route path="/works" >
                           <WorkExprience />
                       </Route>
                       <Route path="/portfolio" >
                           <PortfolioAdmin />
                       </Route>
                       <Route path="/email" >
                           <Email />
                       </Route>
                       <Route path="/homepanel" >
                           <HomePanel />
                       </Route>
                       
                    </Switch>
                                        
                </div>
            </div>
        </Router>
        
    )
}

export default Admin

if (document.getElementById('admin')) {
    ReactDOM.render(<Admin />, document.getElementById('admin'));
}
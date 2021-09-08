import React from 'react'
import "./Sidebar.css"
import SidebarRow from './SidebarRow'
import PhotoLibraryIcon from '@material-ui/icons/PhotoLibrary';
import AccountBalanceIcon from '@material-ui/icons/AccountBalance';
import WorkIcon from '@material-ui/icons/Work';
import { Link } from 'react-router-dom';
import TvIcon from '@material-ui/icons/Tv';
import AssignmentIcon from '@material-ui/icons/Assignment';
import HomeWorkIcon from '@material-ui/icons/HomeWork';
import MailIcon from '@material-ui/icons/Mail';

function Sidebar() {
    return (
        <div className="sidebar">
            <h1>Option</h1>
            <Link className="sidebar__link" to="/homepanel">
                <SidebarRow Icon={HomeWorkIcon} title="Home Panel" />
            </Link>
            <Link className="sidebar__link" to="/titleandphoto">
                <SidebarRow Icon={PhotoLibraryIcon} title="Title and Photo" />
            </Link>

            <Link className="sidebar__link" to="/education">
                <SidebarRow Icon={AccountBalanceIcon} title="Education" />
            </Link>
            
            <Link className="sidebar__link" to="/skills">
                <SidebarRow Icon={AssignmentIcon} title="Skills" />
            </Link>

            <Link className="sidebar__link" to="/works">
                <SidebarRow Icon={WorkIcon} title="Work Exprience" />
            </Link>
            <Link className="sidebar__link" to="/portfolio">
                <SidebarRow Icon={TvIcon} title="Portfolio" />
            </Link>
            <Link className="sidebar__link" to="/email">
                <SidebarRow Icon={MailIcon} title="Email" />
            </Link>
            
            
            
        </div>
    )
}

export default Sidebar

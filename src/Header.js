import React from 'react'
import SearchIcon from '@material-ui/icons/Search';
import "./Header.css"
import HeaderOption from './HeaderOption';
import HomeIcon from '@material-ui/icons/Home';
import SupervisorAccountIcon from '@material-ui/icons/SupervisorAccount';
import BusinessCenterIcon from '@material-ui/icons/BusinessCenter';
import NotificationsIcon from '@material-ui/icons/Notifications';
import ChatIcon from '@material-ui/icons/Chat';

import ExitToAppIcon from '@material-ui/icons/ExitToApp';

function Header() {
   
    return (
        <div className ="header">
            <div className="header__left">
                <img  className="header__logo"
                 src="https://lh3.googleusercontent.com/nQG3Xug8wHc1DYCgc98WeQUtn1fmPnMP9rQlEGAETn9QbgHxfawReOglclXeyI2Ed1DAuaWk=w16383" alt="truexam logo"/>
               
            </div>

            <div className="header__right">
                
                <HeaderOption avatar={true}
                title="instructor"
                />
                <HeaderOption Icon={ExitToAppIcon} title="signout" 
               />
                 
               
            </div>
            
        </div>
    )
}

export default Header

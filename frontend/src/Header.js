import React from 'react';
import './App.css';

function Header() {
    return (
        <div className="header">
            <ul>
                <li><img src={'./static/img/kidlogo.png'} alt={'KidTube logo'}/></li>
                <li><h1>KidTube</h1></li>
                <li><input type="text" placeholder="Search.."/></li>
            </ul>
        </div>
    );
}

export default Header;
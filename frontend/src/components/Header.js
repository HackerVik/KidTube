import React from 'react';
import '../App.css';

function Header() {
    return (
        <div className="header">
                <img src={'./static/img/kidlogo.png'} alt={'KidTube logo'}/>
                <h1>KidTube</h1>
        </div>
    );
}

export default Header;
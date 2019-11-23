import React from 'react';

function Navbar() {
    return(
        <div className="navbar">
            <li>You are not logged in</li>
            <li><button>Log in</button></li>
            <li><button>Register</button></li>
            <li><input type="text" placeholder="Search..."/></li>
        </div>
    );
}

export default Navbar;
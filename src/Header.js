import React from 'react';
import Logo from "./Logo";
import Menu from "./Menu";

function Header() {
    return (
        <div className="header">
            <Logo />
            <Menu />
        </div>
    );
}

export default Header;
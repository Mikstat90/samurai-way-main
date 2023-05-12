import React from 'react';
import s from './Header.module.css';

const Header = () => {
    return (
        <header className={s.header}>
            <img src="https://archive.org/download/apple-mac-logo-icon-300x300/apple-mac-logo-icon-300x300.png" alt="apple"/>
        </header>
    )
}

export default Header;
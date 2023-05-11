import React from 'react';
import './App.css';

function App() {
    return (
        <div className='app-wrapper'>
            <header className='header'>
                <img src="https://archive.org/download/apple-mac-logo-icon-300x300/apple-mac-logo-icon-300x300.png" alt="apple"/>
            </header>
            <nav className='nav'>
                <div>Profile</div>
                <div>Messages</div>
            </nav>
            <div className='content'>
                Main content
            </div>
        </div>
    );
}

export default App;

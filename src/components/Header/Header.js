import React from 'react';
import "./Header.css"

export default function Header() {
    const logout = () => {
        localStorage.clear();
        window.location.reload()
    }
    return (
        <div>
            <header>
                <button id="logout" className="btn" onClick={logout}>Logout</button>
                <div className="header">
                    <h1 className="App-header">QA BOX LET'S TEST</h1>
                </div>
            </header>
        </div>
    );
}
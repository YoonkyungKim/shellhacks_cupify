import React from 'react';
import { Link } from 'react-router-dom';
import '../css/Header.css';
import '../css/CommonStyles.css';
import logo from '../img/logo-horizontal-black.png';
import logoWhite from '../img/logo-horizontal-white.png';

function Header({font}) {
  return (
    <header className="header">
        <div className="header-container">
            <div className="row">
                <div className="header-left-container col-6">
                    <Link to="/">
                        <img className="logo" src={font === 'white' ? logoWhite : logo} alt="cupify logo" />
                    </Link>
                </div>
            </div>
        </div>

    </header>
  );
}

export default Header;
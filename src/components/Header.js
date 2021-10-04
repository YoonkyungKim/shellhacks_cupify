import React from 'react';
import { Link } from 'react-router-dom';
import '../css/Header.css';
import '../css/CommonStyles.css';
import logo from '../img/logo-horizontal-black.png';
import logoWhite from '../img/logo-horizontal-white.png';

function Header({font, game, reviewPage}) {
    if (!game){
        return (
            <header className="header">
            <div className="header-container">
                <div className="row">
                    <div className="col-6 header-left-container">
                        <Link to="/">
                            <img className="logo" src={font === 'white' ? logoWhite : logo} alt="cupify logo" />
                        </Link>
                    </div>
                </div>
            </div>

        </header>
        )
    } else {
        return (
            <div className={`${reviewPage ? `col-10`: "col-5"}`}>
                <Link to="/">
                    <img src={logoWhite} alt="Cupify logo" height="50px" />
                </Link>
            </div>
        );
    }
}

export default Header;
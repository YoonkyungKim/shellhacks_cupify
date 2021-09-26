import React from 'react';
import { Link } from 'react-router-dom';
import '../css/Header.css';
import '../css/CommonStyles.css';

function Header({name, price}) {
  return (
    <header className="header">
        <div className="container header-container">
            <div className="row">
                <div className="header-left-container col-6">
                    <Link to="/">
                        <img src="" alt="cupify logo" />
                        <span>Cupify</span>
                    </Link>
                </div>
                <div className="header-right-container col-6">
                    <div className="language-container">
                        <a className="language" href="#">Français</a>
                    </div>

                    <button className="white-btn-black-border common-btn">Join Now</button>
                    <button className="black-btn common-btn">Sign In</button>
                </div>
            </div>
        </div>

    </header>
  );
}

export default Header;
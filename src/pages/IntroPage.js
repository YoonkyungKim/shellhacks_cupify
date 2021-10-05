import React, { useState, useEffect, useRef } from 'react';
import { Link, Redirect } from 'react-router-dom';
import '../css/CommonStyles.css';
import '../css/blackBg.css';
import Header from '../components/Header';
import IntroCard from '../components/IntroCard';
import Cup from '../img/cup-low-height.png';
import Mailer from '../img/box-low-height.png';
import Money from '../img/money-low-height.png';
// white-card-no-border
function IntroPage() { 
    return (
        <div className="black-bg" style={{}}>
            <Header />
            <div className="container" style={{marginTop: "70px", backgroundColor: "#96bf47", textAlign: "center", borderRadius: "3.5em", height: "600px"}}>
                <h2 className="game-step-title" style={{paddingTop: "50px", marginBottom: "50px"}}>Welcome to the Cupify game!</h2>
                <div className="card-container">
                    <div>
                        <IntroCard 
                            id={1}
                            name={"Choose a\nproduct"}
                            img={Cup}
                        />
                        <IntroCard 
                            id={2}
                            name="Choose the packaging"
                            img={Mailer}
                        />
                        <IntroCard 
                            id={3}
                            name="Set a price"
                            img={Money}
                        />
                    </div>
                    {/* <Link to="/cup-selection">
                        <button style={{marginTop: "30px", borderRadius: "3em", width: "300px"}} className="common-btn white-btn-green-border">Skip and start</button>
                    </Link>

                    <Link to="">
                        <button style={{marginTop: "30px", borderRadius: "3em", width: "300px"}} className="common-btn white-btn-green-border">Next</button>
                    </Link> */}
                    <Link to="/cup-selection">
                        <button className="common-btn white-btn-green-border intro-btn">Start</button>
                    </Link>
                </div>
            </div>
        </div>
    );
}

export default IntroPage;
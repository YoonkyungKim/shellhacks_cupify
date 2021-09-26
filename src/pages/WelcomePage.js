import React from 'react';
import { Link } from 'react-router-dom';
import '../css/CommonStyles.css';
import Header from '../components/Header';
import GameStepCard from '../components/GameStepCard';

function WelcomePage() {

  return (
    <div>
        <Header />
        <div className="container">
            <div className="row section">
                <div className="col-6">
                    <h1>Become a super seller at Cupify</h1>
                    <p>Tools, tutorials, design and innovation experts, all in one place! The most intuitive way to imagine your next user experience.</p>
                    <button className="common-btn green-btn">Get started</button>
                    <button className="common-btn white-btn-green-border">Watch the Video</button>
                </div>

                <div className="col-6">
                    <img src="" alt=""/>
                </div>
            </div>
            
            <div className="row">
                <h2>This game will teach you</h2>
                <GameStepCard 
                    title="Inventory"
                    img=""
                    description="Different strategy toward each cup based on grade"
                />
                <GameStepCard 
                    title="Product Packaging"
                    img=""
                    description="Choose the best packaging for each cup"
                />
                <GameStepCard 
                    title="Shipping"
                    img=""
                    description="Provide fast shipping experience"
                />
                <GameStepCard 
                    title="Accounting"
                    img=""
                    description="Consider several factors to maximize your profit"
                />
                <Link to="/start-countdown">
                    <button className="common-btn black-btn">Play now</button>
                </Link>
            </div>
        </div>
    </div>
  );
}

export default WelcomePage;
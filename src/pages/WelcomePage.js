import React from 'react';
import { Link } from 'react-router-dom';
import '../css/CommonStyles.css';
import ParachuteHeavyDutyBox from '../img/parachute-heavy-duty-box.png';
import First from '../img/one.png';
import Second from '../img/two.png';
import Third from '../img/three.png';
import Youtube from '../img/youtube-green.png';
import Github from '../img/github-green.png';
import Devpost from '../img/devpost-green.png';
import Header from '../components/Header';
import GameStepCard from '../components/GameStepCard';

function WelcomePage() {

  return (
    <div>
        <Header />
        <div className="container" style={{maxWidth: "100%"}}>
            <div className="row" style={{margin: "100px 80px",}}>
                <div className="col-6">
                    <h2 style={{marginBottom: "20px"}}>Become a seller at Cupify!</h2>
                    <p className="desc" style={{fontSize: "1.15em"}}>Cupify is an online simulator game to educate new merchants
                    on e-commerce, in a fun and interactive way.</p>
                    <div style={{marginTop: "50px"}}>
                        <Link to="/start-countdown">
                            <button className="common-btn green-btn">Get started</button>
                        </Link>
                        <a href="https://www.youtube.com/watch?v=VN414I2-9Gk">
                            <button className="common-btn white-btn-green-border">Watch the Video</button>
                        </a>
                    </div>
                </div>

                <div className="col-6" style={{ textAlign: 'right'}}>
                    <img style={{width: "90%"}} src={ParachuteHeavyDutyBox} alt="parachute_heavy_duty_box"/>
                </div>
            </div>
            <div className="game-steps-container">
                <div className="row game-steps-inside-container" style={{backgroundColor: "#f5f5f5", textAlign: 'center'}}>
                    <h3 style={{marginTop: "70px", marginBottom: "100px"}}>This game will teach you</h3>
                        <GameStepCard 
                            title="Packaging"
                            img={First}
                            description="Find the best packaging for each product"
                        />
                        <GameStepCard 
                            title="Accounting"
                            img={Second}
                            description="Set a moderate price"
                        />
                        <GameStepCard 
                            title="Shipping"
                            img={Third}
                            description="Provide a fast shipping"
                        />
                    <Link to="/start-countdown">
                        <button style={{backgroundColor: "#22343D", paddingRight: "25px", borderColor: "#22343D", marginBottom: "80px"}}className="common-btn black-btn">Play now</button>
                    </Link>
                </div>
            </div>

            <div className="row" style={{margin: "0 auto", padding: "100px 0", textAlign: "center"}}>
                <div style={{marginLeft: "80px", color: "#96bf47"}} className="col-4">
                    <p>© 2021 Cupify</p>
                </div>
                <div className="col-3">
                    <a style={{marginRight: "10px"}} href="https://www.youtube.com/watch?v=VN414I2-9Gk">
                        <img width="30px" src={Youtube} alt="Youtube logo" />
                    </a>
                    <a style={{marginRight: "10px"}} href="https://github.com/YoonkyungKim/shellhacks_cupify">
                        <img width="30px" src={Github} alt="Github logo" />
                    </a>
                    <a style={{marginRight: "10px"}} href="https://devpost.com/software/cupify">
                        <img width="30px" src={Devpost} alt="Devpost logo" />
                    </a>
                </div>
            </div>
        </div>
    </div>
  );
}

export default WelcomePage;
import React, { useState, useEffect, useRef } from 'react';
import { Link, Redirect } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { resetOrderNum, resetRatings } from '../store/orders/reducers';
import '../css/CommonStyles.css';
import Header from '../components/Header';

function GameResultPage({location}) {  
    const ratings = useSelector(state => state.reducer[0].ratings);
    const totalMoney = useSelector(state => state.reducer[0].totalMoney);
    const averageRating = ratings.reduce((a,b) => a + b, 0) / ratings.length;

    const dispatch = useDispatch();
    
    dispatch(resetOrderNum());

    if (averageRating >= 4.5){
        return (
            <div>
                <Header />
                <div className="container">
                    <h1>Congratulations!</h1>
                    <h3>You passed the game.<br/>
                    Now, you are ready to become a super seller at Shopify!</h3>
                    <p>Average rating: ⭐️{(Math.round( averageRating * 10 ) / 10).toFixed(1)}</p>
                    <p>Total profit: ${totalMoney - 80}</p>
                    <Link to="/ranking"
                        onClick={() => {
                            dispatch(resetRatings());
                        }}>
                        <button className="common-btn green-btn">Ranking</button>
                    </Link>
                </div>
            </div>
        );   
    } else {
        return (
            <div>
                <Header />
                <div className="container">
                    <h1>Failed</h1>
                    <p>You didn’t meet the goal rating ⭐️4.5</p>
                    <p>Next time, try to</p>
                    <p>be speedy</p>
                    <p>pick appropriate packaging</p>
                    <p>set reasonable price</p>
                    <p>Average rating: ⭐️{averageRating}</p>
                    <p>Total profit: ${totalMoney - 80}</p>
                    <Link to="/start-countdown"
                        onClick={() => {
                            dispatch(resetRatings());
                        }}>
                        <button className="common-btn green-btn">Try again</button>
                    </Link>
                </div>
            </div>
        );   
    }
}

export default GameResultPage;
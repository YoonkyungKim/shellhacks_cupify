import React from 'react';
import { useSelector } from 'react-redux';
import '../css/Header.css';
import '../css/CommonStyles.css';
import Star from '../img/star-icon.png';
import MoneyBag from '../img/money-bag-icon.png';

function GameStatus() {
    // const rating = useSelector(state => state.reducer[0].thisRoundRating);
    const money = useSelector(state => state.reducer[0].totalMoney);
    const wholeData = useSelector(state => state.reducer[0]);

    const ratings = useSelector(state => state.reducer[0].ratings);
    const averageRating = ratings.reduce((a,b) => a + b, 0) / ratings.length;

    console.log("data in status: "+ JSON.stringify(wholeData));
    return (
        <div className="col-2 status-bar-right">
            <h3 className="font-white inline"><img className="status-icon" src={Star} alt="Star icon" height="30px"/>{isNaN(averageRating) ? 5.0 : averageRating.toFixed(1)}</h3>
            <h3 className="font-white"><img className="status-icon" src={MoneyBag} alt="Money bag icon" height="30px"/>{money}</h3>
        </div>
    )
}

export default GameStatus;
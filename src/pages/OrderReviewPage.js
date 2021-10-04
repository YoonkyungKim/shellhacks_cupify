import React, { useEffect } from 'react';
import { Link, Redirect } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import '../css/CommonStyles.css';
import Header from '../components/Header';
import GameStatus from '../components/GameStatus';
import SelectionCard from '../components/SelectionCard';
import { addProfit, 
        addRating, 
        resetRoundRating, 
        resetSelections, 
        resetTimeRemained, 
        updateThisRoundRating 
} from '../store/orders/reducers';
import Profit from '../img/profit-icon.png';
import Star from '../img/star-icon.png';
import Timer from '../img/timer-icon.png';

function OrderReviewPage({location}) {  
    const orderNum = useSelector(state => state.reducer[0].orderNum);
    const selectedCup = useSelector(state => state.reducer[0].selections[0]);
    const selectedPackage = useSelector(state => state.reducer[0].selections[1]);
    // const timeRemained = useSelector(state => state.reducer[0].timeRemained);
    const thisRoundRating = useSelector(state => state.reducer[0].thisRoundRating);
    const dispatch = useDispatch();
    // clear localstorage

    useEffect(() => {
        if (location.state){
            // console.log("location: " + JSON.stringify(location))
            console.log(orderNum);
            if (selectedCup && selectedPackage){
                const finalPrice = location.state.finalPrice;
                const profit = finalPrice - selectedCup.price - selectedPackage.price;
                dispatch(addProfit(profit));
                dispatch(addRating(thisRoundRating));

                if (location.state.price === "cheap"){
                    dispatch(updateThisRoundRating(0.1));
                } else if (location.state.price === "expensive"){
                    dispatch(updateThisRoundRating(-1.0));
                }
            }
        }
    }, []);

    if (location.state){
        if (location.state.orderCompleted){
            const finalPrice = location.state.finalPrice;
            const profit = finalPrice - selectedCup.price - selectedPackage.price;
            const counter = location.state.counter;
            return (
                <div>
                    <div className="container game-step-box background-img">
                    <div className="row status-bar">
                        <Header game={true} reviewPage={true}/>
                        <GameStatus />
                    </div>
                    
                        <div className="text-align-center font-white">
                            <h1>Order Review [{orderNum} /10]</h1>

                            <div className="center-card-container">
                                <SelectionCard 
                                    name={selectedCup.name}
                                    img={selectedCup.img}
                                    price={selectedCup.price}
                                    previouslySelected={true}
                                    noText={true}
                                />
                            </div>

                            <div className="order-review-container order-review-profit-container">
                                <img className="status-icon" src={Profit} alt="Profit icon" height="30px"/>
                                <h3 className="h3-vertical-center">Profit: ${finalPrice} - ${selectedCup.price} - ${selectedPackage.price} = ${profit}</h3>
                            </div>
            
                            <div className="inline">
                                <div className="order-review-container order-review-time-container inline">
                                    <img className="h3-vertical-center" src={Timer} alt="Timer icon" height="30px"/>
                                    <h3 className="inline">{20 - counter} sec</h3>
                                </div>
                
                                <div className="order-review-container order-review-rating-container inline">
                                    <img className="status-icon" src={Star} alt="Star icon" height="30px"/>
                                    <h3 className="inline">{(Math.round( thisRoundRating * 10 ) / 10).toFixed(1)}</h3>
                                </div>
                            </div>

                            <Link to={{
                                    pathname: `${orderNum === 10 ? "/game-result" : "/cup-selection"}`,
                                }}
                                onClick={() => {
                                    dispatch(resetSelections());
                                    dispatch(resetTimeRemained());
                                    dispatch(resetRoundRating());
                                    dispatch(resetSelections());
                                }}>
                                <button className="common-btn green-btn order-review-btn">{orderNum === 10 ? "View the result" : "Start next order"}</button>
                            </Link>
                        </div>
                    </div>
                </div>
            );   
        } else {
            if (location.state.previousSteps){
                return (
                    <div>
                        <Header />
                        <div className="container">
                            <h1>Order Review [{orderNum} /10]</h1>
                            <p>Order failed.</p>
                            <Link to={{
                                    pathname: `${orderNum === 10 ? "/game-result" : "/cup-selection"}`,
                                }}
                                onClick={() => {
                                    dispatch(resetSelections());
                                    dispatch(resetTimeRemained());
                                    dispatch(resetRoundRating());
                                    dispatch(resetSelections());
                                }}>
                                <button className="common-btn green-btn">{orderNum === 10 ? "View the result" : "Start next order"}</button>
                            </Link>
                        </div>
                    </div>
                );   
            } else {
                return (
                    <Redirect to="/" />
                );
            }
        }
    } else {
        return (
            <Redirect to="/" />
        );
    }
}

export default OrderReviewPage;

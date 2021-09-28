import React, { useEffect } from 'react';
import { Link, Redirect } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import '../css/CommonStyles.css';
import Header from '../components/Header';
import { addProfit, addRating, resetRoundRating, resetSelections, resetTimeRemained, updateThisRoundRating } from '../store/orders/reducers';

function OrderReviewPage({location}) {  
    const orderNum = useSelector(state => state.reducer[0].orderNum);
    const selectedCup = useSelector(state => state.reducer[0].selections[0]);
    const selectedPackage = useSelector(state => state.reducer[0].selections[1]);
    const timeRemained = useSelector(state => state.reducer[0].timeRemained);
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
        if (location.state.previousSteps){
            // if (selectedCup && selectedPackage){
                if (location.state.orderCompleted){
                    const finalPrice = location.state.finalPrice;
                    const profit = finalPrice - selectedCup.price - selectedPackage.price;
                    return (
                        <div>
                            <Header />
                            <div className="container">
                                <h1>Order Review [{orderNum} /10]</h1>
                                <div>
                                    <span>Profit: ${finalPrice} - ${selectedCup.price} - ${selectedPackage.price} = ${profit}</span>
                                </div>
                
                                <div>
                                    <img src="" alt=""/><span>{20 - timeRemained} sec</span>
                                </div>
                
                                <div>
                                    <img src="" alt=""/><span>{(Math.round( thisRoundRating * 10 ) / 10).toFixed(1)}</span>
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
                                    <button>{orderNum === 10 ? "View the result" : "Start next order"}</button>
                                </Link>
                            </div>
                        </div>
                    );   
                } else {
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
                                    <button>{orderNum === 10 ? "View the result" : "Start next order"}</button>
                                </Link>
                            </div>
                        </div>
                    );   
                }
            // }
        }
    } else {
        return (
            <Redirect to="/" />
        )
    }
}

export default OrderReviewPage;
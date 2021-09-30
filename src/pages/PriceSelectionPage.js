import React, { useState, useEffect } from 'react';
import { Link, Redirect } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { incrementOrder, updateThisRoundRating } from '../store/orders/reducers';
import SelectionCard from '../components/SelectionCard';
import '../css/CommonStyles.css';

function PriceSelectionPage({location}) {
    const [pressed, setPressed] = useState(0);
    const [price, setPrice] = useState("");
    const orderNum = useSelector(state => state.reducer[0].orderNum);
    const selectedCup = useSelector(state => state.reducer[0].selections[0]);
    const selectedPackage = useSelector(state => state.reducer[0].selections[1]);
    const [finalPrice, setFinalPrice] = useState(0);
    const dispatch = useDispatch();

    const [counter, setCounter] = useState(20);

    useEffect(() => {
        console.log("location: " + JSON.stringify(location))
        if (location.state){
            setCounter(location.state.counter);

            if (selectedPackage.name === 'Biodegradable cornstarch mailers'){
                dispatch(updateThisRoundRating(0.1));
            }

            if (selectedCup.name === 'Plastic'){
                if (selectedPackage.name !== 'Biodegradable cornstarch mailers'){
                    dispatch(updateThisRoundRating(-0.3));
                }
            } else if (selectedCup.name === 'Reusable'){
                if (selectedPackage.name !== 'Biodegradable cornstarch mailers'){
                    dispatch(updateThisRoundRating(-0.3));
                }
            } else if (selectedCup.name === 'Cupify brand'){
                if (selectedPackage.name !== 'Cupify padded mailers'){
                    dispatch(updateThisRoundRating(-0.3));
                }
            } else if (selectedCup.name === 'Glass'){
                if (selectedPackage.name === 'Cupify padded mailers'){
                    dispatch(updateThisRoundRating(-0.3));
                } else if (selectedPackage.name === 'Biodegradable cornstarch mailers'){
                    dispatch(updateThisRoundRating(-2.0));
                }
            } else if (selectedCup.name === 'Teacup set'){
                if (selectedPackage.name === 'Cupify padded mailers'){
                    dispatch(updateThisRoundRating(-0.3));
                } else if (selectedPackage.name === 'Biodegradable cornstarch mailers'){
                    dispatch(updateThisRoundRating(-2.0));
                }
            }
        }
    }, []);

    useEffect(() => {
        const timer =
        counter > 0 && setInterval(() => setCounter(counter - 1), 1000);
        return () => clearInterval(timer);
    }, [counter]);

    if (counter <= 0){
        return (
          <Redirect to={{
            pathname: "/order-review",
            state: { orderCompleted: false, previousSteps: true }
          }}/>
        )
    } 

        if (selectedCup && selectedPackage){
            return (
                <div className="container game-step-box">
                    <div className="counter-container">
                        <h3 style={{verticalAlign: "middle", display: "table-cell"}}>{counter >= 10 ? "00:" + counter : "00:0" + counter}</h3>
                    </div>
                    <div className="card-container">
                        <SelectionCard 
                            name={selectedCup.name}
                            img={selectedCup.img}
                            price={selectedCup.price}
                            link=""
                        />
                        <SelectionCard 
                            name={selectedPackage.name}
                            img={selectedPackage.img}
                            price={selectedPackage.price}
                            link=""
                        />
                    </div>
                    <h2 className="game-step-title">Choose the price for your cup</h2>
    
                    <div>
                        <button 
                            className={`${pressed === 1 ? "green-card-pressed" : "white-card-grey-border"} price-card`}
                            onClick={()=>{
                                setFinalPrice(Math.round((selectedCup.price + selectedPackage.price) * 1.5));
                                setPrice("cheap");
                                setPressed(1);
                            }}>
                            ${Math.round((selectedCup.price + selectedPackage.price) * 1.5)}
                        </button>
                    </div>
    
                    <div>
                        <button className={`${pressed === 2 ? "green-card-pressed" : "white-card-grey-border"} price-card`}
                            onClick={()=>{
                                setFinalPrice(Math.round((selectedCup.price + selectedPackage.price) * 2));
                                setPrice("moderate");
                                setPressed(2);
                            }}>
                            ${Math.round((selectedCup.price + selectedPackage.price) * 2)}
                        </button>
                    </div>
    
                    <div>
                        <button className={`${pressed === 3 ? "green-card-pressed" : "white-card-grey-border"} price-card`}
                            onClick={()=>{
                                setFinalPrice(Math.round((selectedCup.price + selectedPackage.price) * 3));
                                setPrice("expensive");
                                setPressed(3);
                        }}>
                            ${Math.round((selectedCup.price + selectedPackage.price) * 3)}
                        </button>
                    </div>
    
                    <Link to={{
                            pathname: "/order-review",
                            state: { finalPrice: finalPrice, orderCompleted: true, price: price }
                        }}
                          onClick={() => dispatch(incrementOrder(orderNum))}>
                        <button className="common-btn green-btn">Send shipping</button>
                    </Link>
                </div>
            );
        } else {
            console.log("redirect to main: price");
            return (
                <Redirect to="/" />
            )
        }
    
}

export default PriceSelectionPage;
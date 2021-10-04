import React, {useState, useEffect} from 'react';
import { Link, Redirect } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import SelectionCard from '../components/SelectionCard';
import GameStatus from '../components/GameStatus';
import Header from '../components/Header';
import { addSelections } from '../store/orders/reducers';
import '../css/CommonStyles.css';
import ReusableCup from '../img/reusable-cup.png';
import Glass from '../img/glass.png';
import cupifyBrand from '../img/cupify-brand-cup.png';
import plastic from '../img/plastic-cup.png';
import TeaSet from '../img/tea-set.png';
import Logo from '../img/logo-horizontal-white.png';
import Star from '../img/star-icon.png';
import MoneyBag from '../img/money-bag-icon.png';

function ProductSelectionPage() {
    // const timeRemained = useSelector(state => state.reducer[0].timeRemained);
    const rating = useSelector(state => state.reducer[0].thisRoundRating);
    const money = useSelector(state => state.reducer[0].totalMoney);
    const [counter, setCounter] = useState(20);
    const dispatch = useDispatch();
    
    useEffect(() => {
        setCounter(20);
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

    return (
        <div className="container game-step-box background-img">
            <div className="row status-bar">
                <Header game={true}/>
                <div className="col-5">
                    <div className="counter-container">
                        <h3 className="h3-vertical-center">{counter >= 10 ? "00:" + counter : "00:0" + counter}</h3>
                    </div>
                </div>
                <GameStatus />
            </div>
            <h2 className="game-step-title font-white">Choose a cup you want to sell</h2>

            <div className="card-container">
                    <Link to={{
                            pathname: "/package-selection",
                            state: { counter: counter }
                        }} 
                            onClick={() => {
                            dispatch(addSelections({name: "Plastic", img: plastic, price: 2})); 
                          }}>
                        <SelectionCard 
                            name="Plastic"
                            img={plastic}
                            price={2}
                        />
                    </Link>
                    <Link to={{
                            pathname: "/package-selection",
                            state: { counter: counter }
                    }}
                        onClick={() => {
                        dispatch(addSelections({name: "Reusable", img: ReusableCup, price: 5})); 
                      }}>
                        <SelectionCard 
                            name="Reusable"
                            img={ReusableCup}
                            price={5}
                        />
                    </Link>
                    <Link to={{
                            pathname: "/package-selection",
                            state: { counter: counter }
                    }}
                    onClick={() => {
                        dispatch(addSelections({name: "Cupify cup", img: cupifyBrand, price: 10})); 
                      }}>
                        <SelectionCard 
                            name="Cupify cup"
                            img={cupifyBrand}
                            price={10}
                        />
                    </Link>
                    <Link to={{
                            pathname: "/package-selection",
                            state: { counter: counter }
                    }}
                    onClick={() => {
                        dispatch(addSelections({name: "Glass", img: Glass, price: 12})); 
                      }}>
                        <SelectionCard 
                            name="Glass"
                            img={Glass}
                            price={12}
                        />
                    </Link>
                    <Link to={{
                            pathname: "/package-selection",
                            state: { counter: counter }
                    }}
                    onClick={() => {
                        dispatch(addSelections({name: "Tea set", img: TeaSet, price: 15})); 
                      }}>
                        <SelectionCard 
                            name="Teacup sets"
                            img={TeaSet}
                            price={15}
                        />
                    </Link>
            </div>
        </div>
    );
}

export default ProductSelectionPage;
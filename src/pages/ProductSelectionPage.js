import React, {useState, useEffect} from 'react';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import SelectionCard from '../components/SelectionCard';
// import Timer from '../components/Timer';
import { addSelections } from '../store/orders/reducers';
import '../css/CommonStyles.css';

function ProductSelectionPage() {
    const timeRemained = useSelector(state => state.reducer[0].timeRemained);
    const [counter, setCounter] = useState(0);
    const dispatch = useDispatch();
    
    useEffect(() => {
        setCounter(20);
    }, []);

    useEffect(() => {
        const timer =
        counter > 0 && setInterval(() => setCounter(counter - 1), 1000);
        return () => clearInterval(timer);
    }, [counter]);

    return (
        <div className="container game-step-box">
            {/* <Timer timeRemained={timeRemained}/> */}
            <div>CountDown: {counter}</div>
            <h2 className="game-step-title">Choose a cup you want to sell</h2>

            <div className="card-container">
                <div>
                    <Link to={{
                            pathname: "/package-selection",
                            state: { counter: counter }
                        }} 
                            onClick={() => {
                            dispatch(addSelections({name: "Plastic", img: "", price: 2})); 
                          }}>
                        <SelectionCard 
                            name="Plastic"
                            img=""
                            price={2}
                            // link="/package-selection"
                        />
                    </Link>
                    <Link to={{
                            pathname: "/package-selection",
                            state: { counter: counter }
                    }}
                        onClick={() => {
                        dispatch(addSelections({name: "Reusable", img: "", price: 2})); 
                      }}>
                        <SelectionCard 
                            name="Reusable"
                            img=""
                            price={2}
                            // link="/package-selection"
                        />
                    </Link>
                    <Link to={{
                            pathname: "/package-selection",
                            state: { counter: counter }
                    }}
                    onClick={() => {
                        dispatch(addSelections({name: "Cupify cup", img: "", price: 2})); 
                      }}>
                        <SelectionCard 
                            name="Cupify cup"
                            img=""
                            price={10}
                            // link="/package-selection"
                        />
                    </Link>
                    <Link to={{
                            pathname: "/package-selection",
                            state: { counter: counter }
                    }}
                    onClick={() => {
                        dispatch(addSelections({name: "Glass", img: "", price: 2})); 
                      }}>
                        <SelectionCard 
                            name="Glass"
                            img=""
                            price={12}
                            // link="/package-selection"
                        />
                    </Link>
                    <Link to={{
                            pathname: "/package-selection",
                            state: { counter: counter }
                    }}
                    onClick={() => {
                        dispatch(addSelections({name: "Tea set", img: "", price: 2})); 
                      }}>
                        <SelectionCard 
                            name="Tea set"
                            img=""
                            price={15}
                            // link="/package-selection"
                        />
                    </Link>
                </div>
            </div>
        </div>
    );
}

export default ProductSelectionPage;
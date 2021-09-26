import React, { useState, useEffect } from 'react';
import { Link, Redirect } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import SelectionCard from '../components/SelectionCard';
import { addSelections } from '../store/orders/reducers';
import '../css/CommonStyles.css';

function PackageSelectionPage({location}) {
    const selectedCup = useSelector(state => state.reducer[0].selections[0]);
    const [counter, setCounter] = useState(0);
    const dispatch = useDispatch();

    useEffect(() => {
        console.log("location: " + JSON.stringify(location))
        setCounter(location.state.counter);
    }, []);

    useEffect(() => {
        const timer =
        counter > 0 && setInterval(() => setCounter(counter - 1), 1000);
        return () => clearInterval(timer);
    }, [counter]);

    if (selectedCup){
        return (
            <div className="container game-step-box">
                <SelectionCard 
                    name={selectedCup.name}
                    img={selectedCup.img}
                    price={selectedCup.price}
                    link=""
                />
                <div>CountDown: {counter}</div>
                <h2 className="game-step-title">Choose best packaging for the cup you chose</h2>
    
                <div className="card-container">
                    <div>
                        <Link to={{
                            pathname: "/price-selection",
                            state: { counter: counter }
                        }} 
                            onClick={() => {
                            dispatch(addSelections({name: "Cupify Padded Mailer", img: "", price: 2})); 
                          }}>
                            <SelectionCard 
                                name="Cupify Padded Mailer"
                                img=""
                                price={2}
                            />
                        </Link>
                        <Link to={{
                            pathname: "/price-selection",
                            state: { counter: counter }
                        }} 
                            onClick={() => {
                            dispatch(addSelections({name: "Plastic", img: "", price: 2})); 
                          }}>
                            <SelectionCard 
                                name="Cupify Padded Mailer2"
                                img=""
                                price={2}
                            />
                        </Link>
                        <Link to={{
                            pathname: "/price-selection",
                            state: { counter: counter }
                        }} 
                            onClick={() => {
                            dispatch(addSelections({name: "Plastic", img: "", price: 2})); 
                          }}>
                            <SelectionCard 
                                name="Cupify Padded Mailer3"
                                img=""
                                price={2}
                            />
                        </Link>
                    </div>
                </div>
            </div>
        );
    } else {
        return (
            <Redirect to="/" />
        )
    }
    
}

export default PackageSelectionPage;
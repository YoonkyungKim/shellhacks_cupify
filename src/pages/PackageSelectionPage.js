import React, { useState, useEffect } from 'react';
import { Link, Redirect } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import SelectionCard from '../components/SelectionCard';
import { addSelections } from '../store/orders/reducers';
import heavyDutyBox from '../img/heavy-duty-box.png';
import biodegradeableCornstarchMailer from '../img/biodegradeable-cornstarch-mailer.png';
import cupifyPaddedMailer from '../img/cupify-padded-mailer.png';
import '../css/CommonStyles.css';

function PackageSelectionPage({location}) {
    const selectedCup = useSelector(state => state.reducer[0].selections[0]);
    const [counter, setCounter] = useState(20);
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

    if (counter <= 0){
        return (
          <Redirect to={{
            pathname: "/order-review",
            state: { orderCompleted: false, previousSteps: true }
          }}/>
        )
    } else {
        if (selectedCup){
            return (
                <div className="container game-step-box background-img">
                    <SelectionCard 
                        name={selectedCup.name}
                        img={selectedCup.img}
                        price={selectedCup.price}
                        link=""
                    />
                    <div className="counter-container">
                        <h3 style={{verticalAlign: "middle", display: "table-cell"}}>{counter >= 10 ? "00:" + counter : "00:0" + counter}</h3>
                    </div>
                    <h2 className="game-step-title" style={{color: "#ffffff"}}>Choose best packaging for the cup you chose</h2>
        
                    <div className="card-container">
                        <div>
                            <Link to={{
                                pathname: "/price-selection",
                                state: { counter: counter }
                            }} 
                                onClick={() => {
                                dispatch(addSelections({name: "Cupify padded mailer", img: cupifyPaddedMailer, price: 2})); 
                              }}>
                                <SelectionCard 
                                    name="Cupify padded mailer"
                                    img={cupifyPaddedMailer}
                                    price={2}
                                />
                            </Link>
                            <Link to={{
                                pathname: "/price-selection",
                                state: { counter: counter }
                            }} 
                                onClick={() => {
                                dispatch(addSelections({name: "Biodegradeable cornstarch mailer", img: biodegradeableCornstarchMailer, price: 2})); 
                              }}>
                                <SelectionCard 
                                    name="Biodegradeable cornstarch mailer"
                                    img={biodegradeableCornstarchMailer}
                                    price={2}
                                />
                            </Link>
                            <Link to={{
                                pathname: "/price-selection",
                                state: { counter: counter }
                            }} 
                                onClick={() => {
                                dispatch(addSelections({name: "Heavy duty box", img: heavyDutyBox, price: 4})); 
                              }}>
                                <SelectionCard 
                                    name="Heavy duty box"
                                    img={heavyDutyBox}
                                    price={4}
                                />
                            </Link>
                        </div>
                    </div>
                </div>
            );
        } else {
            console.log("redirect to main: package");
            return (
                <Redirect to="/" />
            )
        }
    }    
    
}

export default PackageSelectionPage;
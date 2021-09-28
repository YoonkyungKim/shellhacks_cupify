import React, { useState, useEffect, useRef } from 'react';
import { Redirect } from 'react-router-dom';
import '../css/CommonStyles.css';
import '../css/blackBg.css';
import Header from '../components/Header';

function useInterval(callback, delay) {
    const savedCallback = useRef();

    useEffect(() => {
        savedCallback.current = callback;
    }, [callback]);

    useEffect(() => {
        let id = setInterval(() => {
            savedCallback.current();
        }, delay);
        return () => clearInterval(id);
    }, [delay]);
}

function StartCountdownPage() {
    const [count, setCount] = useState(3);

    useInterval(() => {
        if (count >= 1){
            setCount(count - 1);
        } else {
            return <Redirect to='/cup-selection' />
        }
    }, 1000);

    if (count <= 0){
        return <Redirect to='/cup-selection' />
    }   
    return (
        <div className="black-bg" style={{}}>
            <Header />
            <div className="container" style={{marginTop: "70px", backgroundColor: "#96bf47", display: "table", textAlign: "center", borderRadius: "3.5em", height: "500px"}}>
                <div className="count-circle-container" style={{margin: "100px auto", backgroundColor:"#ffffff", borderRadius: "10em", width: "300px", height: "300px", textAlign: "center", display: "table", verticalAlign: "middle", }} >
                    <h1 className="start-countdown-font" style={{verticalAlign: "middle", display: "table-cell"}}>{count}</h1>
                </div>
            </div>
        </div>
    );
}

export default StartCountdownPage;
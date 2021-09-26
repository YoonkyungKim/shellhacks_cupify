import React, { useState, useEffect, useRef } from 'react';
import { Redirect } from 'react-router-dom';
import '../css/CommonStyles.css';
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
        <div>
            <Header />
            <div className="container">
                <h1>START</h1>
                <div className="count-circle-container">
                    <h1>{count}</h1>
                </div>
            </div>
        </div>
    );
}

export default StartCountdownPage;
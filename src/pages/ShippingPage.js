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

function ShippingPage() {
    useEffect(() => {
        setTimeout(() => { 
            return <Redirect to='/order-review' />
        }, 3000);
        // return () => {
            
        // }
    }, [])
    // const [count, setCount] = useState(3);

    // useInterval(() => {
    //     if (count >= 1){
    //         setCount(count - 1);
    //     } else {
    //         return <Redirect to='/cup-selection' />
    //     }
    // }, 1000);

    // if (count <= 0){
    //     return <Redirect to='/cup-selection' />
    // }   
    return (
        <div>
            <Header />
            {/* <div className="container"> */}
                <div className="shipping-img"></div>
            {/* </div> */}
        </div>
    );
}

export default ShippingPage;
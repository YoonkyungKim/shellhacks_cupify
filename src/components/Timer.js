import React, { useState, useEffect, useRef } from "react";
import { Redirect } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { incrementOrder } from '../store/orders/reducers';

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

function Timer({timeRemained}) {
  const [initialTime, setInitialTime] = useState(5); //temp value
  const orderNum = useSelector(state => state.reducer[0].orderNum);
  const dispatch = useDispatch();

  useInterval(() => {
    if (initialTime >= 1){
        setInitialTime(initialTime - 1);
    } 
    // else {
    //   return <Redirect to='/order-review' />
    // }
  }, 1000);

  if (initialTime <= 0){
    return (
      <Redirect to={{
        pathname: "/order-review",
        state: { orderCompleted: false }
      }}/>
    )
  }

  return (
    <div>
      <div>CountDown: {initialTime}</div>
    </div>
  );
}

export default Timer;
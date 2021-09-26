import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import '../css/CommonStyles.css';
import { addSelections } from '../store/orders/reducers';

function SelectionCard({name, img, price, link}) {

  const dispatch = useDispatch();
  if (link !== ""){
      return (
        // <Link to={link}
        //       onClick={() => {
        //         dispatch(addSelections({name: name, img: img, price: price})); 
        //       }}>
            <button className="col-2 common-card">
                <p>{name}</p>
                <img src={img} alt={name}/>
                <p>${price}</p>
            </button>
        // </Link>
      ); 
  } else {
    return (
        <button className="col-2 common-card white-card" disabled>
            <p>{name}</p>
            <img src={img} alt={name}/>
            <p>${price}</p>
        </button>
    );
  }
  
}

export default SelectionCard;
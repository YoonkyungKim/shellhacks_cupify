import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import '../css/CommonStyles.css';
import { addSelections } from '../store/orders/reducers';

function SelectionCard({name, img, price, previouslySelected, noText}) {

  return (
      <button className={`col-2 common-card 
                ${!previouslySelected ? "white-card-green-border" : "white-card-dark-green-border"}`} 
                disabled={previouslySelected}
      >
          <div className="img-box">
            <img width="150px" src={img} alt={name} />
          </div>

        {!noText && 
          <div className="card-text-box">
            <div className="card-text-align">
              <p className="card-text">{name}</p>
              <p className="card-text">${price}</p>
            </div>
          </div>
        }
      </button>
  ); 
  
}

export default SelectionCard;
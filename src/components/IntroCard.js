import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import '../css/CommonStyles.css';
import { addSelections } from '../store/orders/reducers';

function IntroCard({id, name, img}) {

    const textWithLineBreak = name.split('\n').map(str => <h4 className="card-text">{str}</h4>);

    return (
        <button className={"col-2 common-card intro-card white-card-no-border"} 
                disabled
        >
            <div className="count-circle-container intro-card-num-circle intro-table-div"  >
                <h3 className="font-white table-cell-text">{id}</h3>
            </div>

            <div className="intro-card-text-box">
                <div className="intro-card-text-align">
                    <h4 className="card-text">{textWithLineBreak}</h4>
                </div>
            </div>

            <div className="img-box">
                <img width="150px" src={img} alt={name} />
            </div>
        </button>
    ); 
  
}

export default IntroCard;
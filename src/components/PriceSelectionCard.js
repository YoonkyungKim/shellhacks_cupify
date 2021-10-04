import React from 'react';
import '../css/CommonStyles.css';

function PriceSelectionCard({id, price, pressed, onClick}) {

  return (
    <div>
        <button 
            className={`${pressed === id ? "green-card-pressed" : "white-card-grey-border"} price-card`}
            onClick={onClick}
            // onClick={()=>{
            //     setFinalPrice(Math.round((cupPrice + packagePrice) * 1.5));
            //     setPrice("cheap");
            //     setPressed(1);
            // }}
            >
            {price}
        </button>
    </div>
  ); 
  
}

export default PriceSelectionCard;
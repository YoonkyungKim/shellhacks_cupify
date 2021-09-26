import React from 'react';
import '../css/GameStepCard.css';

function GameStepCard({title, img, description}) {
  return (
    <div className="col-3">
        <img src={img} alt={title}/>
        <p>{title}</p>
        <p>{description}</p>
    </div>
  );
}

export default GameStepCard;
import React from 'react';
import '../css/GameStepCard.css';

function GameStepCard({title, img, description}) {
  return (
    <div className="col-4 game-step-card-box">
      <div className="game-step-card-inside-box">
        <div className="game-step-img-box">
          <img className="game-step-img" style={{marginBottom: '20px'}} src={img} alt={title}/>
        </div>
        <div className="game-step-text-box">
          <h4>{title}</h4>
          <p>{description}</p>
        </div>
      </div>
    </div>
  );
}

export default GameStepCard;
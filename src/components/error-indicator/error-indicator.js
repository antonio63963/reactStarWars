import React from 'react';
import './error-indicator.css'


function ErrorIndicator() {
  return (
    <div className="error-wrapper">
      <h4>BOOM!</h4>

      <p>Something has gone wrong!</p>
      <p>Someone attack the DeathStar!</p>
    </div>
  )
}

export default ErrorIndicator;
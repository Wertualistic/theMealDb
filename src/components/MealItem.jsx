import React from 'react'
import { Link } from 'react-router-dom';

function MealItem(props) {
    const { idMeal, strMeal, strMealThumb } = props;

  return (
    <div className="card">
        <div className="card-image">
          <img src={strMealThumb} />
        </div>
        <div className="card-content">
        <span className="card-title"><b>{strMeal}</b></span>
        </div>
        <div className="card-action">
            <Link to={`/meal/${idMeal}`} className='btn' >
                More Details
            </Link>
        </div>
      </div>
  )
}

export default MealItem;
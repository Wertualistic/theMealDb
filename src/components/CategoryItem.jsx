import React from 'react'
import { Link } from 'react-router-dom';

function CategoryItem(props) {
    const {idCategory, strCategory, strCategoryDescription, strCategoryThumb} = props;

  return (
      <div className="card">
        <div className="card-image">
          <img src={strCategoryThumb} />
        </div>
        <div className="card-content">
        <span className="card-title"><b>{strCategory}</b></span>
          <p>{strCategoryDescription.slice(0, 40)}...</p>
        </div>
        <div className="card-action">
            <Link to={`/category/${strCategory}`} className='btn' >
                More Details
            </Link>
        </div>
      </div>
  )
}

export default CategoryItem;
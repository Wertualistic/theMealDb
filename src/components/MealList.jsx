import React from "react";
import MealItem from "./MealItem";

function MealList({ meals = [] }) {

  return (
    <div className="list">
      {meals.map((meal) => {
        return <MealItem {...meal} key={meal.idMeal} />;
      })}
    </div>
  );
}

export default MealList;

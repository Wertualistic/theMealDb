import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getFilterByCategories } from "../api";
import Loader from "../components/Loader";
import MealList from "../components/MealList";

function Category() {
  const { name } = useParams();
  const [meals, setMeals] = useState([]);

  useEffect(() => {
    getFilterByCategories(name).then((data) => setMeals(data.meals));
  }, [name]);

  return <>{meals === null ? <Loader /> : <MealList meals={meals} />}</>;
}

export default Category;

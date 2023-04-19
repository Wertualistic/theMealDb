import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import { API_URL } from "../config";

const Search = () => {
  const [searchQuery, setSearchQuery] = useState("Beef");
  const [searchResults, setSearchResults] = useState([]);
  const [meals, setMeals] = useState([]);
  console.log(searchResults);
  console.log(meals);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          `${API_URL}search.php?s=${searchQuery}`
        );
        const meals = response.data.meals;
        setMeals(meals);
      } catch (error) {
        console.error("Error fetching meals:", error);
      }
    };

    fetchData(); 
  }, [searchQuery]); 

  const handleSearch = (e) => {
    const searchQuery = e.target.value; 
    const searchQueryLowercase = searchQuery.toLowerCase(); 

    const searchResults = meals
      ? meals.filter((meal) => {
          const mealNameLowercase = meal.strMeal.toLowerCase();
          return mealNameLowercase.includes(searchQueryLowercase);
        })
      : [];

    setSearchResults(searchResults);
  };

  return (
    <div>
      <div className="input-field">
        <input
          type="text"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          onKeyDown={handleSearch}
        />
        <button onClick={handleSearch} className="btn">
          Search
        </button>
      </div>

      <ul className="list">
        {meals === null ? (
          <h1>No Results</h1>
        ) : (
          searchResults.map((meal) => {
            return (
              <>
                  <div className="card">
                    <div className="card-image">
                      <img src={meal.strMealThumb} />
                    </div>
                    <div className="card-content">
                      <span className="card-title">
                        <b>{meal.strMeal}</b>
                      </span>
                    </div>
                    <div className="card-action">
                      <Link to={`/meal/${meal.idMeal}`} className="btn">
                        More Details
                      </Link>
                    </div>
                  </div>
              </>
            );
          })
        )}
      </ul>
    </div>
  );
};

export default Search;

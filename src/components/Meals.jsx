import { useEffect, useState } from "react";
import MealItem from "./MealItem";

function Meals() {
  const [loadedMeals, setLoadedMeals] = useState([]);
  useEffect(() => {
    async function fetchMeals() {
      const mealsResponse = await fetch("http://localhost:9835/meals");
      if (!mealsResponse.ok) {
        //...
      }
      const meals = await mealsResponse.json();
      console.log(meals);
      setLoadedMeals(meals);
    }
    fetchMeals();
  }, []);
  return (
    <ul id="meals">
      {loadedMeals.map((meal) => (
        <MealItem key={meal.id} mealItem={meal} />
      ))}
    </ul>
  );
}
export default Meals;

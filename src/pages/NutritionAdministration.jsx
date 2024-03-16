import { useState } from "react";
import FoodForm from './../components/nutrition/administration/FoodForm';
import FoodList from './../components/nutrition/administration/FoodList';

export default function NutritionAdministration() {
  const [isFoodFormDisplayed, setIsFoodFormDisplayed] = useState(false)
  const [foodToUpdate, setFoodToUpdate] = useState(null);

  const addFood = () => {
    setFoodToUpdate(null);
    setIsFoodFormDisplayed(true);
  }

  const goToEdition = (food) => {
    setFoodToUpdate(food);
    setIsFoodFormDisplayed(true);
  }

  return (
    <div className="p-5">
      {isFoodFormDisplayed && (
        <FoodForm food={foodToUpdate} close={() => setIsFoodFormDisplayed(false)}/>
      )}

      <div className="w-full">
        <img src="/assets/icons/global/plus-dynamic-premium.png" alt="add" className="w-20 pointer" onClick={addFood} />
      </div>
      <FoodList editFood={goToEdition} />

    </div>
  );
}
import { useEffect, useState } from "react";
import { useNutrition } from "../../../utils/NutritionContext";
import CardTitle from "../../CardTitle";

export default function FavoriteCard() {
  const { foodsWithTotalQuantity } = useNutrition();
  const [favoriteFoods, setFavoriteFoods] = useState([])

  useEffect(() => {
    console.log(foodsWithTotalQuantity);
    const top3foods = getTop3Foods();
    setFavoriteFoods(top3foods);
  }, [foodsWithTotalQuantity]);

  const getTop3Foods = () => {
    const filteredFoods = foodsWithTotalQuantity.filter((food) => food.unity !== "Portion" );
    const sortedFoods = [...filteredFoods].sort((a, b) => b.totalQuantity - a.totalQuantity);
    const top3 = sortedFoods.slice(0, 3);
    return top3;
  }

  return (
    <div className="grow bg-dark px-5 py-3 shadow rounded-2xl">
      <CardTitle text="Top 3 Food" />
      <div className="flex justify-evenly p-5">
        {favoriteFoods && favoriteFoods.map((food) => {
          return (
            <div key={food.id} className="text-center">
              <p className="text-xl">{food.name}</p>
              <div className="flex justify-center items-end">
                <p className="text-3xl font-bold">{food.totalQuantity}</p>
                <span className="text-xl">{food.unity}</span>
              </div>
            </div>
          )      
        })}
      </div>
    </div>
  )
}
import { useEffect, useState } from "react";
import { Meal, Welcome } from "../interfaces/mealIntarface";

export const useMeals = () => {
  const [comida, setComida] = useState<Meal[]>([]);
  const [cargando, setCargando] = useState(true);
  const [retry, setRetry] = useState(false);

  const name = async () => {
    const res = await fetch(
      "https://www.themealdb.com/api/json/v1/1/random.php"
    );
    const data: Welcome = await res.json();
    setComida(data.meals);
    setTimeout(() => {
      setCargando(false);
    }, 5000);
  };

  useEffect(() => {
    setCargando(true);
    name();
  }, [retry]);

  return { comida, cargando, setRetry, retry };
};

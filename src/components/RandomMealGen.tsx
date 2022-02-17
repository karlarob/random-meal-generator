import { useMeals } from "../hooks/useMeals";
import hamburguer from "../assets/img/pixel_ham.png";
import { RandomReveal } from "react-random-reveal";
import ConfettiExplosion from "react-confetti-explosion";

const RandomMealGen = () => {
  const { comida, cargando, setRetry, retry } = useMeals();

  const customBkg = {
    backgroundColor: "#e5e5f7",
    opacity: "0.8",
    backgroundImage:
      "linear-gradient(135deg, #ca2323 25%, transparent 25%), linear-gradient(225deg, #ca2323 25%, transparent 25%), linear-gradient(45deg, #ca2323 25%, transparent 25%), linear-gradient(315deg, #ca2323 25%, #e5e5f7 25%)",
    backgroundPosition: "38px 0, 38px 0, 0 0, 0 0",
    backgroundSize: "38px 38px",
    backgroundRepeat: "repeat",
  };

  return (
    <div
      className="h-screen font-pixelMix animate-move-bkg overflow-hidden"
      style={customBkg}
    >
      <h1 className="font-pixelBold p-3 lg:p-9 lg:text-6xl md:text-5xl text-3xl text-center">
        Random Meal Generator
      </h1>

      <div className="bg-sky-600 border-sky-800 py-9 border-8 border-double w-auto lg:w-3/6 sm:w-4/5  m-auto h-4/5 sm:h-4/5 rounded-md shadow-2xl text-center">
        <p onClick={() => setRetry(!retry)} className="pl-9 text-left text-xs">
          Retry?
        </p>
        <img
          className="m-auto py-5 sm:py-2 w-20"
          width={100}
          src={hamburguer}
          alt="pixel hamburguer"
        />
        <div className="text-md lg:text-2xl md:text-xl relative">
          <div
            className={
              cargando ? "opacity-1 " : "opacity-0 " + "absolute left-0 right-0"
            }
          >
            <RandomReveal
              isPlaying={cargando}
              duration={Infinity}
              updateInterval={0.065}
              characterSet={[
                "Kumpir",
                "Hamburguer",
                "Nuggets",
                "Hot Cakes",
                "Pizza",
                "Pasta",
                "Vietnamese Grilled Pork",
                "Parkin Cake",
                "Beef and Mustard Pie",
                "Spicy Arrabiata Penne",
                "Chicken with Roasted Carrots",
                "Stuffed Lamb Tomatoes",
                "Ma Po Tofu",
                "Nanaimo Bars",
                "Koshari",
                "Sushi",
                "Meatballs",
                "Summer Pistou",
                "Shakshuka",
                "Portuguese prego with green piri-piri",
                "Tarte Tatin",
                "Hot and Sour Soup",
                "Tandoori chicken",
                "Feteer Meshaltet",
                "Kidney Bean Curry",
                "BBQ Pork Sloppy Joes",
                "Chicken Parmentier",
                "Beef stroganoff",
                "Canadian Butter Tarts",
                "Pad See Ew",
                "Montreal Smoked Meat",
                "Clam chowder",
              ]}
              characters=" "
            />
          </div>
          {comida.map((item) => (
            <>
              <h1
                className={
                  (cargando
                    ? "opacity-0 "
                    : "opacity-1 lg:scale-150 md:scale-105 scale-100 ") +
                  "transition-transform absolute left-0 right-0"
                }
              >
                {item.strMeal}
              </h1>
              <div className="absolute inset-x-1/2">
                {!cargando && (
                  <ConfettiExplosion
                    force={0.6}
                    duration={5000}
                    particleCount={200}
                    floorHeight={1600}
                    floorWidth={1600}
                  />
                )}
              </div>
              <img
                width={300}
                className={
                  (cargando ? "opacity-0 h-0 " : "opacity-1 h-auto ") +
                  "m-auto pt-10 pb-10 lg:pt-20 lg:pb-20 transition-opacity w-48"
                }
                src={item.strMealThumb}
                alt={item.strMeal}
              />
              {item.strSource && (
                <a
                  className={
                    (cargando ? "opacity-0 " : "opacity-1 ") +
                    "bg-red-600 border-white rounded-md p-4 border-8 border-double text-white transition-opacity"
                  }
                  href={item.strSource}
                >
                  Learn how to do it!
                </a>
              )}
            </>
          ))}
        </div>
      </div>
    </div>
  );
};

export default RandomMealGen;

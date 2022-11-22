import React from "react";
import { Link } from "react-router-dom";
import { useGlobalContext } from "../../Context/Context";

const DataCard = () => {
  const { cocktail,cocktailidCheck } = useGlobalContext();
 if (cocktail.length!==0) {
    return (
        <div>
          <div class="row row-cols-1 row-cols-md-3 g-4">
            {cocktail.drinks.map((wine) => {
               
              const {
                strDrinkThumb,
                strCategory,
                strAlcoholic,
                idDrink,
                strInstructions,
                strIngredient1,
              } = wine;
              return (
               <Link to={`/cocktail/${idDrink}`} key={idDrink}>  <div class="col"  >
               <div class="card">
                 <img
                   src={strDrinkThumb}
                   class="card-img-top"
                   alt={strAlcoholic}
                 />
                 <div class="card-body">
                   <h5 class="card-title">{strAlcoholic}</h5>
                   <p class="card-text">{strInstructions}</p>
                 </div>
               </div>
             </div></Link>
              );
            })}
          </div>
        </div>
      );
    
 }
 
};

export default DataCard;

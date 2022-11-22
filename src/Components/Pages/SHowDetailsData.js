import React, { useEffect } from "react";
import { useGlobalContext } from "../../Context/Context";
import { useParams } from "react-router-dom";
import InvokeAPI from "../../APICall.js/ApiCall";
import { param } from "jquery";
const SHowDetailsData = () => {
  const { id } = useParams();
  console.log(id);

  const { detailsCocktail, setdetailsCocktail } = useGlobalContext();

  useEffect(() => {
    APIDETAILSCALL();
  }, [id]);
  const APIDETAILSCALL = async () => {
    const res = await InvokeAPI(
      "lookup.php",
      "get",
      "",
      "",
      (param = { i: id }),
      ""
    );
    setdetailsCocktail(res);
 
  };
 if (detailsCocktail.length !==0) {
    return (
        <div>
            {detailsCocktail.drinks.map((cocktail)=>{
                const {dateModified,strAlcoholic,strCategory,idDrink,strCreativeCommonsConfirmed,strDrink,strDrinkThumb,strGlass,strInstructions}=cocktail
                return     <div class="card" key={idDrink}>
                <img src={strDrinkThumb} class="card-img-top" alt={strAlcoholic} />
                <div class="card-body">
                  <h5 class="card-title">{strAlcoholic}</h5>
                  <p class="card-text">
                  {strInstructions}
                  </p>
                </div>
                <ul class="list-group list-group-flush">
                  <li class="list-group-item">{dateModified}</li>
                  <li class="list-group-item">A second item</li>
                  <li class="list-group-item">A third item</li>
                </ul>
                <div class="card-body">
                  <a href="#" class="card-link">
                  {}
                  </a>
                  
                </div>
              </div>
            })}
      
        </div>
      );
    
 }
};

export default SHowDetailsData;

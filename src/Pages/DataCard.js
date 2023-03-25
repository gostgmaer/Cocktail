import React from "react";
import { Link } from "react-router-dom";
import { useGlobalContext } from "../Context/Context";
import Loading from "../Notification/Loading";
// import { Audio } from  'react-loader-spinner'
// import 'react-loader-spinner/dist/loader/Circles'
import { Audio } from "react-loader-spinner";
const DataCard = () => {
  const { cocktail, cocktailidCheck,loading } = useGlobalContext();
  
    if (loading) {
     return (
    <div className=" justify-content-center"> <Audio
    height = "300"
    width = "100%"
    radius = "1000"
    color = '#212529'
    ariaLabel = 'three-dots-loading'     
    wrapperStyle
    wrapperClass
  /></div>)
      
    } 
    if (cocktail.length<1) {
      return <h4>No Data Found</h4>
      
    }
    else {
      return (
        <div className="col-10 m-auto">
          <div className="row row-cols-1 row-cols-md-3 g-4">
            {cocktail.map((wine) => {
              const {
                strDrinkThumb,
                strCategory,
                strAlcoholic,
                idDrink,
                strInstructions,
                strIngredient1,
                strDrink,
                strGlass,
              } = wine;
              return (
                <div className="col" key={idDrink}>
                  <div className="card">
                    <img
                      src={strDrinkThumb}
                      className="card-img-top img-fluid img-thumbnail  "
                      alt={strDrink}
                    />
                    <div className="card-body text-start">
                      <h4 className="card-title">{strDrink}</h4>
                      <p className="card-text fw-bold">
                        {strInstructions.substring(0, 20)}
                      </p>
                      <p className="card-text">{strGlass}</p>
                    </div>
                    <div className=" card-footer">
                    
                      <Link
                        to={`/cocktail/${idDrink}`}
                        className="btn btn-dark"
                      >
                        Get Details
                      </Link>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      )
    } 

};

export default DataCard;
